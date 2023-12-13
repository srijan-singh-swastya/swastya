import React, { useState,useEffect } from 'react'
import styles from './AddingMemberScreen2.module.css';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import  {deleteUpdatedUser}  from '../../../ReduxState/Property/AddingMemberDataSlice/AddingMemberDataSlice.js';


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



const AddingMemberScreen2 = (props) => {
  const dispatch=useDispatch();
  const dataaaa=useSelector((state)=>state.newAddedMenber)
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
  return (
    <div>

      <div className={styles.addingMembersLayout}>

        <div className={styles.addingMembersLayoutLeft}>
          <div className={styles.addingMembersLayoutLeftline1}>Add patient and test details</div>
          {updatedUsers.map((users, id) => (

            <div key={id} className={styles.addingMembersLayoutLeftUser}>
              <div className={styles.addingMembersLayoutLeftUsertext1}>{users.user.name.charAt(0)}</div>
              <div className={styles.addingMembersLayoutLeftUsertext2}>{users.user.name}</div>
              <div className={styles.addingMembersLayoutLeftUsertext3}>Edit Details and test</div>
              <div  className={styles.addingMembersLayoutLeftUsertext4}>
                <svg onClick={() => handleDeleteUser(users.user.name)} xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83317 7.1665V15.4998C5.83317 16.4203 6.57936 17.1665 7.49984 17.1665H12.4998C13.4203 17.1665 14.1665 16.4203 14.1665 15.4998V7.1665H15.8332V15.4998C15.8332 17.3408 14.3408 18.8332 12.4998 18.8332H7.49984C5.65889 18.8332 4.1665 17.3408 4.1665 15.4998V7.1665H5.83317Z" fill="#4A5055" />
                  <path d="M8.33333 9.6665C7.8731 9.6665 7.5 10.0396 7.5 10.4998V13.8332C7.5 14.2934 7.8731 14.6665 8.33333 14.6665C8.79357 14.6665 9.16667 14.2934 9.16667 13.8332V10.4998C9.16667 10.0396 8.79357 9.6665 8.33333 9.6665Z" fill="#4A5055" />
                  <path d="M11.6667 9.6665C11.2064 9.6665 10.8333 10.0396 10.8333 10.4998V13.8332C10.8333 14.2934 11.2064 14.6665 11.6667 14.6665C12.1269 14.6665 12.5 14.2934 12.5 13.8332V10.4998C12.5 10.0396 12.1269 9.6665 11.6667 9.6665Z" fill="#4A5055" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66683 5.49984V4.6665C6.66683 3.28579 7.78612 2.1665 9.16683 2.1665H10.8335C12.2142 2.1665 13.3335 3.28579 13.3335 4.6665V5.49984H15.8335C16.2937 5.49984 16.6668 5.87293 16.6668 6.33317C16.6668 6.79341 16.2937 7.1665 15.8335 7.1665H4.16683C3.70659 7.1665 3.3335 6.79341 3.3335 6.33317C3.3335 5.87293 3.70659 5.49984 4.16683 5.49984H6.66683ZM8.3335 4.6665C8.3335 4.20627 8.70659 3.83317 9.16683 3.83317H10.8335C11.2937 3.83317 11.6668 4.20627 11.6668 4.6665V5.49984H8.3335V4.6665Z" fill="#4A5055" />
                </svg>
              </div>
            </div>

          ))}

          <div onClick={onClick} className={styles.addingMembersLayoutLeftline3}>
            <div className={styles.addingMembersLayoutLeftline3text1} >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M9 9.5V3.5M9 9.5V15.5M9 9.5H15H3" stroke="#99C2F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Add new member
            </div>
          </div>
        </div>



        <div className={styles.addingMembersLayoutRight}>
          <div className={styles.addingMembersLayoutRightLine1}>Total amount per patient2</div>
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

export default AddingMemberScreen2