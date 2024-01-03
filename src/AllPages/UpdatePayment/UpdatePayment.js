
import React, { useState, useEffect } from 'react'
import styles from './UpdatePayment.module.css';
import { useSelector } from 'react-redux';
import axios from 'axios';


const UpdatePayment = (props) => {
    const { onClick } = props;
    const { id } = props
    // alert(id)
    console.log(id)

    let totalMoney = 0; // Initialize as let, not const



    const data = useSelector((state) => state.newAllEntries)
    console.log(data)

    function findBookingById(id) {
        for (const order of data.orders) {
            for (const booking of order.bookings) {
                if (booking.id === id) {
                    //   console.log(JSON.stringify(booking, null, 2)); // Logging the found booking
                    return booking;
                }
            }
        }
        return null; // Return null if the booking is not found
    }

    // Call the function with the specified ID
    const originalData = findBookingById(id);
    console.log(originalData)
    console.log(originalData.metadata)


    let userInfo = null;
    if (originalData && originalData.metadata) {
        userInfo = {
            "user": {
                "name": originalData.metadata.user.name || "",
                "gender": originalData.metadata.user.gender === 1 ? "MALE" : "FEMALE",
                "age": originalData.metadata.user.age.toString() || "",
                "phoneNumber": originalData.metadata.user.phoneNumber || ""
            },
            "tests": originalData.metadata.tests.map(test => ({
                "testName": test.name || "",
                "price": test.price || 0
            }))
        };
    }

    // Putting the extracted data into an array
    const userInfos = [userInfo];

    const userInfos2 = [
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

    userInfos.forEach((user) => {
        user.tests.forEach((test) => {
            totalMoney += test.price;
        });
    });

    let totalAmmount = null;
    if (originalData && originalData.metadata) {
        const totalCollection = originalData.metadata.payment?.amounts.reduce((accumulator, amount) => {
            return accumulator + parseFloat(amount.value || 0);
        }, 0);

        totalAmmount = {

            "totalPrice": originalData.metadata.payment.total || 0,
            "discount": originalData.metadata.payment.discount || 0,
            "totalCollection": totalCollection || 0

        };
    }
    console.log(totalAmmount)

    const [paymentDetails,setPaymentDetails]=useState({
        type:"",
        value:""
    })

    const handlePayment=(field, value)=>{
        setPaymentDetails({
            ...paymentDetails,
            [field]: value,
        });
        // alert(field)
        let tobepaid=totalAmmount.totalPrice-totalAmmount.discount-totalAmmount.totalCollection
        if(field==="value"){
            // alert(tobepaid)
            if(Number(value)<0){
                setPaymentDetails({
                    ...paymentDetails,
                    [field]: "",
                });
            }
            else if(Number(value)>tobepaid){
                setPaymentDetails({
                    ...paymentDetails,
                    [field]: tobepaid,
                });
            }
            else{
                setPaymentDetails({
                    ...paymentDetails,
                    [field]: value,
                });
            }
        }
    }

console.log(paymentDetails)

const handleUpdatePayment=async()=>{
    const clonedData = JSON.parse(JSON.stringify(originalData));
    clonedData.metadata.payment.amounts.push(paymentDetails);
    let p={
        booking:clonedData,
        "type" : "PAYMENT"
    }

    try {
        // Making a post request to the update payment 
        const response = await axios.post('http://localhost:8090/first/v1/update-booking', p);
      alert("succss")
    
   
      } catch (err) {
        alert(err)
        console.error(err);
      }
    console.log(p)
    onClick()

}




    return (
        <div>
            <div className={styles.prepareReportNav}>
                <div className={styles.prepareReportNavText1}>Update payment details</div>
                {/* <div className={styles.prepareReportNavText2}>Print</div> */}
                <div className={styles.prepareReportNavText3}>Print invoice</div>
                <div onClick={handleUpdatePayment} className={styles.prepareReportNavText4}>Update payment</div>
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
                            <div className={styles.AllBoldText}>{totalAmmount.totalPrice}</div>
                        </div>
                        <div className={styles.discountParticularsLine3}>
                            <div className={styles.AllNormalText}>( - ) Amount collected</div>
                            <div className={styles.AllBoldTextColoured}>{totalAmmount.totalCollection}</div>
                        </div>
                        <div className={styles.discountParticularsLine4}>
                            <div className={styles.AllNormalText}>( - ) Discount</div>
                            <div className={styles.AllBoldText}>{totalAmmount.discount}</div>
                        </div>
                        <div className={styles.discountParticularsLine5}>
                            <div className={styles.AllBoldText}>Total payable</div>
                            <div className={styles.AllBoldText}>{totalAmmount.totalPrice - totalAmmount.discount - totalAmmount.totalCollection}</div>
                        </div>


                    </div>

                    <div className={styles.patientPhonenumberBox}>
                        <div className={styles.patientLabelBox}>
                            <div className={styles.patientLabelBoxText1}>SelectPayment Method</div>
                            <div className={styles.patientLabelBoxText2}>*</div>
                        </div>
                        <div className={styles.patientInputBoxGender}
                        onChange={(e) => handlePayment('type', e.target.value)}
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
                                type="number" placeholder='Enter '
                                value={paymentDetails.value}
                            onChange={(e) => handlePayment('value', e.target.value)}
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