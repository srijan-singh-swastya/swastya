import React, { useEffect, useState } from 'react';
import styles from './ReviewInvoicePage2.module.css';
import Table from '../../General/Table/Table';
let EmptyDataCount = 0
const ReviewInvoicePage2 = (props) => {
    const { onClick } = props;
    const initialData = {
        NumberOfKitsInInventory:"20",
        NumberOfKitsActuallyReceived:"80",
        LabID:"SE232",
        UserID:"FE111",
        InvoiceNumber:"1234",
        InvoiceDate:"12aug",
        DeliveryDate:"23aug",
        // vendorName: 'New Medical Clinic',
        // vendorGSTIN: '67KLMN2345P6Q7R8',
        // vendorBankName: 'SBI',
        // accountNumber: '0987654921043210',
        // ifscCode: 'pp',
        // micrCode: 'SNQ890811',
        // labName: 'Annish and Sunil Pathology Labs',
    };

    const [data, setData] = useState(initialData);
    const [errors, setErrors] = useState({});
const[cancleInvoice,setCancleInvoice]=useState(false)
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
               
                <input
                    className={`${styles.text} ${errors[field] ? styles.errorBorder : styles.searchfatParent}`}
                    placeholder={placeholder}
                    value={data[field]}
                    onChange={(e) => handleInputChange(e, field)}
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
        if (EmptyDataCount === 0 && onClick) {
            onClick();
        }
    };
    useEffect(() => {
        EmptyDataCount = 0
        validateData();

    }, []); // Run this effect only once when the component mounts




    const [zoomLevel, setZoomLevel] = useState(1); // Initial zoom level

    const handleZoomIn = () => {
        setZoomLevel(zoomLevel + 0.1); // Increase the zoom level by 0.1 (adjust as needed)
    };

    const handleZoomOut = () => {
        setZoomLevel(zoomLevel - 0.1); // Decrease the zoom level by 0.1 (adjust as needed)
    };


    const handleDiscard=()=>{
        setCancleInvoice(!cancleInvoice)
    }
    const handelCancle =()=>{
        setCancleInvoice(!cancleInvoice)
    }
   

    return (
        <div>
            <div className={styles.prepareReportNav}>
                <div className={styles.prepareReportNavText1}>Review invoice details</div>
                <div onClick={handleDiscard} className={styles.prepareReportNavText3}>Discard invoice</div>
                <div className={styles.prepareReportNavText4} onClick={handleContinueClick}>
                    Continuen
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
                <img style={{ transform: `scale(${zoomLevel})` }} className={styles.imageSize} src="https://i.pinimg.com/736x/98/62/42/986242f1d3273b4af8d884a85e8810e6.jpg" />
                    <div className={styles.zoomOption}>
                        <div className={styles.zoomContainer}>
                            <svg onClick={handleZoomOut} className={styles.ZoomMinus} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21.5293 20.4692L17.4772 16.417C18.9081 14.7129 19.626 12.5221 19.4811 10.3015C19.3361 8.08099 18.3396 6.0021 16.6993 4.4984C15.0589 2.9947 12.9014 2.18228 10.6766 2.23055C8.45188 2.27882 6.33164 3.18407 4.75806 4.7575C3.18448 6.33094 2.27904 8.4511 2.23057 10.6758C2.18209 12.9006 2.99432 15.0582 4.49786 16.6987C6.00141 18.3392 8.08021 19.3359 10.3007 19.481C12.5213 19.6262 14.7121 18.9085 16.4164 17.4777L20.4686 21.5298C20.6092 21.6705 20.8 21.7495 20.9989 21.7495C21.1978 21.7495 21.3886 21.6705 21.5293 21.5299C21.6699 21.3892 21.749 21.1984 21.749 20.9995C21.749 20.8006 21.67 20.6098 21.5293 20.4692V20.4692ZM13.8745 11.6247H7.87449C7.67558 11.6247 7.48481 11.5457 7.34416 11.405C7.20351 11.2644 7.12449 11.0736 7.12449 10.8747C7.12449 10.6758 7.20351 10.485 7.34416 10.3444C7.48481 10.2037 7.67558 10.1247 7.87449 10.1247H13.8745C14.0734 10.1247 14.2642 10.2037 14.4048 10.3444C14.5455 10.485 14.6245 10.6758 14.6245 10.8747C14.6245 11.0736 14.5455 11.2644 14.4048 11.405C14.2642 11.5457 14.0734 11.6247 13.8745 11.6247Z" fill="#EBEBEC" />
                            </svg>
                            <svg onClick={handleZoomIn} className={styles.ZoomPlus} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21.5293 20.4692L17.4771 16.417C18.9081 14.7129 19.626 12.5221 19.4811 10.3015C19.3361 8.08098 18.3396 6.00209 16.6992 4.49839C15.0589 2.9947 12.9014 2.18228 10.6766 2.23055C8.45187 2.27882 6.33163 3.18407 4.75806 4.7575C3.18448 6.33094 2.27904 8.45109 2.23057 10.6758C2.18209 12.9006 2.99432 15.0582 4.49786 16.6986C6.00141 18.3391 8.08021 19.3359 10.3007 19.481C12.5213 19.6261 14.7121 18.9085 16.4164 17.4776L20.4686 21.5298C20.5382 21.5994 20.6209 21.6547 20.7119 21.6924C20.8029 21.7301 20.9004 21.7495 20.9989 21.7495C21.0974 21.7495 21.1949 21.7301 21.2859 21.6924C21.3769 21.6547 21.4596 21.5995 21.5292 21.5298C21.5989 21.4602 21.6541 21.3775 21.6918 21.2865C21.7295 21.1955 21.7489 21.098 21.7489 20.9995C21.7489 20.901 21.7296 20.8035 21.6919 20.7125C21.6542 20.6215 21.5989 20.5388 21.5293 20.4692V20.4692ZM13.8745 11.6248H11.6245V13.8748C11.6245 14.0737 11.5455 14.2644 11.4048 14.4051C11.2642 14.5457 11.0734 14.6248 10.8745 14.6248C10.6756 14.6248 10.4848 14.5457 10.3441 14.4051C10.2035 14.2644 10.1245 14.0737 10.1245 13.8748V11.6248H7.87448C7.67556 11.6248 7.4848 11.5457 7.34415 11.4051C7.20349 11.2644 7.12448 11.0737 7.12448 10.8748C7.12448 10.6758 7.20349 10.4851 7.34415 10.3444C7.4848 10.2038 7.67556 10.1248 7.87448 10.1248H10.1245V7.87475C10.1245 7.67584 10.2035 7.48507 10.3441 7.34442C10.4848 7.20377 10.6756 7.12475 10.8745 7.12475C11.0734 7.12475 11.2642 7.20377 11.4048 7.34442C11.5455 7.48507 11.6245 7.67584 11.6245 7.87475V10.1248H13.8745C14.0734 10.1248 14.2642 10.2038 14.4048 10.3444C14.5455 10.4851 14.6245 10.6758 14.6245 10.8748C14.6245 11.0737 14.5455 11.2644 14.4048 11.4051C14.2642 11.5457 14.0734 11.6248 13.8745 11.6248Z" fill="#EBEBEC" />
                            </svg>
                        </div>
                    </div>
                </div>





                <div className={styles.ReviewInvoicePage1Box2Right}>
                    {EmptyDataCount > 0 ?
                        <div className={styles.alertMessage}><div className={styles.alerttest}>{EmptyDataCount} fields missing data. Add details to continue.</div></div> : ""
                    }
                    <div className={styles.kitinv}>
                        <div className={styles.rectangleParent}>
                            <div className={styles.frameChild} />
                            <b className={styles.vendorDetails}>User input required</b>
                        </div>
                        <div className={styles.frameParent}>
                            <div className={styles.inputFieldParent}>
                                {renderInputField('NumberOfKitsInInventory', 'Number of Kits in inventory', 'Enter')}
                                {renderInputField('NumberOfKitsActuallyReceived', 'Kits actually received', 'Enter')}

                            </div>

                        </div>


                        {/* 222 */}
                        <div className={styles.rectangleParent}>
                            <div className={styles.frameChild} />
                            <b className={styles.vendorDetails}>Identification</b>
                        </div>
                        <div className={styles.frameParent}>
                            <div className={styles.inputFieldParent}>
                                {renderInputField('LabID', 'Lab ID', 'Enter')}
                                {renderInputField('UserID', 'User ID', 'Enter')}

                            </div>

                        </div>

                        {/* 33333 */}
                        <div className={styles.rectangleParent}>
                            <div className={styles.frameChild} />
                            <b className={styles.vendorDetails}>Invoice details</b>
                        </div>
                        <div className={styles.frameParent}>
                            <div className={styles.inputFieldParent}>
                                {renderInputField('InvoiceNumber', 'Invoice number', 'Enter')}
                                {renderInputField('InvoiceDate', 'Invoice Date', 'Enter')}
                                {renderInputField('DeliveryDate', 'Delivery date', 'Enter')}

                            </div>

                        </div>
                        {/* 4444 */}
                        <div className={styles.rectangleParent}>
                            <div className={styles.frameChild} />
                            <b className={styles.vendorDetails}>Transaction details</b>
                        </div>
                        <div className={styles.frameContainer}>

                            <Table />

                        </div>
                    </div>
                </div>
            </div>


            {
                    cancleInvoice ?
                        <div className={styles.cancelCreateEnteryPopUp}>
                            <div className={styles.cancelCreateEnteryPopUpLayout}>
                                <div className={styles.cancelCreateEnteryPopUpLine1} >
                                    <div> Discard invoice ?</div>
                                    <svg onClick={handelCancle} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4.1665 4.16663L9.99984 9.99996M15.8332 15.8333L9.99984 9.99996M9.99984 9.99996L15.8332 4.16663L4.1665 15.8333" stroke="#181B1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className={styles.cancelCreateEnteryPopUpLine2}>This action cant be undone.</div>
                                <div className={styles.cancelCreateEnteryPopUpLine3} >
                                    <div onClick={onClick} className={styles.cancelCreateEnteryPopUpLine3Exit}> Discard  </div>
                                    <div onClick={handelCancle} className={styles.cancelCreateEnteryPopUpLine3Cancle}>Cancle</div>
                                </div>
                            </div>
                        </div>
                        : ""
                }
        </div>
    );
};

export default ReviewInvoicePage2;
