import React, { useState, useEffect } from 'react'
import styles from './AddingMemberScreen3.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { deleteUpdatedUser } from '../../../ReduxState/Property/AddingMemberDataSlice/AddingMemberDataSlice.js';


const userInfos = [
    {
        "user": {
            "name": "full name 1",
            "gender": "MALE",
            "age": "30",
            "phoneNumber": "99999999991"
        },
        "tests": [
            {
                "testName": "tname1",
                "price": 400
            },
            {
                "testName": "tname2",
                "price": 233
            }
        ]
    },
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
    const { onClick } = props;
    const userInfo = dataaaa;
    const [updatedUsers, setUpdatedUsers] = useState(userInfo);



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
    }


    return (
        <div>

            <div className={styles.addingMembersLayout}>

                <div className={styles.addingMembersLayoutLeft}>
                    <div className={styles.addingMembersLayoutLeftline1}>Payment details</div>
                    <div className={styles.patientPhonenumberBox}>
                        <div className={styles.patientLabelBox}>
                            <div className={styles.patientLabelBoxText1}>Ammount Collected</div>
                            <div className={styles.patientLabelBoxText2}>*</div>
                        </div>
                        <div className={styles.patientInputBox}>
                            <input className={styles.patientInputBoxInput}
                                id="ammountCollectd"
                                type="text" placeholder='Enter Ammount'
                            // onChange={(e) => handleUserChange('name', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.patientPhonenumberBox}>
                        <div className={styles.patientLabelBox}>
                            <div className={styles.patientLabelBoxText1}>SelectPayment Method</div>
                            <div className={styles.patientLabelBoxText2}>*</div>
                        </div>
                        <div className={styles.patientInputBoxGender}
                        // onChange={(e) => handleUserChange('gender', e.target.value)}
                        >
                            <div className={styles.patientInputBoxGenderText1}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Cash"
                                    id="paymentMethod"
                                    style={{ height: '20px', width: "20px" }}
                                />
                                Cash
                            </div>
                            <div className={styles.patientInputBoxGenderText2}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Online Banking"
                                    id="paymentMethod"
                                    style={{ height: '20px', width: "20px" }}
                                />
                                Online Banking
                            </div>
                            <div className={styles.patientInputBoxGenderText3}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="UPI"
                                    id="paymentMethod"
                                    style={{ height: '20px', width: "20px" }}
                                />
                                UPI
                            </div>
                        </div>

                    </div>
                    <div className={styles.patientPhonenumberBox}>
                        <div className={styles.patientLabelBox}>
                            <div className={styles.patientLabelBoxText1}>Discount</div>
                            <div className={styles.patientLabelBoxText2}>*</div>
                        </div>
                        <div className={styles.patientInputBox}>
                            <select
                                id='discount'
                                className={styles.discountInput}

                                onChange={(e) => handleDiscountChange(e)}
                            >
                                <option value="">Select Coupan</option>
                                {discountData.map((discount, dataIndex) => (
                                    <option key={dataIndex}
                                        value={discount.coupanName}>
                                        {discount.coupanName}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={styles.discountParticulars}>
                        <div className={styles.discountParticularsLine1}>
                            <div>Particulars</div>
                            <div>Ammount</div>
                        </div>
                        <div className={styles.discountParticularsLine2}>
                            <div>Test Total</div>
                            <div>{totalMoney}</div>
                        </div>
                        <div className={styles.discountParticularsLine3}>
                            <div>( - ) Amount collected</div>
                            <div>500</div>
                        </div>
                        <div className={styles.discountParticularsLine4}>
                            <div>( - ) Discount</div>
                            <div>Ammount</div>
                        </div>
                        <div className={styles.discountParticularsLine5}>
                            <div>Total payable</div>
                            <div>3</div>
                        </div>
                    

                    </div>






                </div>


                <div className={styles.addingMembersLayoutRight}>
                    <div className={styles.addingMembersLayoutRightLine1}>Total amount per patient</div>
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
        </div>
    )
}

export default AddingMemberScreen3