import React, { useEffect, useState } from 'react'
import TopBar from '../../AllPages/General/TopBar/TopBar'
import styles from './AddingMembers.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUpdatedUser, setEmptyUser } from '../../ReduxState/Property/AddingMemberDataSlice/AddingMemberDataSlice';
import AddingMemberScreen2 from '../../AllPages/AddingMember/AddingMemberScreen2/AddingMemberScreen2';
import AddingMemberScreen3 from '../../AllPages/AddingMember/AddingMemberScreen3/AddingMemberScreen3';
import { useNavigate } from 'react-router-dom';
import { setLastTest } from '../../ReduxState/Property/AddingLastTestData/AddingLastTestData';
let allData = {}
const AddingMembers = () => {
    const navigate = useNavigate()

    const dataaaa = useSelector((state) => state.newAddedMenber)
    const discountadAdvance = useSelector((state) => state.newDisountAndAdvance)
    const primaryTestData = useSelector((state) => state.newTestasPrimary)
    const user = {
        name: "",
        gender: "",
        age: "",
        phoneNumber: "",
        doctorName: "",
        labId: "4c5690d4-c365-41f4-82b5-32f520c9118b",
        persona: 1,
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
                "testName": "Select Test",
                "price": "",
                "id": "440314cd-facd-4b68-a46b-8670ab0809de",
                "globalId": "440314cd-facd-4b68-a46b-8670ab0809de",
            },
            {
                "testName": "bp",
                "price": 400,
                "id": "440314cd-facd-4b68-a46b-8670ab0809de",
                "globalId": "440314cd-facd-4b68-a46b-8670ab0809de",
            },
            {
                "testName": "cp",
                "price": 500,
                "id": "440314cd-facd-4b68-a46b-8670ab0809de",
                "globalId": "440314cd-facd-4b68-a46b-8670ab0809de",
            },
            {
                "testName": "ky",
                "price": 5020,
                "id": "440314cd-facd-4b68-a46b-8670ab0809de",
                "globalId": "440314cd-facd-4b68-a46b-8670ab0809de",
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
    const [checked, setChecked] = useState(false)
    const [tests, setTests] = useState([initialTest]);
    const [detailsFound, setDetailsFound] = useState("")
    const [detailsFoundPopup, setDetailsFoundPopUp] = useState(false);
    const [detailsFoundData, setDetailsFoundData] = useState("")
    const [phoneNumberIsThere, setPhoneNumberIsThere] = useState("")

    const dispatch = useDispatch();

    const openEditPopup = () => {
        setIsEditPopupOpen(!isEditPopupOpen);
        if (dataaaa.length === 0) {
            setPhoneNumberIsThere("")
        }
        setUserData(user)
        setDetailsFound("")
    };
    const openDiscountPopup = () => {
        setIsDiscountPopupOpen(!isDisountPopupOpen)
    }
    const handleChildClick = () => {
        setIsEditPopupOpen(!isEditPopupOpen);
        // alert('Child component clicked!');
    };

    // Retrieving the "labId" value from localStorage
    const labId1 = localStorage.getItem('labId');
    const handleUserChange = async (field, value) => {
        setUserData({
            ...userData,
            [field]: value,
        });
        if (field === "phoneNumber" && value.length === 10) {

            const x = {
                // "labId" : labId1,
                "labId": "4c5690d4-c365-41f4-82b5-32f520c9118b",
                "persona": "DOCTOR",
                "phoneNumber": value
            }
            try {
                // Making a POST request to the List user endpoint
                const res = await axios.post(`http://localhost:8090/first/v1/list-users`, x)
                console.log(res.data)
                if (Array.isArray(res.data.users) && res.data.users.length === 0) {
                    // alert("The 'users' array is empty");
                    setDetailsFound("notFound")
                }
                else {
                    setDetailsFound("found")
                    setTimeout(() => {
                        setDetailsFoundPopUp(true)
                        if (phoneNumberIsThere === "") {
                            setPhoneNumberIsThere(value)
                        }
                        // alert("uuu")
                        // closeModal();  Close modal after successful upload (simulated)
                    }, 2000);

                    setDetailsFoundData(res.data.users)


                }
            }
            catch (err) {
                console.log(err)

            }
        }
        else if (field === "phoneNumber" && value.length !== 10) {
            setDetailsFound("")
            setUserData(user)
        }

    };
    const handelCancelDetailsFoundPopup = () => {
        setDetailsFoundPopUp(false)
        setIsEditPopupOpen(false)
    }
    const handleAddTestToPatient = (index) => {
        //    alert(index)
        setDetailsFoundPopUp(false)
        
        
        setUserData(detailsFoundData[index])

    }
    const handleAddNewMember = () => {
        // setIsEditPopupOpen(false)
        setDetailsFoundPopUp(false)
    }



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
            doctorName: selectedName
        }
    }

    //

    //handel Save And Add
    const handelSaveAndAdd = () => {
        console.log(aPatientData)

        allData = aPatientData.userInfo;
        if (phoneNumberIsThere === "") {
            setPhoneNumberIsThere(aPatientData.userInfo.user.phoneNumber)
        }

        dispatch(addUpdatedUser(allData))
        dispatch(setLastTest(tests))
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
        dispatch(setLastTest(tests))

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
        setUserData(user)
        dispatch(setEmptyUser())

    };
    const handleCancelPopUp = () => {
        setIsDiscountPopupOpen(!isDisountPopupOpen)

    }
    const handelCreateEntery = async () => {
        let aPatientData = {
            "bookings": dataaaa,
            "discount": discountadAdvance.discount,
            "advance": discountadAdvance.advance
        }
        try {
            // Making a POST request to the List user endpoint
            const res = await axios.post(`http://localhost:8090/first/v1/create-booking`, aPatientData)
            console.log(res.data)
            navigate("/allReport")
            alert("Success")

        }
        catch (err) {
            console.log(err)
            alert("eoorr")

        }
        console.log(aPatientData)
        console.log(discountadAdvance)
        dispatch(setEmptyUser())

    }



    const handleTestAsPrimary = () => {
        setChecked(!checked)

    }



    useEffect(() => {

        if (checked) {
            const updatedTests = [...primaryTestData];
            for (let index = 0; index < tests.length; index++) {
                updatedTests.push(tests[index]);
            }
            setTests(updatedTests)
            // const updatedTests = [...primaryTestData];
            // setTests(updatedTests);
            // setTests([...tests, primaryTestData]);
        }
        else {
            const updatedTests = [...tests];

            for (let index = 0; index < primaryTestData.length; index++) {
                const testData = primaryTestData[index];
                // Check if testData meets some condition, for instance, removing an object with testName === 'bp'
                for (let j = 0; j < updatedTests.length; j++) {
                    if (testData.testName === updatedTests[j].testName) {
                        updatedTests.splice(testData.testName, 1);
                        // Decrement index to account for the removed element
                        setTests(updatedTests)
                    }
                }
            }
            if (updatedTests.length === 0) {
                setTests([{ ...initialTest }]);
            }
        }

    }, [checked])
    // console.log(tests)
    // console.log(primaryTestData)
    // console.log(userData)

    // console.log(detailsFoundData)


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
                            <div className={styles.addingMembersLayoutLeftline2text1} >Add details and tests </div>
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
                                <div className={styles.detailsAndTestLayoutNavText1}>Add details and tests {phoneNumberIsThere}</div>
                                <div className={styles.detailsAndTestLayoutNavButton1} onClick={handelSaveAndAdd}>Save and add new member</div>
                                <div className={styles.detailsAndTestLayoutNavButton2} onClick={handelSave}>Save</div>
                                {/* <div>1</div> */}
                                <svg onClick={openEditPopup} className={styles.detailsAndTestLayoutNavicon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className={styles.detailsAndTestLayoutBottom}>
                                <div className={styles.detailsAndTestLayoutBottomLeft}>
                                    <div className={styles.addTestAndDigit}>
                                        <div className={styles.detailsAndTestLayoutBottomLeftLine1text1}>1</div>
                                        <div className={styles.detailsAndTestLayoutBottomLeftLine1text2}>Add patient details</div>
                                    </div>
                                    {
                                        phoneNumberIsThere ? "" :

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
                                                {detailsFound === "found" ?
                                                    <div className={styles.patientinputMessageBox1}>
                                                        <div className={styles.patientinputMessageBox1icon}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path d="M10.0003 3.23329C6.2632 3.23329 3.23366 6.26283 3.23366 9.99996C3.23366 13.7371 6.2632 16.7666 10.0003 16.7666C13.7375 16.7666 16.767 13.7371 16.767 9.99996C16.767 6.26283 13.7375 3.23329 10.0003 3.23329ZM1.76699 9.99996C1.76699 5.45282 5.45318 1.76663 10.0003 1.76663C14.5475 1.76663 18.2337 5.45282 18.2337 9.99996C18.2337 14.5471 14.5475 18.2333 10.0003 18.2333C5.45318 18.2333 1.76699 14.5471 1.76699 9.99996Z" fill="#33BA89" stroke="#E5F7F1" stroke-width="0.2" />
                                                                <path d="M13.0189 7.81479C13.3053 8.10117 13.3053 8.56549 13.0189 8.85188L9.68554 12.1852C9.39915 12.4716 8.93483 12.4716 8.64845 12.1852L6.98178 10.5185C6.6954 10.2322 6.6954 9.76784 6.98178 9.48145C7.26816 9.19507 7.73249 9.19507 8.01887 9.48145L9.09628 10.5589C9.13533 10.5979 9.19865 10.5979 9.2377 10.5589L11.9818 7.81479C12.2682 7.5284 12.7325 7.5284 13.0189 7.81479Z" fill="#33BA89" stroke="#E5F7F1" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </div>
                                                        <div className={styles.patientinputMessageBox1Text}>Patient details found. Details are auto filled</div>
                                                    </div>
                                                    : ""
                                                }
                                                {detailsFound === "" ?
                                                    <div className={styles.patientinputMessageBox2}>

                                                        <div className={styles.patientinputMessageBox2Text}>Enter phone number to check if patient details already present</div>
                                                    </div>
                                                    : ""
                                                }
                                                {
                                                    detailsFound === "notFound" ?
                                                        <div className={styles.patientinputMessageBox3}>
                                                            <div className={styles.patientinputMessageBox1icon}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00033 1.29199C13.2578 1.29199 16.7087 4.74366 16.7087 9.00033C16.7087 13.257 13.2578 16.7087 9.00033 16.7087C4.74366 16.7087 1.29199 13.257 1.29199 9.00033C1.29199 4.74366 4.74366 1.29199 9.00033 1.29199Z" stroke="#D58D04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M8.99577 5.83691V9.51941" stroke="#D58D04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M8.99648 12.1637H9.00482" stroke="#D58D04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                            <div className={styles.patientinputMessageBox3Text}>Patient details not found. Add patient details below</div>
                                                        </div>
                                                        : ""
                                                }

                                            </div>
                                    }
                                    <div className={styles.patientPhonenumberBox}>
                                        <div className={styles.patientLabelBox}>
                                            <div className={styles.patientLabelBoxText1}>Name</div>
                                            <div className={styles.patientLabelBoxText2}>*</div>
                                        </div>
                                        <div className={styles.patientInputBox}>
                                            <input className={styles.patientInputBoxInput}
                                                id="name"
                                                type="text" placeholder='Enter Name'
                                                value={userData.name}
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
                                                value={userData.age}
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
                                                    value="MALE"
                                                    checked={userData.gender === 1 || userData.gender === "MALE"}
                                                    id={userData.gender}
                                                    style={{ height: '20px', width: "20px" }}
                                                />
                                                Male
                                            </label>
                                            <label className={styles.patientInputBoxGenderText}>
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="FEMALE"
                                                    checked={userData.gender === 2 || userData.gender === "FEMALE"}
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
                                        <div className={styles.addTestAndDigit}>
                                            <div className={styles.detailsAndTestLayoutBottomLeftLine1text1}>2</div>
                                            <div className={styles.detailsAndTestLayoutBottomLeftLine1text2}>Add tests</div>
                                        </div>
                                        {
                                            dataaaa.length >= 1 ?

                                                <div onClick={handleTestAsPrimary} className={styles.checkboxandtext}>
                                                    <input className={styles.checkbox} type='checkbox' />
                                                    <div className={styles.sameasPrimary}>Same tests as Primary contact </div>
                                                </div>
                                                : ""
                                        }
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
                                                {/* <option value="">Select Test</option> */}
                                                {testData.tests.map((testDataItem, dataIndex) => (
                                                    <option key={dataIndex}
                                                        value={testDataItem.testName}>
                                                        {testDataItem.testName}
                                                    </option>
                                                ))}
                                            </select>



                                            <div className={styles.detailsAndTestLine3TestPrice} >{test.price === "" ? "₹ shows automatically" : test.price}</div>
                                            {/* {alert(test.price)} */}
                                            {tests.length <= 1 ? <div className={styles.hideIcon}></div> :
                                                <svg onClick={() => removeTest(index)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83317 6.6665V14.9998C5.83317 15.9203 6.57936 16.6665 7.49984 16.6665H12.4998C13.4203 16.6665 14.1665 15.9203 14.1665 14.9998V6.6665H15.8332V14.9998C15.8332 16.8408 14.3408 18.3332 12.4998 18.3332H7.49984C5.65889 18.3332 4.1665 16.8408 4.1665 14.9998V6.6665H5.83317Z" fill="#4A5055" />
                                                    <path d="M8.33333 9.1665C7.8731 9.1665 7.5 9.5396 7.5 9.99984V13.3332C7.5 13.7934 7.8731 14.1665 8.33333 14.1665C8.79357 14.1665 9.16667 13.7934 9.16667 13.3332V9.99984C9.16667 9.5396 8.79357 9.1665 8.33333 9.1665Z" fill="#4A5055" />
                                                    <path d="M11.6667 9.1665C11.2064 9.1665 10.8333 9.5396 10.8333 9.99984V13.3332C10.8333 13.7934 11.2064 14.1665 11.6667 14.1665C12.1269 14.1665 12.5 13.7934 12.5 13.3332V9.99984C12.5 9.5396 12.1269 9.1665 11.6667 9.1665Z" fill="#4A5055" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66683 4.99984V4.1665C6.66683 2.78579 7.78612 1.6665 9.16683 1.6665H10.8335C12.2142 1.6665 13.3335 2.78579 13.3335 4.1665V4.99984H15.8335C16.2937 4.99984 16.6668 5.37293 16.6668 5.83317C16.6668 6.29341 16.2937 6.6665 15.8335 6.6665H4.16683C3.70659 6.6665 3.3335 6.29341 3.3335 5.83317C3.3335 5.37293 3.70659 4.99984 4.16683 4.99984H6.66683ZM8.3335 4.1665C8.3335 3.70627 8.70659 3.33317 9.16683 3.33317H10.8335C11.2937 3.33317 11.6668 3.70627 11.6668 4.1665V4.99984H8.3335V4.1665Z" fill="#4A5055" />
                                                </svg>
                                            }
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
                                {/* <div className={styles.detailsAndTestLayoutNav}>
                                    <div className={styles.detailsAndTestLayoutNavText1}>Enter Discount and Advance</div>
                                    <div className={styles.detailsAndTestLayoutNavButton1} >Print Invoice</div>
                                    <div onClick={handelCreateEntery} className={styles.detailsAndTestLayoutNavButton2} >Create Entery</div>
                                    
                                    <svg onClick={handelCancelCreateEntery} className={styles.detailsAndTestLayoutNavicon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div> */}
                                <div className={styles.detailsAndTestLayoutBottom1111}>
                                    <AddingMemberScreen3
                                        onCreateEntry={handelCreateEntery}
                                        onCancel={handleCancelPopUp}
                                    />
                                </div>
                            </div>
                        </div>
                        : ""
                }

                {/* Multiple patients connected to 9876543210 */}
                {
                    detailsFoundPopup ?
                        <div className={styles.modalOverlay}>
                            <div className={styles.detailsAndTestLayout}>
                                <div className={styles.detailsAndTestLayoutNav}>
                                    <div className={styles.detailsAndTestLayoutNavText1}>Multiple patients connected to {userData.phoneNumber}</div>
                                    {/* <div>1</div> */}
                                    <svg onClick={handelCancelDetailsFoundPopup} className={styles.detailsAndTestLayoutNavicon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className={styles.detailsFoundDataBottom11}>
                                    {detailsFoundData.map((users, id) => (
                                        <>
                                            <div key={id} className={styles.detailsFoundDataBottomBox}>
                                                <div className={styles.namrtiPatient}>{users.name}</div>
                                                <div onClick={() => handleAddTestToPatient(id)} className={styles.addTesttoPatient}>Add Test</div>
                                            </div>
                                            <div className={styles.borderBottom}></div>
                                        </>

                                    ))}
                                    <div className={styles.AddnewMember} onClick={handleAddNewMember}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5.75C9.41421 5.75 9.75 6.08579 9.75 6.5V8.75H12C12.4142 8.75 12.75 9.08579 12.75 9.5C12.75 9.91421 12.4142 10.25 12 10.25H9.75V12.5C9.75 12.9142 9.41421 13.25 9 13.25C8.58579 13.25 8.25 12.9142 8.25 12.5V10.25H6C5.58579 10.25 5.25 9.91421 5.25 9.5C5.25 9.08579 5.58579 8.75 6 8.75H8.25V6.5C8.25 6.08579 8.58579 5.75 9 5.75Z" fill="#0067DF" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.7679 2.75H10.2321C11.0449 2.74999 11.7006 2.74999 12.2315 2.79336C12.7781 2.83803 13.2582 2.93239 13.7025 3.15873C14.4081 3.51825 14.9817 4.09193 15.3413 4.79754C15.5676 5.24175 15.662 5.7219 15.7066 6.26853C15.75 6.79944 15.75 7.45505 15.75 8.26788V10.7321C15.75 11.545 15.75 12.2006 15.7066 12.7315C15.662 13.2781 15.5676 13.7582 15.3413 14.2025C14.9817 14.9081 14.4081 15.4817 13.7025 15.8413C13.2582 16.0676 12.7781 16.162 12.2315 16.2066C11.7006 16.25 11.045 16.25 10.2321 16.25H7.76788C6.95505 16.25 6.29944 16.25 5.76853 16.2066C5.2219 16.162 4.74175 16.0676 4.29754 15.8413C3.59193 15.4817 3.01825 14.9081 2.65873 14.2025C2.43239 13.7582 2.33803 13.2781 2.29336 12.7315C2.24999 12.2006 2.24999 11.5449 2.25 10.7321V8.2679C2.24999 7.45506 2.24999 6.79944 2.29336 6.26853C2.33803 5.7219 2.43239 5.24175 2.65873 4.79754C3.01825 4.09193 3.59193 3.51825 4.29754 3.15873C4.74175 2.93239 5.2219 2.83803 5.76853 2.79336C6.29944 2.74999 6.95506 2.74999 7.7679 2.75ZM5.89068 4.28838C5.4368 4.32547 5.17604 4.3946 4.97852 4.49524C4.55516 4.71095 4.21095 5.05516 3.99524 5.47852C3.8946 5.67604 3.82547 5.9368 3.78838 6.39068C3.75058 6.85331 3.75 7.44755 3.75 8.3V10.7C3.75 11.5525 3.75058 12.1467 3.78838 12.6093C3.82547 13.0632 3.8946 13.324 3.99524 13.5215C4.21095 13.9448 4.55516 14.2891 4.97852 14.5048C5.17604 14.6054 5.4368 14.6745 5.89068 14.7116C6.35331 14.7494 6.94755 14.75 7.8 14.75H10.2C11.0525 14.75 11.6467 14.7494 12.1093 14.7116C12.5632 14.6745 12.824 14.6054 13.0215 14.5048C13.4448 14.2891 13.7891 13.9448 14.0048 13.5215C14.1054 13.324 14.1745 13.0632 14.2116 12.6093C14.2494 12.1467 14.25 11.5525 14.25 10.7V8.3C14.25 7.44755 14.2494 6.85331 14.2116 6.39068C14.1745 5.9368 14.1054 5.67604 14.0048 5.47852C13.7891 5.05516 13.4448 4.71095 13.0215 4.49524C12.824 4.3946 12.5632 4.32547 12.1093 4.28838C11.6467 4.25058 11.0525 4.25 10.2 4.25H7.8C6.94755 4.25 6.35331 4.25058 5.89068 4.28838Z" fill="#0067DF" />
                                        </svg>
                                        Add new Member</div>
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