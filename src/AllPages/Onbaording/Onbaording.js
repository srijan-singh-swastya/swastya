import React, { useState, useEffect, useCallback } from 'react';
import styles from './Onbaording.module.css';
import { useNavigate } from 'react-router-dom';
import DiscountOnbord from './DiscountOnbord/DiscountOnbord/DiscountOnbord';
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux';

const PlanOptions = ["Basic Plan", "Premium Plan", "Enterprise Plan"];
const Onbaording = () => {
    const discounts = useSelector((state) => state.newAddedCoupan);
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [labDetaisFilled, setLabDetailsFilled] = useState(false)


    const data = [
        {
            "id": 1,
            "labId": 104,
            "userId": "sat104",
            "vendorName": "satish",
            "vendorGST": "SDFFD434",
            "vendorBank": "SBI",
            "labName": "Dpharma",
            "invoiceNumber": "pkFGFGH",
            "invoiceDate": "12 march",
            "deliveryDate": "12 er",
            "itemDescription": "i dont know",
            "AWB": 240,
            "HSN": "ABC123",
            "GSTRate": 18,
            "CGSTRate": 9,
            "SGSTRate": 9,
            "IGSTRate": 0,
            "Discount": 50,
            "Quantity": 10,
            "FinalAmount": 4500,
            "KitsReceived": 8,
            "Amount": 4000
        },
        {
            "id": 2,
            "labId": 105,
            "userId": "john101",
            "vendorName": "john",
            "vendorGST": "ABCDE123",
            "vendorBank": "HDFC",
            "labName": "Pharmacy",
            "invoiceNumber": "abcXYZ",
            "invoiceDate": "15 March",
            "deliveryDate": "20 er",
            "itemDescription": "Testing items",
            "AWB": 245,
            "HSN": "XYZ456",
            "GSTRate": 12,
            "CGSTRate": 6,
            "SGSTRate": 6,
            "IGSTRate": 0,
            "Discount": 40,
            "Quantity": 15,
            "FinalAmount": 6000,
            "KitsReceived": 12,
            "Amount": 5500
        }
        // Add more data objects as needed
    ];
    const [formData, setFormData] = useState({
        labName: '',
        labAddress: '',
        pincode: '',
        pointOfContact: '',
        labId: '',
        selectPlan: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    };
    function areAllPropertiesFilled(data) {
        for (const key in data) {
            if (data[key] === "") {
                setLabDetailsFilled(false); // If any property is empty or falsy, return false
                return
            }
        }
        setLabDetailsFilled(true) // All properties have values
    }

    useEffect(() => {
        // Call the function when the data object changes
        areAllPropertiesFilled(formData);
    }, [formData]);



    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        setStep(step + 1);
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const isStepCompleted = (stepNumber) => {
        // const stepData = data[`step${stepNumber}`];
        if (stepNumber === 1 && step >= 1) {
            //   return stepData.name && stepData.email;
            return true;
        } else if (stepNumber === 2 && step >= 2) {
            //   return stepData.address && stepData.city;
            return true
        } else if (stepNumber === 3 && step >= 3) {
            // return stepData.interests;
            return true
        } else if (stepNumber === 4 && step >= 4) {
            // return stepData.review;
            return true
        }
    };
    const isCircleStepCompleted = (stepNumber) => {
        // const stepData = data[`step${stepNumber}`];
        if (stepNumber === 1 && step > 1) {
            //   return stepData.name && stepData.email;
            return true;
        } else if (stepNumber === 2 && step > 2) {
            //   return stepData.address && stepData.city;
            return true
        } else if (stepNumber === 3 && step > 3) {
            // return stepData.interests;
            return true
        } else if (stepNumber === 4 && step > 4) {
            // return stepData.review;
            return true
        }
    };

    // Add test price list and report letterhead
    const [reportLetterhead, setReportLetterhead] = useState(false)
    const [testAndPrice, setTestAndPrice] = useState(false)
    const [reportLetterheadData, setReportLetterHeadData] = useState(null)
    const [previewReportLetterhead, setPreviewReportLetterhead] = useState(false)
    const [previewTestAndPriceList, setPreviewTestAndPriceList] = useState(false)

    const handleReportLetterFileInput = useCallback(() => {
        const fileInput = document.getElementById('reportLetterheadfileInput');
        fileInput.click();
    }, []);
    const handleReportLetterFileUpload = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setReportLetterhead(true)
            setReportLetterHeadData(selectedFile)
        }
    }
    const handledeleteReportLetter = () => {
        setReportLetterhead(false)
        setReportLetterHeadData("")
    }
    const handelReportLetterheadPrivew = () => {
        setPreviewReportLetterhead(true)
    }
    const handleCancleReportLetterheadPreview = () => {
        setPreviewReportLetterhead(false)
    }


    const handleTestAndPriceFileInput = useCallback(() => {
        const fileInput = document.getElementById('testAndPricefileInput');
        fileInput.click();
    }, []);
    const handleTestAndPriceFileUpload = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setTestAndPrice(true)
        }
    }
    const handledeleteTestandPrice = () => {
        setTestAndPrice(false)
    }
    const handleTestAndPricePreview = () => {
        setPreviewTestAndPriceList(true)
    }
    const handleCancleTestAndPricePreview = () => {
        setPreviewTestAndPriceList(false)
    }




    const [techniciansDetailFilled, setTechniciansDetailFilled] = useState(false)
    const [technicians, setTechnicians] = useState([
        {
            name: '',
            phoneNumber: '',
            role: '',
        },
    ]);

    const addTechnician = () => {
        setTechnicians([...technicians, { name: '', phoneNumber: '', role: '' }]);
    };

    const removeTechnician = (index) => {
        const updatedTechnicians = [...technicians];
        updatedTechnicians.splice(index, 1);
        setTechnicians(updatedTechnicians);
    };

    const handleChanges = (index, e) => {
        const { name, value } = e.target;
        const updatedTechnicians = [...technicians];
        updatedTechnicians[index][name] = value;
        setTechnicians(updatedTechnicians);
    };
    function areAllTechnicianDetailsFilled(dataArray) {
        for (const person of dataArray) {
            for (const key in person) {
                if (person[key] === "") {
                    setTechniciansDetailFilled(false); // If any property is empty, set peopleDetailsFilled to false
                    return;
                }
            }
        }
        setTechniciansDetailFilled(true); // All properties have values, set peopleDetailsFilled to true
    }

    useEffect(() => {
        // Call the function when the technicians array changes
        areAllTechnicianDetailsFilled(technicians);
    }, [technicians]);

    // Function to transform each discount object
    function transformDiscount(discount) {
        return {
            name: discount.coupon,
            percent: discount.discount,
            count: discount.numberOfCoupons,
            recurrence: discount.recurrence,
            startTime: {
                iso8601: discount.discountStartDate // Modify this based on your initial data
            },
            endTime: {
                iso8601: discount.discountExpiryDate // Modify this based on your initial data
            }
            // Add other properties as needed
        };
    }
    const handleSubmits = async (e) => {
        // Mapping the initial data to the desired format
        const formattedDiscounts = discounts.map(transformDiscount);
        e.preventDefault();
        const labInfo = {
            "lab": {
                "name": formData.labName,
                "localId": formData.labId,
                "address": formData.labAddress,
                "pinCode": formData.pincode,
                "poc": formData.pointOfContact,
                "plan": formData.selectPlan,
            },
            "employees": technicians,
            "discounts": formattedDiscounts
        };
        try {
            // Making a POST request to the onboard endpoint
            const res = await axios.post(`http://localhost:8090/first/v1/onboard-lab`, labInfo)

            // Setting the value
            localStorage.setItem('labId', res.data.labId);
            console.log(labInfo)


            console.log(res.data.labId)
            navigate("/dashbord")
        }
        catch (err) {
            // Handling errors and displaying the error message from the server
            console.log(err)

        }

        console.log(labInfo);

        navigate("/dashbord")
    };

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className={styles.multiformLayout}>
            {/* <h1 className={styles.formTitle}>Multi-Step Form</h1> */}
            <div className={styles.stepsContainer}>
                {[1, 2, 3, 4].map((stepNumber) => (
                    <div
                        key={stepNumber}
                        className={` ${isCircleStepCompleted(stepNumber) ? styles.stepCircle : styles.stepCircle1}    ${isStepCompleted(stepNumber) ? styles.stepCompleted : ''}`}
                        onClick={() => setStep(stepNumber)}
                    >
                        {stepNumber >= stepNumber ? < svg className={`$ ${isStepCompleted(stepNumber + 1) ? "    " : styles.stepCompleted1}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#00A96C" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L11.7071 14.7071C11.3166 15.0976 10.6834 15.0976 10.2929 14.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="#00A96C" />
                        </svg>
                            : ""}Step{stepNumber}

                    </div>

                ))}
            </div>
            {step === 1 && (
                <div className={styles.stepContent}>
                    <h2 className={styles.heading}>Add lab details</h2>
                    <form className={styles.formContainerForm} onSubmit={handleSubmit}>
                        <div className={styles.formContainer}>
                            <div className={styles.formField}>
                                <label htmlFor="labName" className={styles.label}>Lab Name:</label>
                                <input

                                    type="text"
                                    id="labName"
                                    name="labName"
                                    placeholder='Enter Lab Name'
                                    value={formData.labName}
                                    onChange={handleChange}
                                    className={styles.inputField}
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="labAddress" className={styles.label}>Lab Address:</label>
                                <input

                                    type="text"
                                    id="labAddress"
                                    name="labAddress"
                                    placeholder='Enter Lab Address'
                                    value={formData.labAddress}
                                    onChange={handleChange}
                                    className={styles.inputField}
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="pincode" className={styles.label}>Pin Code:</label>
                                <input

                                    type="text"
                                    id="pincode"
                                    name="pincode"
                                    placeholder='Enter pin Code'
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    className={styles.inputField}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.formContainer}>
                            <div className={styles.formField}>
                                <label htmlFor="pointOfContact" className={styles.label}>Point Of Contact :</label>
                                <input

                                    type="text"
                                    id="pointOfContact"
                                    name="pointOfContact"
                                    placeholder='Enter Name'
                                    value={formData.pointOfContact}
                                    onChange={handleChange}
                                    className={styles.inputField}
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="labId" className={styles.label}>Lab Id:</label>
                                <input

                                    type="text"
                                    id="labId"
                                    name="labId"
                                    placeholder='Enter Lab Id'
                                    value={formData.labId}
                                    onChange={handleChange}
                                    className={styles.inputField}
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="selectPlan" className={styles.label}>Select Plan:</label>
                                <select
                                    id="selectPlan"
                                    name="selectPlan"
                                    value={formData.selectPlan}
                                    onChange={handleChange}
                                    className={styles.inputFieldSelectPlan}
                                    required
                                >
                                    <option className={styles.optionsLayout} value="">Select Plan</option>
                                    {PlanOptions.map((plan, index) => (
                                        <option className={styles.optionsLayout} key={index} value={plan}>
                                            {plan}

                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>
                        <div className={styles.buttonContainer}>
                            {step < 4 && (
                                <button className={labDetaisFilled ? styles.buttonYes : styles.button} type="submit">Next <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4.16699 10H15.8337M15.8337 10L10.8337 5M15.8337 10L10.8337 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></button>
                            )}
                            {step > 1 && (
                                <button className={styles.button} onClick={handlePreviousStep}>Previous</button>
                            )}
                        </div>
                        {/* <button className={styles.submitButton} type="submit">Next</button> */}
                    </form>

                </div>

            )}
            {step === 2 && (
                <div className={styles.stepContent}>
                    <h2 className={styles.heading}> <svg onClick={handlePreviousStep} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M25.3346 16.0013H6.66797M6.66797 16.0013L16.0013 25.3346M6.66797 16.0013L16.0013 6.66797" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>Add Lab Technician</h2>
                    <div className={styles.technicianDetailLayout}>
                        <div className={styles.technicianHeader}>
                            <div className={styles.technicianDetails}>
                                <label className={styles.TechnicianDetailsHeader}>Technician Name</label>

                            </div>
                            <div className={styles.technicianDetails}>
                                <label className={styles.TechnicianDetailsHeader}>Phone Number</label>

                            </div>
                            <div className={styles.technicianDetails}>
                                <label className={styles.TechnicianDetailsHeader}>Technician Role</label>

                            </div>
                            <div className={styles.technicianDetailsIcon}>
                                <label></label>

                            </div>

                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.technicianDetailsLayout}>
                                {technicians.map((technician, index) => (
                                    <div key={index} className={styles.technicianRow}>
                                        <div className={styles.technicianDetails}>
                                            <input

                                                type="text"
                                                name="name"
                                                className={styles.inputField}
                                                placeholder='Enter Technician Name'
                                                value={technician.name}
                                                onChange={(e) => handleChanges(index, e)}
                                                required
                                            />
                                        </div>
                                        <div className={styles.technicianDetails}>

                                            <input

                                                type="text"
                                                name="phoneNumber"
                                                className={styles.inputField}
                                                placeholder='Enter Phone Number'
                                                value={technician.phoneNumber}
                                                onChange={(e) => handleChanges(index, e)}
                                                required
                                            />
                                        </div>
                                        <div className={styles.technicianDetails}>

                                            <select
                                                name="role"
                                                className={styles.inputField}
                                                value={technician.role}
                                                onChange={(e) => handleChanges(index, e)}
                                                required
                                            >
                                                <option className={styles.optionsLayout} value="">Select Technician Role</option>
                                                <option className={styles.optionsLayout} value="Technician">Technician</option>
                                                <option className={styles.optionsLayout} value="Doctor">Doctor</option>
                                                <option className={styles.optionsLayout} value="Senior Doctor">Senior Doctor</option>
                                            </select>
                                        </div>
                                        {index === 0 && (
                                            <div className={styles.technicianDetailsIcon}>



                                            </div>
                                        )}
                                        {index > 0 && (
                                            <div className={styles.technicianDetailsIcon}>


                                                <svg className={styles.cancelButton} onClick={() => removeTechnician(index)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div className={styles.addNewRow} onClick={addTechnician}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0002 5.83398C10.4604 5.83398 10.8335 6.20708 10.8335 6.66732V9.16732H13.3335C13.7937 9.16732 14.1668 9.54041 14.1668 10.0007C14.1668 10.4609 13.7937 10.834 13.3335 10.834H10.8335V13.334C10.8335 13.7942 10.4604 14.1673 10.0002 14.1673C9.53993 14.1673 9.16683 13.7942 9.16683 13.334V10.834H6.66683C6.20659 10.834 5.8335 10.4609 5.8335 10.0007C5.8335 9.54041 6.20659 9.16732 6.66683 9.16732H9.16683V6.66732C9.16683 6.20708 9.53993 5.83398 10.0002 5.83398Z" fill="#0067DF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.63099 2.5H11.369C12.2722 2.49999 13.0006 2.49999 13.5905 2.54818C14.1979 2.59781 14.7314 2.70265 15.225 2.95414C16.009 3.35361 16.6464 3.99103 17.0459 4.77504C17.2974 5.26862 17.4022 5.80211 17.4518 6.40948C17.5 6.99938 17.5 7.72783 17.5 8.63097V11.369C17.5 12.2722 17.5 13.0006 17.4518 13.5905C17.4022 14.1979 17.2974 14.7314 17.0459 15.225C16.6464 16.009 16.009 16.6464 15.225 17.0459C14.7314 17.2974 14.1979 17.4022 13.5905 17.4518C13.0006 17.5 12.2722 17.5 11.369 17.5H8.63097C7.72783 17.5 6.99937 17.5 6.40948 17.4518C5.80211 17.4022 5.26862 17.2974 4.77504 17.0459C3.99103 16.6464 3.35361 16.009 2.95414 15.225C2.70265 14.7314 2.59781 14.1979 2.54818 13.5905C2.49999 13.0006 2.49999 12.2722 2.5 11.369V8.63099C2.49999 7.72784 2.49999 6.99938 2.54818 6.40948C2.59781 5.80211 2.70265 5.26862 2.95414 4.77504C3.35361 3.99103 3.99103 3.35361 4.77504 2.95414C5.26862 2.70265 5.80211 2.59781 6.40948 2.54818C6.99938 2.49999 7.72784 2.49999 8.63099 2.5ZM6.5452 4.20931C6.04089 4.25052 5.75115 4.32733 5.53169 4.43915C5.06129 4.67883 4.67883 5.06129 4.43915 5.53169C4.32733 5.75115 4.25052 6.04089 4.20931 6.5452C4.16732 7.05923 4.16667 7.7195 4.16667 8.66667V11.3333C4.16667 12.2805 4.16732 12.9408 4.20931 13.4548C4.25052 13.9591 4.32733 14.2488 4.43915 14.4683C4.67883 14.9387 5.06129 15.3212 5.53169 15.5608C5.75115 15.6727 6.04089 15.7495 6.5452 15.7907C7.05923 15.8327 7.7195 15.8333 8.66667 15.8333H11.3333C12.2805 15.8333 12.9408 15.8327 13.4548 15.7907C13.9591 15.7495 14.2488 15.6727 14.4683 15.5608C14.9387 15.3212 15.3212 14.9387 15.5608 14.4683C15.6727 14.2488 15.7495 13.9591 15.7907 13.4548C15.8327 12.9408 15.8333 12.2805 15.8333 11.3333V8.66667C15.8333 7.7195 15.8327 7.05923 15.7907 6.5452C15.7495 6.04089 15.6727 5.75115 15.5608 5.53169C15.3212 5.06129 14.9387 4.67883 14.4683 4.43915C14.2488 4.32733 13.9591 4.25052 13.4548 4.20931C12.9408 4.16732 12.2805 4.16667 11.3333 4.16667H8.66667C7.7195 4.16667 7.05923 4.16732 6.5452 4.20931Z" fill="#0067DF" />
                                    </svg>Add New Row</div>
                            </div>
                            <div className={styles.buttonContainer}>
                                {step < 4 && (
                                    <button className={techniciansDetailFilled ? styles.buttonYes : styles.button} type="submit">
                                        Next
                                    </button>
                                )}
                                {/* {step > 1 && (
                                    <button className={styles.button} onClick={handlePreviousStep}>
                                        Previous
                                    </button>
                                )} */}
                            </div>
                        </form>

                    </div>

                </div>
            )}
            {step === 3 && (
                <div className={styles.stepContent}>
                    <h2 className={styles.heading}><svg onClick={handlePreviousStep} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M25.3346 16.0013H6.66797M6.66797 16.0013L16.0013 25.3346M6.66797 16.0013L16.0013 6.66797" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>Add test price list and report letterhead</h2>

                    <div className={styles.stepPriceandreportLay} >
                        {testAndPrice ?
                            <div className={styles.stepPriceandreportTop}>
                                <div className={styles.stepPriceandreportIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H12C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7H8ZM9 12C9 11.4477 9.44772 11 10 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H10C9.44772 13 9 12.5523 9 12ZM11 16C11 15.4477 11.4477 15 12 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H12C11.4477 17 11 16.5523 11 16Z" fill="#181B1F" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3572 3H13.6428C14.7266 2.99999 15.6007 2.99998 16.3086 3.05782C17.0375 3.11737 17.6777 3.24318 18.27 3.54497C19.2108 4.02433 19.9757 4.78924 20.455 5.73005C20.7568 6.32234 20.8826 6.96253 20.9422 7.69138C21 8.39925 21 9.27339 21 10.3572V13.6428C21 14.7266 21 15.6008 20.9422 16.3086C20.8826 17.0375 20.7568 17.6777 20.455 18.27C19.9757 19.2108 19.2108 19.9757 18.27 20.455C17.6777 20.7568 17.0375 20.8826 16.3086 20.9422C15.6008 21 14.7266 21 13.6428 21H10.3572C9.27339 21 8.39925 21 7.69138 20.9422C6.96253 20.8826 6.32234 20.7568 5.73005 20.455C4.78924 19.9757 4.02433 19.2108 3.54497 18.27C3.24318 17.6777 3.11737 17.0375 3.05782 16.3086C2.99998 15.6007 2.99999 14.7266 3 13.6428V10.3572C2.99999 9.27341 2.99998 8.39926 3.05782 7.69138C3.11737 6.96253 3.24318 6.32234 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.32234 3.24318 6.96253 3.11737 7.69138 3.05782C8.39926 2.99998 9.27341 2.99999 10.3572 3ZM7.85424 5.05118C7.24907 5.10062 6.90138 5.19279 6.63803 5.32698C6.07354 5.6146 5.6146 6.07354 5.32698 6.63803C5.19279 6.90138 5.10062 7.24907 5.05118 7.85424C5.00078 8.47108 5 9.26339 5 10.4V13.6C5 14.7366 5.00078 15.5289 5.05118 16.1458C5.10062 16.7509 5.19279 17.0986 5.32698 17.362C5.6146 17.9265 6.07354 18.3854 6.63803 18.673C6.90138 18.8072 7.24907 18.8994 7.85424 18.9488C8.47108 18.9992 9.26339 19 10.4 19H13.6C14.7366 19 15.5289 18.9992 16.1458 18.9488C16.7509 18.8994 17.0986 18.8072 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C18.8072 17.0986 18.8994 16.7509 18.9488 16.1458C18.9992 15.5289 19 14.7366 19 13.6V10.4C19 9.26339 18.9992 8.47108 18.9488 7.85424C18.8994 7.24907 18.8072 6.90138 18.673 6.63803C18.3854 6.07354 17.9265 5.6146 17.362 5.32698C17.0986 5.19279 16.7509 5.10062 16.1458 5.05118C15.5289 5.00078 14.7366 5 13.6 5H10.4C9.26339 5 8.47108 5.00078 7.85424 5.05118Z" fill="#181B1F" />
                                    </svg>
                                </div>
                                <div className={styles.stepPriceandreporttext1}>Test and price list</div>
                                <div className={styles.uploadedwithicon}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#00A96C" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L11.7071 14.7071C11.3166 15.0976 10.6834 15.0976 10.2929 14.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="#00A96C" />
                                </svg>Uploaded</div>

                                <div onClick={handleTestAndPricePreview} className={styles.stepPriceandreporttext3}>Preview</div>
                                <div onClick={handledeleteTestandPrice} className={styles.deleteAndUpload}>Delete and upload again</div>

                            </div>
                            :
                            <div className={styles.stepPriceandreportTop}>
                                <div className={styles.stepPriceandreportIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H12C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7H8ZM9 12C9 11.4477 9.44772 11 10 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H10C9.44772 13 9 12.5523 9 12ZM11 16C11 15.4477 11.4477 15 12 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H12C11.4477 17 11 16.5523 11 16Z" fill="#181B1F" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3572 3H13.6428C14.7266 2.99999 15.6007 2.99998 16.3086 3.05782C17.0375 3.11737 17.6777 3.24318 18.27 3.54497C19.2108 4.02433 19.9757 4.78924 20.455 5.73005C20.7568 6.32234 20.8826 6.96253 20.9422 7.69138C21 8.39925 21 9.27339 21 10.3572V13.6428C21 14.7266 21 15.6008 20.9422 16.3086C20.8826 17.0375 20.7568 17.6777 20.455 18.27C19.9757 19.2108 19.2108 19.9757 18.27 20.455C17.6777 20.7568 17.0375 20.8826 16.3086 20.9422C15.6008 21 14.7266 21 13.6428 21H10.3572C9.27339 21 8.39925 21 7.69138 20.9422C6.96253 20.8826 6.32234 20.7568 5.73005 20.455C4.78924 19.9757 4.02433 19.2108 3.54497 18.27C3.24318 17.6777 3.11737 17.0375 3.05782 16.3086C2.99998 15.6007 2.99999 14.7266 3 13.6428V10.3572C2.99999 9.27341 2.99998 8.39926 3.05782 7.69138C3.11737 6.96253 3.24318 6.32234 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.32234 3.24318 6.96253 3.11737 7.69138 3.05782C8.39926 2.99998 9.27341 2.99999 10.3572 3ZM7.85424 5.05118C7.24907 5.10062 6.90138 5.19279 6.63803 5.32698C6.07354 5.6146 5.6146 6.07354 5.32698 6.63803C5.19279 6.90138 5.10062 7.24907 5.05118 7.85424C5.00078 8.47108 5 9.26339 5 10.4V13.6C5 14.7366 5.00078 15.5289 5.05118 16.1458C5.10062 16.7509 5.19279 17.0986 5.32698 17.362C5.6146 17.9265 6.07354 18.3854 6.63803 18.673C6.90138 18.8072 7.24907 18.8994 7.85424 18.9488C8.47108 18.9992 9.26339 19 10.4 19H13.6C14.7366 19 15.5289 18.9992 16.1458 18.9488C16.7509 18.8994 17.0986 18.8072 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C18.8072 17.0986 18.8994 16.7509 18.9488 16.1458C18.9992 15.5289 19 14.7366 19 13.6V10.4C19 9.26339 18.9992 8.47108 18.9488 7.85424C18.8994 7.24907 18.8072 6.90138 18.673 6.63803C18.3854 6.07354 17.9265 5.6146 17.362 5.32698C17.0986 5.19279 16.7509 5.10062 16.1458 5.05118C15.5289 5.00078 14.7366 5 13.6 5H10.4C9.26339 5 8.47108 5.00078 7.85424 5.05118Z" fill="#181B1F" />
                                    </svg>
                                </div>
                                <div className={styles.stepPriceandreporttext1}>Test and price list</div>
                                <div className={styles.stepPriceandreporttext2}>Download sample</div>
                                <div onClick={handleTestAndPriceFileInput} className={styles.stepPriceandreporttext3}>Upload</div>
                                <input
                                    type="file"
                                    id="testAndPricefileInput"
                                    ccept=".pdf,.png"
                                    onChange={handleTestAndPriceFileUpload}
                                    style={{ display: 'none' }}
                                />
                            </div>
                        }
                        {reportLetterhead ?
                            <div className={styles.stepPriceandreportTop}>
                                <div className={styles.stepPriceandreportIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 6H19M7 3H17M5 21H19C20.1046 21 21 20.1046 21 19V11C21 9.89543 20.1046 9 19 9H5C3.89543 9 3 9.89543 3 11V19C3 20.1046 3.89543 21 5 21Z" stroke="#181B1F" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </div>
                                <div className={styles.stepPriceandreporttext1}>Report letterhead</div>
                                <div className={styles.uploadedwithicon}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#00A96C" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L11.7071 14.7071C11.3166 15.0976 10.6834 15.0976 10.2929 14.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="#00A96C" />
                                </svg>Uploaded
                                </div>

                                <div onClick={handelReportLetterheadPrivew} className={styles.stepPriceandreporttext3}>Preview</div>
                                <div onClick={handledeleteReportLetter} className={styles.deleteAndUpload}>Delete and upload again</div>

                            </div>
                            :
                            <div className={styles.stepPriceandreportTop}>
                                <div className={styles.stepPriceandreportIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 6H19M7 3H17M5 21H19C20.1046 21 21 20.1046 21 19V11C21 9.89543 20.1046 9 19 9H5C3.89543 9 3 9.89543 3 11V19C3 20.1046 3.89543 21 5 21Z" stroke="#181B1F" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </div>
                                <div className={styles.stepPriceandreporttext1}>Report letterhead</div>
                                {/* <div className={styles.stepPriceandreporttext2}>Download sample</div> */}
                                <div onClick={handleReportLetterFileInput} className={styles.stepPriceandreporttext3}>Upload</div>
                                <input
                                    type="file"
                                    id="reportLetterheadfileInput"
                                    ccept=".jpg,.png"
                                    onChange={handleReportLetterFileUpload}
                                    style={{ display: 'none' }}
                                />
                            </div>
                        }
                        {previewTestAndPriceList && (
                            <div className={styles.previewReportLetterheadPopUp}>
                                <div className={styles.previewTestAndPriceListPopUpContainer}>
                                    <div className={styles.TestAndPriceListPopUpTop}>
                                        <div className={styles.TestAndPriceListPopUpToptext1}>Test and price list</div>
                                        <div className={styles.TestAndPriceListPopUpToptext2}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M4.5833 12.1686V15.5019M4.5833 12.1686C5.44409 14.316 7.54492 15.8327 9.99997 15.8327C12.6425 15.8327 14.8746 14.0756 15.5917 11.666M4.5833 12.1686H7.91663M15.5218 8.11361L15.5218 4.78028M15.5218 8.11361H12.1884M15.5218 8.11361C14.7378 5.81735 12.5617 4.16602 9.99997 4.16602C7.35745 4.16602 5.12533 5.92311 4.4082 8.33268" stroke="#CFD0D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Undo change</div>
                                        <div className={styles.TestAndPriceListPopUpToptext3}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M3.3335 17.4993C3.3335 17.0391 3.70659 16.666 4.16683 16.666H15.8335C16.2937 16.666 16.6668 17.0391 16.6668 17.4993C16.6668 17.9596 16.2937 18.3327 15.8335 18.3327H4.16683C3.70659 18.3327 3.3335 17.9596 3.3335 17.4993Z" fill="#0067DF" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.343 2.64427C11.6448 1.34253 13.7553 1.34254 15.0571 2.64428L15.6882 3.27541C16.9899 4.57716 16.9899 6.68771 15.6882 7.98946L9.93311 13.7445C9.70192 13.9757 9.40783 14.1338 9.08746 14.1991L5.33447 14.964C4.16401 15.2026 3.12999 14.1686 3.36852 12.9981L4.13336 9.24502C4.19865 8.92463 4.35674 8.63052 4.58795 8.39931L10.343 2.64427ZM13.8785 3.82279C13.2277 3.17192 12.1724 3.17192 11.5215 3.82279L11.1785 4.16582L14.1666 7.15398L14.5097 6.81095C15.1606 6.16007 15.1606 5.10479 14.5097 4.45392L13.8785 3.82279ZM7.01181 8.33248L9.99998 5.34433L12.9881 8.33248L9.99997 11.3206L7.01181 8.33248ZM5.8333 9.51099L5.76646 9.57783L5.00162 13.3309L8.7546 12.566L8.82145 12.4991L5.8333 9.51099Z" fill="white" />
                                        </svg>
                                            Edit</div>
                                        <div onClick={handleCancleTestAndPricePreview} className={styles.TestAndPriceListPopUpTop}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>


                                    </div>

                                    <div className={styles.tableLayout}>
                                        <div className={styles.detailsTable}>
                                            <div className={styles.detailsTableHeader}>

                                                <div className={styles.boxSizeHalf}>##</div>
                                                <div className={styles.boxSize6}>TestId</div>
                                                <div className={styles.boxSize6}>Test name</div>
                                                <div className={styles.boxSize6a}>Cost (₹)</div>



                                            </div>
                                            {data.map((entry, index) => (
                                                <div className={styles.detailsTableData} key={entry.id}>

                                                    <div className={styles.boxSizeHalf}>{entry.id}</div>
                                                    <div className={styles.boxSize6}>{entry.labId}</div>
                                                    <div className={styles.boxSize6}>{entry.userId}</div>
                                                    <div className={styles.boxSize6a}>{entry.vendorName}</div>




                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}
                        {previewReportLetterhead && (
                            <div onClick={handleCancleReportLetterheadPreview} className={styles.previewReportLetterheadPopUp}>
                                <div className={styles.previewReportLetterheadPopUpContainer}>
                                    <img className={styles.reportLetterheadPreviewImage} src={URL.createObjectURL(reportLetterheadData)} />
                                </div>
                            </div>
                        )}

                    </div>
                    <div className={styles.buttonContainer}>
                        {step < 4 && (
                            <button className={styles.buttonYes} onClick={handleNextStep} type="submit">
                                Next
                            </button>
                        )}
                        {/* {step > 1 && (
                            <button className={styles.button} onClick={handlePreviousStep}>
                                Previous
                            </button>
                        )} */}
                    </div>
                    {/* Input fields for Step 3 */}
                </div>
            )}
            {/* ******************************Discount****************************************** */}
            {step === 4 && (
                <div className={styles.stepContent}>
                    <DiscountOnbord onClick={handlePreviousStep} />

                    <div className={styles.buttonContainer}>
                        {step <= 4 && (
                            <button className={styles.buttonToDahbord} onClick={handleSubmits} type="submit">
                                Continue to Dashbord
                            </button>
                        )}
                        {/* {step > 1 && (
                            <button className={styles.button} onClick={handlePreviousStep}>
                                Previous
                            </button>
                        )} */}
                    </div>
                    {/* Input fields for Step 3 */}
                </div>
            )}

        </div>
    );
};

export default Onbaording;
