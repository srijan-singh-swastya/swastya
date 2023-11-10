import React, { useState } from 'react'
import TopBar from '../../AllPages/General/TopBar/TopBar'
import styles from './AddingMembers.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUpdatedUser, setEmptyUser } from '../../ReduxState/Property/AddingMemberDataSlice/AddingMemberDataSlice';
import AddingMemberScreen2 from '../../AllPages/AddingMember/AddingMemberScreen2/AddingMemberScreen2';
import AddingMemberScreen3 from '../../AllPages/AddingMember/AddingMemberScreen3/AddingMemberScreen3';
import { useNavigate } from 'react-router-dom';
let allData = {}
const AddingMembers = () => {
    const navigate = useNavigate()
    const dataaaa = useSelector((state) => state.newAddedMenber)
    const user = {
        name: "",
        gender: "",
        age: "",
        phoneNumber: "",
        doctorName: "",
    }
    //doctors name need from api
    const names = [
        "John",
        "Jane",
        "Mike",
        "Sarah",

    ];
    //all test data need from api
    const testData = {
        "tests": [
            {
                "testName": "bp",
                "price": 400
            },
            {
                "testName": "cp",
                "price": 500
            },
            {
                "testName": "ky",
                "price": 5020
            }
        ]
    };

    const initialTest = { testName: "", price: "" };

    const [isEditPopupOpen, setIsEditPopupOpen] = useState(true);
    const [isDisountPopupOpen, setIsDiscountPopupOpen] = useState(false);
    const [userData, setUserData] = useState(user);
    const [recommendedByDropDown, setRecommendedByDropDown] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [cancelCreateEntery, setCancelCreateEntery] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const [tests, setTests] = useState([initialTest]);

    const dispatch = useDispatch();

    const openEditPopup = () => {
        setIsEditPopupOpen(!isEditPopupOpen);
    };
    const openDiscountPopup = () => {
        setIsDiscountPopupOpen(!isDisountPopupOpen)
    }
    const handleChildClick = () => {
        setIsEditPopupOpen(!isEditPopupOpen);
        // alert('Child component clicked!');
    };



    const handleUserChange = (field, value) => {
        setUserData({
            ...userData,
            [field]: value,
        });
    };


    // handel recomended by doctors
    const handelRClick = () => {
        setRecommendedByDropDown(!recommendedByDropDown)
    }

    // Filter names based on the search input
    const filteredNames = names.filter((name) =>
        name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleNameClick = (name) => {
        setUserData({
            ...userData,
            doctorName: name,
        });
        setSelectedName(name);
        setIsSearchOpen(false);
        setRecommendedByDropDown(false)
    };

    // rightpart add test wala below



    const handleTestChange = (index, field, value) => {
        const updatedTests = [...tests];
        updatedTests[index][field] = value;
        setTests(updatedTests);

        // Automatically update the date based on the selected test name
        const selectedTestName = updatedTests[index].testName;
        const matchingTest = testData.tests.find((test) => test.testName === selectedTestName);
        if (matchingTest) {
            updatedTests[index].price = matchingTest.price;
        }
    };

    const addMoreTest = () => {
        setTests([...tests, initialTest]);
    };

    const removeTest = (index) => {
        const updatedTests = [...tests];
        updatedTests.splice(index, 1);
        setTests(updatedTests);
    };

    // handel save 

    let aPatientData = {
        userInfo: {
            user: userData,
            tests: tests,
            // doctorName: selectedName
        }
    }


    //handel Save And Add
    const handelSaveAndAdd = () => {
        console.log(aPatientData)
        allData = aPatientData.userInfo;
        dispatch(addUpdatedUser(allData))
        document.getElementById('name').value = '';
        document.getElementById('gender').value = '';
        document.getElementById('age').value = '';
        // document.getElementById('phoneNumber').value = '';
        document.getElementById('doctor').value = '';
        document.getElementById('test').value = '';
        setUserData({ ...user });
        setTests([{ ...initialTest }]);
        setSelectedName('');
        allData = {}

    }
    const handelSave = () => {

        allData = aPatientData.userInfo;
        console.log(allData)
        setIsEditPopupOpen(false)
        dispatch(addUpdatedUser(allData))


        document.getElementById('name').value = '';
        document.getElementById('gender').value = '';
        document.getElementById('age').value = '';
        // document.getElementById('phoneNumber').value = '';
        document.getElementById('doctor').value = '';
        document.getElementById('test').value = '';
        setUserData({ ...user });
        setTests([{ ...initialTest }]);
        setSelectedName('');
        allData = {}

    }
    const goBack = () => {
        window.history.back();
    };
    const handelCreateEntery = () => {
        console.log(dataaaa)
        dispatch(setEmptyUser())
        navigate("/allReport")
    }
    const handelCancelCreateEntery = () => {
        // alert("Hey Ram")
        setCancelCreateEntery(true)
    }
    const handelExit = () => {
        dispatch(setEmptyUser())
        navigate("/allReport")
    }
    const handelCancle = () => {
        setCancelCreateEntery(false)
    }



    return (
        <>
            <div>
                <TopBar />
                <div className={styles.addingMembersNav}>
                    <svg onClick={goBack} className={styles.addingMembersNavIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M5 12L11 18M5 12L11 6" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    {/* <img className={styles.addingMembersNavIcon} src='/logo192.png' /> */}
                    <div className={styles.addingMembersNavText}>Create new Entery</div>
                    <div onClick={openDiscountPopup} className={styles.addingMembersNavButton}>Enter Discount and Advance
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.16699 10H15.8337M15.8337 10L10.8337 5M15.8337 10L10.8337 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></div>
                </div>
                {dataaaa.length === 0 ? <div className={styles.addingMembersLayout}>
                    <div className={styles.addingMembersLayoutLeft}>
                        <div className={styles.addingMembersLayoutLeftline1}>Add patient and test details</div>
                        <div className={styles.addingMembersLayoutLeftline2}>
                            <div className={styles.addingMembersLayoutLeftline2text1} >Add details and tests</div>
                        </div>
                        <div className={styles.addingMembersLayoutLeftline3}>
                            <div className={styles.addingMembersLayoutLeftline3text1} onClick={openEditPopup}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                    <path d="M9 9.5V3.5M9 9.5V15.5M9 9.5H15H3" stroke="#99C2F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Add new member
                            </div>
                        </div>
                    </div>
                    <div className={styles.addingMembersLayoutRight}>
                        <div className={styles.addingMembersLayoutRightLine1}>Total amount per patient</div>
                        <div className={styles.addingMembersLayoutRightLine2}>
                            <img className={styles.addingMembersLayoutRightLine2icon} src='/logo192.png' />

                            {/* <div className={styles.addingMembersLayoutRightLine2icon}>icon</div> */}
                            <div className={styles.addingMembersLayoutRightLine2text1}>Add details and test to see total amount here</div>
                        </div>

                    </div>
                </div> : <AddingMemberScreen2 onClick={handleChildClick} />}
                {/* A*********************************Add details and tests***************************** */}
                {isEditPopupOpen && (
                    <div className={styles.modalOverlay}>
                        <div className={styles.detailsAndTestLayout}>
                            <div className={styles.detailsAndTestLayoutNav}>
                                <div className={styles.detailsAndTestLayoutNavText1}>Add details and tests</div>
                                <div className={styles.detailsAndTestLayoutNavButton1} onClick={handelSaveAndAdd}>Save and add new member</div>
                                <div className={styles.detailsAndTestLayoutNavButton2} onClick={handelSave}>Save</div>
                                {/* <div>1</div> */}
                                <svg onClick={openEditPopup} className={styles.detailsAndTestLayoutNavicon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className={styles.detailsAndTestLayoutBottom}>
                                <div className={styles.detailsAndTestLayoutBottomLeft}>
                                    <div className={styles.detailsAndTestLayoutBottomLeftLine1}>
                                        <div className={styles.detailsAndTestLayoutBottomLeftLine1text1}>1</div>
                                        <div className={styles.detailsAndTestLayoutBottomLeftLine1text2}>Add patient details</div>
                                    </div>
                                    <div className={styles.patientPhonenumberBox}>
                                        <div className={styles.patientLabelBox}>
                                            <div className={styles.patientLabelBoxText1}>Phone Number</div>
                                            <div className={styles.patientLabelBoxText2}>*</div>
                                        </div>
                                        <div className={styles.patientInputBox}>
                                            <div className={styles.patientInputBoxtext1}>+91</div>
                                            <input className={styles.patientInputBoxInput}
                                                type="number" placeholder='Enter Phone Number' id='phoneNumber'
                                                onChange={(e) => handleUserChange('phoneNumber', e.target.value)}
                                            />
                                        </div>
                                        <div className={styles.patientinputMessageBox1}>
                                            <div className={styles.patientinputMessageBox1icon}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M10.0003 3.23329C6.2632 3.23329 3.23366 6.26283 3.23366 9.99996C3.23366 13.7371 6.2632 16.7666 10.0003 16.7666C13.7375 16.7666 16.767 13.7371 16.767 9.99996C16.767 6.26283 13.7375 3.23329 10.0003 3.23329ZM1.76699 9.99996C1.76699 5.45282 5.45318 1.76663 10.0003 1.76663C14.5475 1.76663 18.2337 5.45282 18.2337 9.99996C18.2337 14.5471 14.5475 18.2333 10.0003 18.2333C5.45318 18.2333 1.76699 14.5471 1.76699 9.99996Z" fill="#33BA89" stroke="#E5F7F1" stroke-width="0.2" />
                                                    <path d="M13.0189 7.81479C13.3053 8.10117 13.3053 8.56549 13.0189 8.85188L9.68554 12.1852C9.39915 12.4716 8.93483 12.4716 8.64845 12.1852L6.98178 10.5185C6.6954 10.2322 6.6954 9.76784 6.98178 9.48145C7.26816 9.19507 7.73249 9.19507 8.01887 9.48145L9.09628 10.5589C9.13533 10.5979 9.19865 10.5979 9.2377 10.5589L11.9818 7.81479C12.2682 7.5284 12.7325 7.5284 13.0189 7.81479Z" fill="#33BA89" stroke="#E5F7F1" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div className={styles.patientinputMessageBox1Text}>Patient details found. Details are auto filled</div>
                                        </div>
                                        <div className={styles.patientinputMessageBox2}>

                                            <div className={styles.patientinputMessageBox2Text}>Enter phone number to check if patient details already present</div>
                                        </div>
                                        <div className={styles.patientinputMessageBox3}>
                                            <div className={styles.patientinputMessageBox1icon}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00033 1.29199C13.2578 1.29199 16.7087 4.74366 16.7087 9.00033C16.7087 13.257 13.2578 16.7087 9.00033 16.7087C4.74366 16.7087 1.29199 13.257 1.29199 9.00033C1.29199 4.74366 4.74366 1.29199 9.00033 1.29199Z" stroke="#D58D04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8.99577 5.83691V9.51941" stroke="#D58D04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8.99648 12.1637H9.00482" stroke="#D58D04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div className={styles.patientinputMessageBox3Text}>Patient details found. Details are auto filled</div>
                                        </div>

                                    </div>
                                    <div className={styles.patientPhonenumberBox}>
                                        <div className={styles.patientLabelBox}>
                                            <div className={styles.patientLabelBoxText1}>Name</div>
                                            <div className={styles.patientLabelBoxText2}>*</div>
                                        </div>
                                        <div className={styles.patientInputBox}>
                                            <input className={styles.patientInputBoxInput}
                                                id="name"
                                                type="text" placeholder='Enter Name'
                                                onChange={(e) => handleUserChange('name', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.patientPhonenumberBox}>
                                        <div className={styles.patientLabelBox}>
                                            <div className={styles.patientLabelBoxText1}>Age</div>
                                            <div className={styles.patientLabelBoxText2}>*</div>
                                        </div>
                                        <div className={styles.patientInputBox}>
                                            <input className={styles.patientInputBoxInput}
                                                type="number" placeholder='Enter Age' id="age"
                                                onChange={(e) => handleUserChange('age', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.patientPhonenumberBox}>
                                        <div className={styles.patientLabelBox}>
                                            <div className={styles.patientLabelBoxText1}>Sex</div>
                                            <div className={styles.patientLabelBoxText2}>*</div>
                                        </div>
                                        <div className={styles.patientInputBoxGender}
                                            onChange={(e) => handleUserChange('gender', e.target.value)}
                                        >
                                            <label className={styles.patientInputBoxGenderText}>
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="male"
                                                    id="gender"
                                                    style={{ height: '20px', width: "20px" }}
                                                />
                                                Male
                                            </label>
                                            <label className={styles.patientInputBoxGenderText}>
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="female"
                                                    id="gender"
                                                    style={{ height: '20px', width: "20px" }}
                                                />
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                    <div className={styles.patientPhonenumberBox}>
                                        <div className={styles.patientLabelBox}>
                                            <div className={styles.patientLabelBoxText1}>Recommended by</div>
                                            <div className={styles.patientLabelBoxText2}>*</div>
                                        </div>
                                        <div className={styles.patientInputBoxRBy} onClick={handelRClick}>
                                            <div id="doctor" className={styles.patientInputRecommendedBy}>{selectedName === "" ? "Enter recommended by" : selectedName}</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M12.6665 6L7.99984 10.6667L3.33317 6" stroke="#181B1F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        {recommendedByDropDown ?
                                            <div className={styles.nameSelector}>
                                                <input
                                                    className={styles.nameSelectorInput}
                                                    type="text"
                                                    placeholder="Search names"
                                                    value={searchInput}

                                                    onChange={(e) => setSearchInput(e.target.value)}
                                                    onFocus={() => setIsSearchOpen(true)}
                                                //   onBlur={() => setIsSearchOpen(false)}
                                                />


                                                <div className="searchResults">
                                                    {filteredNames.map((name, index) => (
                                                        <div className={styles.nameSelectortext1} key={index} onClick={() => handleNameClick(name)}>
                                                            {name}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div> : ""}
                                    </div>
                                </div>
                                <div className={styles.detailsAndTestLayoutBottomRight}>
                                    <div className={styles.detailsAndTestLayoutBottomLeftLine1}>
                                        <div className={styles.detailsAndTestLayoutBottomLeftLine1text1}>2</div>
                                        <div className={styles.detailsAndTestLayoutBottomLeftLine1text2}>Add tests</div>
                                    </div>
                                    <div className={styles.detailsAndTestLayoutBottomLeftLine2}>
                                        <div className={styles.detailsAndTestLayoutBottomLeftLine2Text1}>Test name</div>
                                        <div className={styles.detailsAndTestLayoutBottomLeftLine2Text2}>Price (₹)</div>
                                    </div>



                                    {tests.map((test, index) => (
                                        <div key={index} className={styles.detailsAndTestLayoutBottomLeftLine3}>

                                            <select
                                                id='test'
                                                className={styles.detailsAndTestLine3Testname}
                                                value={test.testName}


                                                onChange={(e) => handleTestChange(index, "testName", e.target.value)}
                                            >
                                                <option value="">Select Test</option>
                                                {testData.tests.map((testDataItem, dataIndex) => (
                                                    <option key={dataIndex}
                                                        value={testDataItem.testName}>
                                                        {testDataItem.testName}
                                                    </option>
                                                ))}
                                            </select>



                                            <div className={styles.detailsAndTestLine3TestPrice} >{test.price}</div>

                                            <svg onClick={() => removeTest(index)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83317 6.6665V14.9998C5.83317 15.9203 6.57936 16.6665 7.49984 16.6665H12.4998C13.4203 16.6665 14.1665 15.9203 14.1665 14.9998V6.6665H15.8332V14.9998C15.8332 16.8408 14.3408 18.3332 12.4998 18.3332H7.49984C5.65889 18.3332 4.1665 16.8408 4.1665 14.9998V6.6665H5.83317Z" fill="#4A5055" />
                                                <path d="M8.33333 9.1665C7.8731 9.1665 7.5 9.5396 7.5 9.99984V13.3332C7.5 13.7934 7.8731 14.1665 8.33333 14.1665C8.79357 14.1665 9.16667 13.7934 9.16667 13.3332V9.99984C9.16667 9.5396 8.79357 9.1665 8.33333 9.1665Z" fill="#4A5055" />
                                                <path d="M11.6667 9.1665C11.2064 9.1665 10.8333 9.5396 10.8333 9.99984V13.3332C10.8333 13.7934 11.2064 14.1665 11.6667 14.1665C12.1269 14.1665 12.5 13.7934 12.5 13.3332V9.99984C12.5 9.5396 12.1269 9.1665 11.6667 9.1665Z" fill="#4A5055" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66683 4.99984V4.1665C6.66683 2.78579 7.78612 1.6665 9.16683 1.6665H10.8335C12.2142 1.6665 13.3335 2.78579 13.3335 4.1665V4.99984H15.8335C16.2937 4.99984 16.6668 5.37293 16.6668 5.83317C16.6668 6.29341 16.2937 6.6665 15.8335 6.6665H4.16683C3.70659 6.6665 3.3335 6.29341 3.3335 5.83317C3.3335 5.37293 3.70659 4.99984 4.16683 4.99984H6.66683ZM8.3335 4.1665C8.3335 3.70627 8.70659 3.33317 9.16683 3.33317H10.8335C11.2937 3.33317 11.6668 3.70627 11.6668 4.1665V4.99984H8.3335V4.1665Z" fill="#4A5055" />
                                            </svg>
                                        </div>
                                    ))}
                                    <button className={styles.detailsAndTestLine3testbutton} onClick={addMoreTest}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                        <path d="M9 9.5V3.5M9 9.5V15.5M9 9.5H15H3" stroke="#99C2F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>Add more rows</button>

                                </div>

                            </div>

                        </div>

                    </div>
                )}

                {
                    isDisountPopupOpen && dataaaa.length !== 0 ?
                        <div className={styles.modalOverlay}>
                            <div className={styles.detailsAndTestLayout}>
                                <div className={styles.detailsAndTestLayoutNav}>
                                    <div className={styles.detailsAndTestLayoutNavText1}>Enter Discount and Advance</div>
                                    <div className={styles.detailsAndTestLayoutNavButton1} >Print Invoice</div>
                                    <div onClick={handelCreateEntery} className={styles.detailsAndTestLayoutNavButton2} >Create Entery</div>
                                    {/* <div>1</div> */}
                                    <svg onClick={handelCancelCreateEntery} className={styles.detailsAndTestLayoutNavicon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className={styles.detailsAndTestLayoutBottom1111}>
                                    <AddingMemberScreen3 />
                                </div>
                            </div>
                        </div>
                        : ""
                }
                {
                    cancelCreateEntery ?
                        <div className={styles.cancelCreateEnteryPopUp}>
                            <div className={styles.cancelCreateEnteryPopUpLayout}>
                                <div className={styles.cancelCreateEnteryPopUpLine1} >
                                    <div> Exit patient creation?</div>
                                    <svg onClick={handelCancle} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4.1665 4.16663L9.99984 9.99996M15.8332 15.8333L9.99984 9.99996M9.99984 9.99996L15.8332 4.16663L4.1665 15.8333" stroke="#181B1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className={styles.cancelCreateEnteryPopUpLine2}>Going back will discard all entered data.</div>
                                <div className={styles.cancelCreateEnteryPopUpLine3} >
                                    <div onClick={handelExit} className={styles.cancelCreateEnteryPopUpLine3Exit}> Exit  </div>
                                    <div onClick={handelCancle} className={styles.cancelCreateEnteryPopUpLine3Cancle}>Cancle</div>
                                </div>
                            </div>
                        </div>
                        : ""
                }



            </div >
        </>
    )
}

export default AddingMembers