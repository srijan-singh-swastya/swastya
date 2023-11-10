
import React, { useState, useEffect } from 'react'
import styles from './UpdatePayment.module.css';

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



const UpdatePayment = (props) => {
    const { onClick } = props;

    let totalMoney = 0; // Initialize as let, not const
    userInfos.forEach((user) => {
        user.tests.forEach((test) => {
            totalMoney += test.price;
        });
    });



    return (
        <div>
            <div className={styles.prepareReportNav}>
                <div className={styles.prepareReportNavText1}>Update payment details</div>
                {/* <div className={styles.prepareReportNavText2}>Print</div> */}
                <div className={styles.prepareReportNavText3}>Print invoice</div>
                <div onClick={onClick} className={styles.prepareReportNavText4}>Update payment</div>
                <div onClick={onClick} className={styles.prepareReportNavText5}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>

            <div className={styles.addingMembersLayout}>

                <div className={styles.addingMembersLayoutLeft}>
                    <div className={styles.addingMembersLayoutLeftline1}>Payment details</div>
                    <div className={styles.discountParticulars}>
                        <div className={styles.discountParticularsLine1}>
                            <div className={styles.AllBoldText} >Particulars</div>
                            <div className={styles.AllBoldText}>Ammount</div>
                        </div>
                        <div className={styles.discountParticularsLine2}>
                            <div className={styles.AllNormalText}>Test Total</div>
                            <div className={styles.AllBoldText}>{totalMoney}</div>
                        </div>
                        <div className={styles.discountParticularsLine3}>
                            <div className={styles.AllNormalText}>( - ) Amount collected</div>
                            <div className={styles.AllBoldTextColoured}>500</div>
                        </div>
                        <div className={styles.discountParticularsLine4}>
                            <div className={styles.AllNormalText}>( - ) Discount</div>
                            <div className={styles.AllBoldText}>9</div>
                        </div>
                        <div className={styles.discountParticularsLine5}>
                            <div className={styles.AllBoldText}>Total payable</div>
                            <div className={styles.AllBoldText}>3</div>
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
                            <div className={styles.patientLabelBoxText1}>Enter Transaction Id</div>
                            <div className={styles.patientLabelBoxText2}>*</div>
                        </div>
                        <div className={styles.patientInputBox}>
                            <input className={styles.patientInputBoxInput}
                                id="ammountCollectd"
                                type="text" placeholder='Enter '
                            // onChange={(e) => handleUserChange('name', e.target.value)}
                            />
                        </div>
                    </div>









                </div>


                <div className={styles.addingMembersLayoutRight}>
                    <div className={styles.addingMembersLayoutRightLine1}>Total amount per patient</div>
                    <div className={styles.priceLayout} >
                        <div className={styles.priceLayoutBox}>
                            {userInfos.map((users, id) => (<>
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

export default UpdatePayment