import React, { useState, useEffect } from 'react'
import styles from './AddingMemberScreen3.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { deleteUpdatedUser } from '../../../ReduxState/Property/AddingMemberDataSlice/AddingMemberDataSlice.js';
import { setDiscountAndAdvance } from '../../../ReduxState/Property/DiscountAndAdvanceDataSlice/DiscountAndAdvanceDataSlice.js';

const userInfos = [

    {
        "user": {
            "name": "full name 2",
            "gender": "FEMALE",
            "age": "25",
            "phoneNumber": "88888888882"
        },
        "tests": [
            {
                "testName": "tname3",
                "price": 300
            },
            {
                "testName": "tname4",
                "price": 22
            }
        ]
    }
]



const AddingMemberScreen3 = (props) => {
    const dispatch = useDispatch();
    const dataaaa = useSelector((state) => state.newAddedMenber)
    const { onCreateEntry } = props;
    const {onCancel}=props
    const userInfo = dataaaa;
    let paymentData = {
        "value": "",
        "type": ""
    }
    const [updatedUsers, setUpdatedUsers] = useState(userInfo);
    const [advance, setAdvance] = useState(paymentData)
    const [cancelCreateEntery, setCancelCreateEntery] = useState("");
    const [discount, setDiscount] = useState("")


    let totalMoney = 0; // Initialize as let, not const
    // console.log(dataaaa)

    // console.log(updatedUsers)
    // console.log(userInfos)

    updatedUsers.forEach((user) => {
        user.tests.forEach((test) => {
            totalMoney += test.price;
        });
    });


    useEffect(() => {

        setUpdatedUsers(userInfo);
    }, [userInfo]);

    const handleDeleteUser = (e) => {

        dispatch(deleteUpdatedUser(e));

    };


    // for this page 
    const discountData = [

        {
            "coupanName": "PL30",
            "discount": 30
        },
        {
            "coupanName": "DL10",
            "discount": 10
        },
        {
            "coupanName": "hPL20",
            "discount": 20
        }
    ]
    const handleDiscountChange = (e) => {
        console.log(e.target.value)
        setDiscount(e.target.value)
    }
    const handleSelectPayment = (field, value) => {

        setAdvance({
            ...advance,
            [field]: value,
        });

    }

    const handelCancelCreateEntery = () => {
        onCancel()
        // setCancelCreateEntery(true)
    }
    const handelCancle = () => {
        setCancelCreateEntery(false)
    }
    const handelExit = () => {
        onCancel()
    }
    const handelCreateEntery = () => {
        let adiscountDetails = {
            discount: discount,
            advance: advance
        }
        dispatch(setDiscountAndAdvance(adiscountDetails));
        onCreateEntry()
    }
    console.log(advance)

    return (
        <div>
            <div className={styles.detailsAndTestLayoutNav}>
                <div className={styles.detailsAndTestLayoutNavText1}>Enter Discount and Advance</div>
                <div className={styles.detailsAndTestLayoutNavButton1} >Print Invoice</div>
                <div onClick={handelCreateEntery} className={styles.detailsAndTestLayoutNavButton2} >Create Entery</div>
                {/* <div>1</div> */}
                <svg onClick={handelCancelCreateEntery} className={styles.detailsAndTestLayoutNavicon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

            <div className={styles.addingMembersLayout}>

                <div className={styles.addingMembersLayoutLeft}>
                    <div className={styles.addingMembersLayoutLeftline1}>Payment details</div>
                    <div className={styles.patientPhonenumberBox}>
                        <div className={styles.patientLabelBox}>
                            <div className={styles.patientLabelBoxText1}>Discount</div>
                            <div className={styles.patientLabelBoxText2}>*</div>
                        </div>

                        <select
                            id='discount'
                            className={styles.discountInput}

                            onChange={(e) => handleDiscountChange(e)}
                        >
                            <option className={styles.coupanDropdown} value="">Select Coupan</option>
                            {discountData.map((discount, dataIndex) => (
                                <option
                                    className={styles.coupanDropdown}
                                    key={dataIndex}
                                    value={discount.discount}>
                                    {discount.coupanName}

                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.patientPhonenumberBox}>
                        <div className={styles.patientLabelBox}>
                            <div className={styles.patientLabelBoxText1}>SelectPayment Method</div>
                            <div className={styles.patientLabelBoxText2}>*</div>
                        </div>
                        <div className={styles.patientInputBoxGender}
                            onChange={(e) => handleSelectPayment('type', e.target.value)}
                        >
                            <div className={styles.patientInputBoxGenderText1}>
                                <input
                                    type="radio"
                                    name="type"
                                    value="CASH"
                                    id="type"
                                    style={{ height: '20px', width: "20px" }}
                                />
                                Cash
                            </div>
                            <div className={styles.patientInputBoxGenderText2}>
                                <input
                                    type="radio"
                                    name="type"
                                    value="Online Banking"
                                    id="type"
                                    style={{ height: '20px', width: "20px" }}
                                />
                                Online Banking
                            </div>
                            <div className={styles.patientInputBoxGenderText3}>
                                <input
                                    type="radio"
                                    name="type"
                                    value="UPI"
                                    id="type"
                                    style={{ height: '20px', width: "20px" }}
                                />
                                UPI
                            </div>
                        </div>

                    </div>


                    <div className={styles.patientPhonenumberBox}>
                        <div className={styles.patientLabelBox}>
                            <div className={styles.patientLabelBoxText1}>Ammount Collected</div>
                            <div className={styles.patientLabelBoxText2}>*</div>
                        </div>
                        <div className={styles.patientInputBox}>
                            <input className={styles.patientInputBoxInput}
                                id="value"
                                type="text"
                                placeholder='Enter Ammount'
                                name="value"
                                onChange={(e) => handleSelectPayment('value', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={styles.discountParticulars}>
                        <div className={styles.discountParticularsLine1}>
                            <div className={styles.particulars}>Particulars</div>
                            <div className={styles.particulars}>Ammount</div>
                        </div>
                        <div className={styles.discountParticularsLine2}>
                            <div className={styles.particularsName}>Test Total</div>
                            <div className={styles.particularsPrice}>{totalMoney}</div>
                        </div>
                        <div className={styles.discountParticularsLine3}>
                            <div className={styles.particularsName}>( - ) Amount collected</div>
                            <div className={styles.particularsPrice}>500</div>
                        </div>
                        <div className={styles.discountParticularsLine4}>
                            <div className={styles.particularsName}>( - ) Discount</div>
                            <div className={styles.particularsPrice}>2323</div>
                        </div>
                        <div className={styles.discountParticularsLine5}>
                            <div className={styles.tatoalPayable}>Total payable</div>
                            <div className={styles.tatoalPayable}>3</div>
                        </div>


                    </div>

                </div>


                <div className={styles.addingMembersLayoutRight}>
                    <div className={styles.addingMembersLayoutRightLine1}>Total amount per patient3</div>
                    <div className={styles.priceLayout} >
                        <div className={styles.priceLayoutBox}>
                            {updatedUsers.map((users, id) => (<>
                                <div key={id} className={styles.priceLayoutBoxPatientname}>
                                    <div className={styles.priceLayoutBoxname}> {users.user.name}</div>
                                    <div className={styles.priceLayoutBoxHzline} />
                                </div>
                                {users.tests.map((test, id) => (

                                    <div key={id} className={styles.priceLayoutBoxPatientTest}>
                                        <div className={styles.priceLayoutBoxPatientTestName}>{test.testName}</div>
                                        <div className={styles.priceLayoutBoxPatientTestPrice}>{test.price}</div>

                                    </div>

                                ))}
                            </>
                            ))}
                        </div>
                    </div>
                    <div className={styles.totalPriceBox} >
                        <div className={styles.totalPriceBoxtext1}>Total</div>
                        <div className={styles.totalPriceBoxtext2}>{totalMoney}</div>
                    </div>
                </div>
            </div>
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
        </div>
    )
}

export default AddingMemberScreen3