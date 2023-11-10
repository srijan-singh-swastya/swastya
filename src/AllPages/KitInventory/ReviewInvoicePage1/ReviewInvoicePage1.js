import React, { useEffect, useState } from 'react';
import styles from './ReviewInvoicePage1.module.css';
let EmptyDataCount = 0
const ReviewInvoicePage1 = (props) => {
    const { onClick } = props;
    const initialData = {
        vendorName: 'New Medical Clinic',
        vendorGSTIN: '67KLMN2345P6Q7R8',
        vendorBankName: 'SBI',
        accountNumber: '0987654921043210',
        ifscCode: '',
        micrCode: 'SNQ890811',
        labName: 'Annish and Sunil Pathology Labs',
    };

    const [data, setData] = useState(initialData);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e, field) => {
        const newValue = e.target.value;
        setData((prevData) => ({
            ...prevData,
            [field]: newValue,
        }));
        if (errors[field]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field]: false,
            }));
        }
    };

    const renderInputField = (field, label, placeholder) => (
        <div className={styles.inputField}>
            <div className={styles.labelParent}>
                <div className={styles.label}>{label}</div>
                <div className={styles.div}>*</div>
            </div>
            <div
            >
                <img
                    className={styles.searchfatIcon}
                    alt=""
                    src="/searchfat.svg"
                />
                <input
                    className={`${styles.text} ${errors[field] ? styles.errorBorder : styles.searchfatParent}`}
                    placeholder={placeholder}
                    value={data[field]}
                    onChange={(e) => handleInputChange(e, field)}
                />

                <img
                    className={styles.searchfatIcon}
                    alt=""
                    src="/arrowaltdown.svg"
                />
            </div>
            {errors[field] && (
                <div className={styles.errorText}>{`${label} is required`}</div>
            )}
            <div className={styles.helpText}>Help text</div>
        </div>
    );;

    const validateData = () => {
        const newErrors = {};
        for (const field in data) {
            if (data[field] === '') {
                EmptyDataCount += 1
                newErrors[field] = true;
            } else {
                newErrors[field] = false;
            }
        }
        setErrors(newErrors);
    };

    const handleContinueClick = () => {
        EmptyDataCount = 0
        validateData();
        // Add logic for continuing if data is valid
        if (EmptyDataCount===0 && onClick) {
            onClick();
          }
    };
    useEffect(() => {
        EmptyDataCount = 0
        validateData();

    }, []); // Run this effect only once when the component mounts

    return (
        <div>
            <div className={styles.prepareReportNav}>
                <div className={styles.prepareReportNavText1}>Review invoice details</div>
                <div className={styles.prepareReportNavText3}>Discard invoice</div>
                <div className={styles.prepareReportNavText4} onClick={handleContinueClick}>
                    Continue
                </div>
                <div onClick={onClick} className={styles.prepareReportNavText5}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19"
                            stroke="#272727"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>

            <div className={styles.ReviewInvoicePage1Box2}>
                <div className={styles.ReviewInvoicePage1Box2Left}>
                    <img className={styles.imageSize} src="https://cdn-icons-png.flaticon.com/512/7645/7645138.png" />
                </div>
                <div className={styles.ReviewInvoicePage1Box2Right}>
                    {EmptyDataCount > 0 ?
                        <div className={styles.alertMessage}><div className={styles.alerttest}>{EmptyDataCount} fields missing data. Add details to continue.</div></div> : ""
                    }
                    <div className={styles.kitinv}>
                        <div className={styles.rectangleParent}>
                            <div className={styles.frameChild} />
                            <b className={styles.vendorDetails}>Vendor details</b>
                        </div>
                        <div className={styles.frameParent}>
                            <div className={styles.inputFieldParent}>
                                {renderInputField('vendorName', 'Vendor name', 'New Medical Clinic')}
                                {renderInputField('vendorGSTIN', 'Vendor GSTIN', '67KLMN2345P6Q7R8')}
                                {renderInputField('vendorBankName', 'Vendor bank name', 'SBI')}
                                {renderInputField('accountNumber', 'Account number', '0987654921043210')}
                                {renderInputField('ifscCode', 'IFSC code', 'SBIP987651')}
                                {renderInputField('micrCode', 'MICR code', 'SNQ890811')}
                            </div>
                            <div className={styles.inputFieldParent}>
                                {renderInputField('labName', 'Lab name', 'Annish and Sunil Pathology Labs')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ReviewInvoicePage1;
