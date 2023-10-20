import React, { useState } from 'react';
import Select from 'react-select';
import styles from './Discount.module.css';

const Discount = () => {
    const [discounts, setDiscounts] = useState([
        {
            coupon: "SPC30",
            discount: "30% off",
            numberOfCoupons: 100,
            discountStartDate: "2023-10-01",
            discountExpiryDate: "2023-10-31",
            applicableTests: [

            ],
        },
        {
            coupon: "SPC30",
            discount: "30% off",
            numberOfCoupons: 100,
            discountStartDate: "2023-10-01",
            discountExpiryDate: "2023-10-31",
            applicableTests: [
                { value: 1, label: 'Item 10' },
                { value: 2, label: 'Item 20' },
            ],
        },
        {
            coupon: "SPC30",
            discount: "30% off",
            numberOfCoupons: 100,
            discountStartDate: "2023-10-01",
            discountExpiryDate: "2023-10-31",
            applicableTests: [
                { value: 1, label: 'Item 10' },
                { value: 2, label: 'Item 20' },
            ],
        },
        {
            coupon: "SPC30",
            discount: "30% off",
            numberOfCoupons: 100,
            discountStartDate: "2023-10-01",
            discountExpiryDate: "2023-10-31",
            applicableTests: [
                { value: 1, label: 'Item 10' },
                { value: 2, label: 'Item 20' },
            ],
        },
        {
            coupon: "SPC30",
            discount: "30% off",
            numberOfCoupons: 100,
            discountStartDate: "2023-10-01",
            discountExpiryDate: "2023-10-31",
            applicableTests: [
                { value: 1, label: 'Item 10' },
                { value: 2, label: 'Item 20' },
            ],
        },
        {
            coupon: "SPC30",
            discount: "30% off",
            numberOfCoupons: 100,
            discountStartDate: "2023-10-01",
            discountExpiryDate: "2023-10-31",
            applicableTests: [
                { value: 1, label: 'Item 10' },
                { value: 2, label: 'Item 20' },
            ],
        },
        // Add more discount entries here
    ]);

    const options = [
        { value: 1, label: 'Item 10' },
        { value: 2, label: 'Item 20' },
        { value: 3, label: 'Item 30' },
        { value: 4, label: 'Item 40' },
    ];

    const [editItem, setEditItem] = useState(null);
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

    const openEditPopup = (index) => {
        setEditItem({ index, ...discounts[index] });
        setIsEditPopupOpen(true);
    };

    const closeEditPopup = () => {
        setIsEditPopupOpen(false);
    };

    const saveEditedItem = () => {
        // Implement logic to save the edited item
        // Update the discounts array to reflect the changes
        const updatedDiscounts = [...discounts];
        updatedDiscounts[editItem.index] = { ...editItem };
        setDiscounts(updatedDiscounts);
        closeEditPopup();
    };

    const handleInputChange = (event, field) => {
        setEditItem({ ...editItem, [field]: event.target.value });
    };

    const handleSelectChange = (selectedOptions) => {
        console.log(selectedOptions)
        setEditItem({ ...editItem, applicableTests: selectedOptions });
    };

    return (
        <>
            <div className={styles.discountTop}>
                <div className={styles.discountToptext}>Disount</div>
                <div className={styles.discountTopbutton}>Add Coupan</div>
            </div>
            <div className={styles.discountContainer}>

                {discounts.map((discount, index) => (
                    <div key={index} className={styles.discountItem}>
                        <div className={styles.discountItemTop}>
                            <div className={styles.coupon}><img className={styles.couponicon} src='https://imgv3.fotor.com/images/gallery/web-icon-for-setting_2022-09-23-092612_lodv.jpg' />{discount.coupon}</div>
                            <div className={styles.discountInfo}>{discount.discount}</div>
                        </div>
                        <div className={styles.couponInfo}>
                            <div className={styles.couponInfoRow}>
                                <div className={styles.couponInfoKey}>Number of Coupons: </div>
                                <div className={styles.couponInfoValue}>{discount.numberOfCoupons}</div>
                            </div>
                            <div className={styles.couponInfoRow}>
                                <div className={styles.couponInfoKey}>Discount Start Date:</div>
                                <div className={styles.couponInfoValue}>{discount.discountStartDate}</div>
                            </div>
                            <div className={styles.couponInfoRow}>
                                <div className={styles.couponInfoKey}>Discount Expiry Date:</div>
                                <div className={styles.couponInfoValue}>{discount.discountExpiryDate}</div>
                            </div>
                            <div className={styles.couponInfoRow}>
                                <div className={styles.couponInfoKey}>Applicable Tests:</div>
                                <div className={styles.couponInfoValue}>{discount.applicableTests.map((test) => test.label).join(', ')}</div>
                            </div>
                        </div>
                        <button className={styles.editButton} onClick={() => openEditPopup(index)}>
                            Edit
                        </button>
                    </div>
                ))}

                {isEditPopupOpen && (
                    <div className={styles.modalOverlay}>
                        <div className={styles.editPopup}>
                            <div className={styles.editableFields}>
                                <div className={styles.editableFieldscoupan}>
                                    <div>
                                        <label>Coupan Code</label>
                                        <input
                                            type="text"
                                            placeholder='coupan'
                                            value={editItem.coupon}
                                            onChange={(event) => handleInputChange(event, "coupon")}
                                        />
                                    </div>
                                    <div>
                                        <label>Discount %</label>
                                        <input
                                            type="text"
                                            placeholder='coupan'
                                            value={editItem.discount}
                                            onChange={(event) => handleInputChange(event, "discount")}
                                        />
                                    </div>
                                    <div>
                                        <label>Number of coupan</label>
                                        <input
                                            placeholder='numberOfCoupons'
                                            type="text"
                                            value={editItem.numberOfCoupons}
                                            onChange={(event) => handleInputChange(event, "numberOfCoupons")}
                                        />
                                    </div>
                                </div>
                                <div className={styles.editableFieldscoupan}>
                                    <div>
                                        <label>Discount Start Date</label>
                                        <input
                                            type="date"
                                            value={editItem.discountExpiryDate}
                                            onChange={(event) => handleInputChange(event, "discountExpiryDate")}
                                        />
                                    </div>
                                    <div>
                                        <label>Discount expire Date</label>
                                        <input
                                            type="date"
                                            value={editItem.discountExpiryDate}
                                            onChange={(event) => handleInputChange(event, "discountExpiryDate")}
                                        />
                                    </div>
                                    <div>
                                        <label>Recurrence</label>
                                        <input
                                            placeholder='Recurrence'
                                            type="text"
                                            value={editItem.recurrence}
                                            onChange={(event) => handleInputChange(event, "recurrence")}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>applicableTests</label>
                                    <Select
                                        isMulti
                                        options={options}
                                        value={editItem.applicableTests}
                                        onChange={handleSelectChange}
                                    />
                                </div>

                                {/* Add more editable fields here */}
                            </div>
                            <div className={styles.editButtonGroup}>
                                <button className={styles.saveButton} onClick={saveEditedItem}>
                                    Save
                                </button>
                                <button className={styles.cancelButton} onClick={closeEditPopup}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Discount;















