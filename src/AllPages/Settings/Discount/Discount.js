import React, { useState ,useEffect} from 'react';
import styles from './Discount.module.css';
import AddCoupan from '../AddCoupan/AddCoupan';
import EditCoupan from '../EditCoupan/EditCoupan';
import axios from 'axios';
const Discount = (props) => {
    const { onClick } = props;
   
    const [discounts, setDiscounts] = useState([]);
    // console.log(discounts)

    const [editItem, setEditItem] = useState(null);
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
    const [addCoupanPopUp, setAddCoupanPopUp] = useState(false);
    const [currentIndex, setCurrentIndex] = useState("")

    useEffect(() => {
        const fetchData = async () => {
          // Retrieving the "labId" value from localStorage
          const labId1 = localStorage.getItem('labId');
          const x = {
            labId: labId1,
          }
          if (labId1) {
            try {
              // Making a GET request to the discount endpoint with the "labId" as a query parameter
              const response = await axios.post('http://localhost:8090/first/v1/list-discounts', x);
    
              // Set the lab data in the component's state
              console.log(response.data.discounts)
              setDiscounts(response.data.discounts);
            } catch (err) {
              // Handle errors message from the server
              console.error(err);
            }
          } else {
            console.log('Lab ID not found in localStorage.');
          }
        };
    
        fetchData();
      }, [isEditPopupOpen,addCoupanPopUp]);




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


    const openEditPopup = (index) => {
        console.log(index)
        setEditItem({ ...discounts[index] });
        setCurrentIndex(index)
        setIsEditPopupOpen(true);
    };

    const closeEditPopup = () => {
        setIsEditPopupOpen(!isEditPopupOpen);
    };

    const handleADDCoupan = () => {
        setAddCoupanPopUp(!addCoupanPopUp)
    }
    const handleAddCoupanPopUpClick = () => {
        setAddCoupanPopUp(!addCoupanPopUp)
    }

    return (
        <>
            <div className={styles.discountTop}>
                <div className={styles.discountToptext}>Disount1</div>
                <div onClick={handleADDCoupan} className={styles.discountTopbutton}>Add Coupan</div>
            </div>
            <div className={styles.discountContainer}>
                {discounts.length === 0 ? <div className={styles.discountLengthZero}>
                    <img src='/Image/StartHere/addIcon.jpg' />
                    <div className={styles.discountLengthZeroText}>Add discount coupons</div>
                    <div onClick={handleADDCoupan} className={styles.discountLengthZeroButton}>Add Coupan</div>

                </div> : ""}
                {discounts !== undefined && discounts.map((discount, index) => (
                    <div key={index} className={styles.discountItem}>
                        <div className={styles.discountItemTop}>
                            <div className={styles.coupon}><svg className={styles.couponicon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 9H9.01M15 15H15.01M14.834 9.16602L9.33398 14.666M9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9C8.5 8.72386 8.72386 8.5 9 8.5C9.27614 8.5 9.5 8.72386 9.5 9ZM15.5 15C15.5 15.2761 15.2761 15.5 15 15.5C14.7239 15.5 14.5 15.2761 14.5 15C14.5 14.7239 14.7239 14.5 15 14.5C15.2761 14.5 15.5 14.7239 15.5 15Z" stroke="#0067DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.751 2.54557C11.4248 1.81814 12.5752 1.81814 13.249 2.54557L14.1411 3.50859C14.2047 3.57724 14.302 3.60332 14.3914 3.57567L15.6455 3.1877C16.5928 2.89465 17.5891 3.46986 17.8089 4.43674L18.1 5.71679C18.1207 5.80803 18.192 5.87929 18.2832 5.90003L19.5633 6.19108C20.5301 6.41092 21.1054 7.40722 20.8123 8.35449L20.4243 9.60856C20.3967 9.69796 20.4228 9.79529 20.4914 9.85888L21.4544 10.751C22.1819 11.4248 22.1819 12.5752 21.4544 13.249L20.4914 14.1411C20.4228 14.2047 20.3967 14.302 20.4243 14.3914L20.8123 15.6455C21.1054 16.5928 20.5301 17.5891 19.5633 17.8089L18.2832 18.1C18.192 18.1207 18.1207 18.192 18.1 18.2832L17.8089 19.5633C17.5891 20.5301 16.5928 21.1054 15.6455 20.8123L14.3914 20.4243C14.302 20.3967 14.2047 20.4228 14.1411 20.4914L13.249 21.4544C12.5752 22.1819 11.4248 22.1819 10.751 21.4544L9.85888 20.4914C9.79529 20.4228 9.69796 20.3967 9.60856 20.4243L8.35449 20.8123C7.40722 21.1054 6.41092 20.5301 6.19108 19.5633L5.90003 18.2832C5.87929 18.192 5.80803 18.1207 5.71679 18.1L4.43674 17.8089C3.46986 17.5891 2.89465 16.5928 3.1877 15.6455L3.57567 14.3914C3.60332 14.302 3.57724 14.2047 3.50859 14.1411L2.54557 13.249C1.81814 12.5752 1.81814 11.4248 2.54557 10.751L3.50859 9.85888C3.57724 9.79529 3.60332 9.69796 3.57567 9.60856L3.1877 8.35449C2.89465 7.40722 3.46986 6.41092 4.43674 6.19108L5.71679 5.90003C5.80803 5.87929 5.87929 5.80803 5.90003 5.71679L6.19108 4.43674C6.41092 3.46986 7.40722 2.89465 8.35449 3.1877L9.60856 3.57567C9.69796 3.60332 9.79529 3.57724 9.85888 3.50859L10.751 2.54557ZM12.1784 3.5373C12.0822 3.43338 11.9178 3.43338 11.8216 3.5373L10.9295 4.50033C10.4844 4.98086 9.80302 5.16343 9.17725 4.96984L7.92318 4.58187C7.78785 4.54 7.64553 4.62218 7.61412 4.7603L7.32307 6.04035C7.17785 6.67907 6.67907 7.17785 6.04035 7.32307L4.7603 7.61412C4.62218 7.64553 4.54 7.78785 4.58187 7.92318L4.96984 9.17725C5.16343 9.80302 4.98086 10.4844 4.50033 10.9295L3.5373 11.8216C3.43338 11.9178 3.43338 12.0822 3.5373 12.1784L4.50033 13.0705C4.98086 13.5156 5.16343 14.197 4.96984 14.8227L4.58187 16.0768C4.54 16.2121 4.62218 16.3545 4.7603 16.3859L6.04035 16.6769C6.67907 16.8222 7.17785 17.3209 7.32307 17.9597L7.61412 19.2397C7.64553 19.3778 7.78785 19.46 7.92318 19.4181L9.17725 19.0302C9.80302 18.8366 10.4844 19.0191 10.9295 19.4997L11.8216 20.4627C11.9178 20.5666 12.0822 20.5666 12.1784 20.4627L13.0705 19.4997C13.5156 19.0191 14.197 18.8366 14.8227 19.0302L16.0768 19.4181C16.2121 19.46 16.3545 19.3778 16.3859 19.2397L16.6769 17.9597C16.8222 17.3209 17.3209 16.8222 17.9597 16.6769L19.2397 16.3859C19.3778 16.3545 19.46 16.2121 19.4181 16.0768L19.0302 14.8227C18.8366 14.197 19.0191 13.5156 19.4997 13.0705L20.4627 12.1784C20.5666 12.0822 20.5666 11.9178 20.4627 11.8216L19.4997 10.9295C19.0191 10.4844 18.8366 9.80302 19.0302 9.17725L19.4181 7.92318C19.46 7.78785 19.3778 7.64553 19.2397 7.61412L17.9597 7.32307C17.3209 7.17785 16.8222 6.67907 16.6769 6.04035L16.3859 4.7603C16.3545 4.62218 16.2121 4.54 16.0768 4.58187L14.8227 4.96984C14.197 5.16343 13.5156 4.98086 13.0705 4.50033L12.1784 3.5373Z" fill="#0067DF" />
                            </svg>{discount.name}</div>

                            {/* <div className={styles.coupon}><img className={styles.couponicon} src='https://imgv3.fotor.com/images/gallery/web-icon-for-setting_2022-09-23-092612_lodv.jpg' />{discount.coupon}</div> */}
                            <div className={styles.discountInfo}>{discount.percent}</div>
                        </div>
                        <div className={styles.couponInfo}>
                            <div className={styles.couponInfoRow}>
                                <div className={styles.couponInfoKey}>Number of Coupons: </div>
                                <div className={styles.couponInfoValue}>{discount.count}</div>
                            </div>
                            <div className={styles.couponInfoRow}>
                                <div className={styles.couponInfoKey}>Discount Start Date:</div>
                                <div className={styles.couponInfoValue}>{discount.startTime && <span>{discount.startTime.iso8601}</span>}</div>
                            </div>
                            <div className={styles.couponInfoRow}>
                                <div className={styles.couponInfoKey}>Discount Expiry Date:</div>
                                <div className={styles.couponInfoValue}>{discount.endTime && <span>{discount.endTime.iso8601}</span>}</div>
                            </div>
                            <div className={styles.couponInfoRow}>
                                <div className={styles.couponInfoKey}>Applicable Tests:</div>
                                <div className={styles.couponInfoValue}>{discount.tests.map((test) => test.name).join(', ')}</div>
                            </div>
                        </div>
                        <button className={styles.editButton} onClick={() => openEditPopup(index)}>
                            Edit
                        </button>
                    </div>
                ))}

                {isEditPopupOpen && (
                    <div className={styles.addCoupanPopUp}>
                        <div className={styles.addCoupanPopUpContainer}>
                            <EditCoupan onClick={closeEditPopup} editItem={editItem} index={currentIndex} />
                        </div>
                    </div>
                )}

                {addCoupanPopUp && (
                    <div className={styles.addCoupanPopUp}>
                        <div className={styles.addCoupanPopUpContainer}>
                            <AddCoupan onClick={handleAddCoupanPopUpClick} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Discount;















