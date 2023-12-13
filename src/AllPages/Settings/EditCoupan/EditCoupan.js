import React, { useState, useEffect } from 'react';
import styles from './EditCoupan.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addNewCoupon, deleteCoupon, setCoupons, handleEdit } from '../../../ReduxState/Property/AddingCoupanDataSlice/AddingCoupanDataSlice';
import axios from 'axios';
// import { handleEdit deleteCoupon} from '../../../ReduxState/Property/AddingCoupanDataSlice/AddingCoupanDataSlice';

const EditCoupan = (props) => {
    const dispatch = useDispatch();
    console.log(props.editItem)
    const currentIndex = props.index;
    const { onClick } = props



    const [tests, setTests] = useState([
        {
            name: 'test1',
            price: '100',
            id: '4c5690d4-c365-41f4-82b5-32f520c9118b',
        },
        {
            name: 'test2',
            price: '200',
            id: '70b10b26-16ee-481a-9eb1-fe2878b2af9e',
        },
        {
            name: 'test3',
            price: '200',
            id: '70b10b236-16ee-481a-9eb1-fe2878b2af9e',
        },
        {
            name: 'test4',
            price: '200',
            id: '70b10b246-16ee-481a-9eb1-fe2878b2af9e',
        },
        {
            name: 'test5',
            price: '2004',
            id: '70b10b256-16ee-481a-9eb1-fe2878b2af9e',
        },
    ]);

    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [selectedTests, setSelectedTests] = useState(props.editItem.tests);
    const [addCoupanData, setAddCoupanData] = useState({})

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log('Selected Tests:', selectedTests);

    };

    const handleTestSelect = (test) => {
        setSelectedTests((prevSelectedTests) => {
            if (prevSelectedTests.some((prevSelectedTest) => prevSelectedTest.id === test.id)) {
                return prevSelectedTests.filter((selectedTest) => selectedTest.id !== test.id);
            } else {
                return [...prevSelectedTests, test];
            }
        });
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const filteredTests = tests.filter((test) =>
        test.name.toLowerCase().includes(searchText.toLowerCase())
    );


    const [formData, setFormData] = useState(props.editItem);
console.log(formData)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSave = async() => {
        const p = {
            "id":formData.id,
            "name": formData.name,
            "percent": formData.percent, //it is discount percentage
            "count": formData.count, //number of coupan
            startTime:  formData.startTime, // Modify this based on your initial data
            
            endTime:  formData.endTime // Modify this based on your initial data
            ,
            // "discountStartDate": formData.discountStartDate,
            // "discountExpiryDate": formData.discountExpiryDate,
            "recurrence": formData.recurrence,
            "tests": selectedTests
        }


        if (p) {
            try {

                const response = await axios.post('http://localhost:8090/first/v1/update-discount',  {"discount":p});
                alert("discount updated")
               
             

            } catch (err) {
                // Handle errors and display the error message from the server
                console.error(err);
                
                alert("discount not updated")
            }
        }




        console.log(p)
        dispatch(handleEdit({ index: currentIndex, updatedCoupon: p }));

        if (onClick) {
            onClick();
        }
    };
    const handleDelete = async () => {
   
        const x = {
      
            id: formData.id,
        }
        try {
            // Making a GET request to the onboard endpoint with the "labId" as a query parameter
            const response = await axios.post('http://localhost:8090/first/v1/delete-discount', x);
            console.log("deleted!")
        } catch (err) {
            // Handle errors and display the error message from the server
            console.error(err);
        }
        if (onClick) {
            onClick();
        }
    }

    const handleCancleCoupanandPage = () => {
        if (onClick) {
            onClick();
        }
        dispatch(setCoupons())
    }
    // console.log(selectedTests)
    console.log(formData)
    return (<>
        <div className={styles.prepareReportNav}>
            <div className={styles.prepareReportNavText1}>Edit coupon</div>
            <div onClick={handleDelete} className={styles.prepareReportNavText3}>Delete Coupan</div>

            {/* <div onClick={handleReject} className={styles.prepareReportNavText3}>Reject report</div> */}
            <div onClick={handleSave} className={styles.prepareReportNavText4}>Save</div>
            {/* <div onClick={onClick} className={styles.prepareReportNavText5}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div> */}
            <div onClick={handleCancleCoupanandPage} className={styles.prepareReportNavText5}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>



        <div className={styles.containerLayout}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <div className={styles.lableFontSize} htmlFor="coupon">Coupon Code</div>
                        <input
                            className={styles.inputFild}
                            type="text"
                            name="name"
                            placeholder="Coupon Code"
                            value={formData.name}
                            onChange={handleChange}

                        />
                    </div>
                    <div className={styles.column}>
                        <div className={styles.lableFontSize} htmlFor="discount">Discount Percentage</div>
                        <input
                            className={styles.inputFild}
                            type="text"
                            name="percent"
                            placeholder="Discount Percentage"
                            value={formData.percent}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.column}>
                        <div className={styles.lableFontSize} htmlFor="numberOfCoupons">Number of Coupons</div>
                        <input
                            className={styles.inputFild}
                            type="text"
                            name="count"
                            placeholder="Number of Coupons"
                            value={formData.count}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <div className={styles.lableFontSize} htmlFor="discountStartDate">Discount Start Date</div>
                        <input
                            className={styles.inputFild}
                            type="date"
                            name="startTime"
                            value={formData.startTime.iso8601}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.column}>
                        <div className={styles.lableFontSize} htmlFor="discountExpiryDate">Discount Expiry Date</div>
                        <input
                            className={styles.inputFild}
                            type="date"
                            name="endTime"
                            value={formData.endTime.iso8601}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.column}>
                        <div className={styles.lableFontSize} htmlFor="recurrence">Recurrence</div>
                        <input
                            className={styles.inputFild}
                            type="text"
                            name="recurrence"
                            placeholder="Recurrence"
                            value={formData.recurrence}
                            onChange={handleChange}
                        />
                         {/* <select
                            
                            name="recurrence"
                            className={styles.inputFild1}
                            value={formData.recurrence}
                            onChange={handleChange}

                            required
                        >
                            <option className={styles.optionsLayout} value="">Select Technician Role</option>
                            <option className={styles.optionsLayout} value="DAILY">DAILY</option>
                            <option className={styles.optionsLayout} value="MONTHLY">MONTHLY</option>
                            <option className={styles.optionsLayout} value="YEARLY">YEARLY</option>
                        </select> */}
                    </div>
                </div>
               
            </div>
        </div>






        <div className={styles.ApplicableTest}>
            <div className={styles.lableFontSize}>Applicable Test</div>
            <div className={styles.dropdownContainer}>
                <div className={styles.llayout}>
                    <div className={styles.dropdownContainertest}>
                        {selectedTests.length === 0 ?
                            <div onClick={handleToggleDropdown} className={styles.dropdownContainerNormaltext}>Select Test</div> : ''
                        }
                        {selectedTests.map((test, id) => (
                            <div key={id} className={styles.oneTestBox}>
                                <div className={styles.dropdownContainerNormaltext}> {test.name}</div>
                                <svg onClick={() => handleTestSelect(test)} v xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.33337 3.33398L8.00004 8.00065M12.6667 12.6673L8.00004 8.00065M8.00004 8.00065L12.6667 3.33398L3.33337 12.6673" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        ))}
                    </div>
                    {/* bottom arrow images */}
                    <div className="dropdown-toggle" onClick={handleToggleDropdown}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12.6666 6L7.99996 10.6667L3.33329 6" stroke="#181B1F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

            </div>
            {isOpen && (
                <div className={styles.dropdownContainer}>
                    <div className={styles.searchTestBox}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M11.3333 11.334L13.3333 13.334M12.6667 8.00065C12.6667 10.578 10.5773 12.6673 8 12.6673C5.42267 12.6673 3.33333 10.578 3.33333 8.00065C3.33333 5.42332 5.42267 3.33398 8 3.33398C10.5773 3.33398 12.6667 5.42332 12.6667 8.00065Z" stroke="#4A5055" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <input

                            type="text"
                            placeholder="Search tests..."
                            value={searchText}
                            onChange={handleSearchChange}
                            className={styles.searchTestBoxInput}
                        />
                    </div>
                    <div >
                        {filteredTests.map((test, index) => (
                            // console.log(selectedTests)
                            // console.log(selectedTests.some((selectedTest) => selectedTest.id === test.id))
                            <div key={index} >
                                <label className={styles.checkboxContainer}>
                                    <input
                                        className={styles.inputFild}
                                        type="checkbox"
                                        checked={selectedTests.some((selectedTest) => selectedTest.id === test.id)}
                                        // checked={selectedTests.includes(test)}
                                        onChange={() => handleTestSelect(test)}
                                        style={{ width: "20px", height: "20px" }}
                                    />
                                    {test.name}
                                </label>
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </div>

    </>
    );
};

export default EditCoupan;
