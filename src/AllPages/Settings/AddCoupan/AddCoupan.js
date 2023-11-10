import React, { useState } from 'react';
import styles from './AddCoupan.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addNewCoupon, deleteCoupon, setCoupons } from '../../../ReduxState/Property/AddingCoupanDataSlice/AddingCoupanDataSlice';

const AddCoupan = (props) => {
    const { onClick } = props
    const dispatch = useDispatch();
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
    const [selectedTests, setSelectedTests] = useState([]);
    const [addCoupanData, setAddCoupanData] = useState({})

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log('Selected Tests:', selectedTests);

    };

    const handleTestSelect = (test) => {
        setSelectedTests((prevSelectedTests) => {
            if (prevSelectedTests.includes(test)) {
                return prevSelectedTests.filter((selectedTest) => selectedTest !== test);
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











    const [formData, setFormData] = useState({
        couponCode: '',
        discountPercentage: '',
        numberOfCoupons: '',
        discountStartDate: '',
        discountExpireDate: '',
        recurrence: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleADD = () => {
        // console.log('Form Data:', formData);
        const p = {
            "coupon": formData.couponCode,
            "discount": formData.discountPercentage,
            "numberOfCoupons": formData.numberOfCoupons,
            "discountStartDate": formData.discountStartDate,
            "discountExpiryDate": formData.discountExpireDate,
            "recurrence": formData.recurrence,
            "applicableTests": selectedTests
        }
        dispatch(addNewCoupon(p));
        if (onClick) {
            onClick();
        }
    };
    const handelAddandCreateCoupan = () => {
        const p = {
            "coupon": formData.couponCode,
            "discount": formData.discountPercentage,
            "numberOfCoupons": formData.numberOfCoupons,
            "discountStartDate": formData.discountStartDate,
            "discountExpiryDate": formData.discountExpireDate,
            "recurrence": formData.recurrence,
            "applicableTests": selectedTests
        }
        dispatch(addNewCoupon(p));

    }
    const handleCancleCoupanandPage=()=>{
        if (onClick) {
            onClick();
        }
        dispatch(setCoupons ())
    }

    return (<>
        <div className={styles.prepareReportNav}>
            <div className={styles.prepareReportNavText1}>Create coupon</div>
            <div onClick={handleADD} className={styles.prepareReportNavText3}>Add</div>

            {/* <div onClick={handleReject} className={styles.prepareReportNavText3}>Reject report</div> */}
            <div onClick={handelAddandCreateCoupan} className={styles.prepareReportNavText4}>Add and create new coupon</div>
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
                        <div className={styles.lableFontSize} htmlFor="couponCode">Coupon Code</div>
                        <input
                            className={styles.inputFild}
                            type="text"
                            name="couponCode"
                            placeholder="Coupon Code"
                            value={formData.couponCode}
                            onChange={handleChange}

                        />
                    </div>
                    <div className={styles.column}>
                        <div className={styles.lableFontSize} htmlFor="discountPercentage">Discount Percentage</div>
                        <input
                            className={styles.inputFild}
                            type="text"
                            name="discountPercentage"
                            placeholder="Discount Percentage"
                            value={formData.discountPercentage}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.column}>
                        <div className={styles.lableFontSize} htmlFor="numberOfCoupons">Number of Coupons</div>
                        <input
                            className={styles.inputFild}
                            type="text"
                            name="numberOfCoupons"
                            placeholder="Number of Coupons"
                            value={formData.numberOfCoupons}
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
                            name="discountStartDate"
                            value={formData.discountStartDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.column}>
                        <div className={styles.lableFontSize} htmlFor="discountExpireDate">Discount Expiry Date</div>
                        <input
                            className={styles.inputFild}
                            type="date"
                            name="discountExpireDate"
                            value={formData.discountExpireDate}
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
                    </div>
                </div>
                {/* <button onClick={handleADD}>Console Log</button> */}
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
                            <div className={styles.oneTestBox}>
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
                        {filteredTests.map((test) => (
                            <div key={test.id} >
                                <label className={styles.checkboxContainer}>
                                    <input
                                        className={styles.inputFild}
                                        type="checkbox"
                                        checked={selectedTests.includes(test)}
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

export default AddCoupan;
