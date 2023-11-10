import React, { useState, useEffect } from 'react';
import styles from './Onbaording.module.css';
import { useNavigate } from 'react-router-dom';
import Discount from '../Settings/Discount/Discount';
import axios from "axios"
const PlanOptions = ["Basic Plan", "Premium Plan", "Enterprise Plan"];
const Onbaording = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [labDetaisFilled, setLabDetailsFilled] = useState(false)
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
            console.log(data[key])
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




    console.log(labDetaisFilled)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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


const [techniciansDetailFilled,setTechniciansDetailFilled]=useState(false)
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

    const handleSubmits = async (e) => {

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
            employees: [
                { ...technicians }
            ]
        };
        try {
            // Making a POST request to the signup endpoint
            const res = await axios.post(`http://localhost:8080/first/v1/onboard-lab/`, labInfo)
            navigate("/dashbord")
            console.log(res.data)
        }
        catch (err) {
            // Handling errors and displaying the error message from the server
            console.log(err)
            // setMessage(err.response.data)
        }

        console.log(labInfo);

        navigate("/dashbord")
    };
    const discountData = [
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
            coupon: "SPC31110",
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
    ];
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
                        className={`${styles.stepCircle} ${isStepCompleted(stepNumber) ? styles.stepCompleted : ''}`}
                        onClick={() => setStep(stepNumber)}
                    >
                        Step{stepNumber}

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
                                                <option value="">Select Technician Role</option>
                                                <option value="Role A">Role A</option>
                                                <option value="Role B">Role B</option>
                                                <option value="Role C">Role C</option>
                                            </select>
                                        </div>
                                        {index === 0 && (
                                            <div className={styles.technicianDetailsIcon}>



                                            </div>
                                        )}
                                        {index > 0 && (
                                            <div className={styles.technicianDetailsIcon}>

                                                <svg className={styles.cancelButton} onClick={() => removeTechnician(index)} xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83317 7.1665V15.4998C5.83317 16.4203 6.57936 17.1665 7.49984 17.1665H12.4998C13.4203 17.1665 14.1665 16.4203 14.1665 15.4998V7.1665H15.8332V15.4998C15.8332 17.3408 14.3408 18.8332 12.4998 18.8332H7.49984C5.65889 18.8332 4.1665 17.3408 4.1665 15.4998V7.1665H5.83317Z" fill="#4A5055" />
                                                    <path d="M8.33333 9.6665C7.8731 9.6665 7.5 10.0396 7.5 10.4998V13.8332C7.5 14.2934 7.8731 14.6665 8.33333 14.6665C8.79357 14.6665 9.16667 14.2934 9.16667 13.8332V10.4998C9.16667 10.0396 8.79357 9.6665 8.33333 9.6665Z" fill="#4A5055" />
                                                    <path d="M11.6667 9.6665C11.2064 9.6665 10.8333 10.0396 10.8333 10.4998V13.8332C10.8333 14.2934 11.2064 14.6665 11.6667 14.6665C12.1269 14.6665 12.5 14.2934 12.5 13.8332V10.4998C12.5 10.0396 12.1269 9.6665 11.6667 9.6665Z" fill="#4A5055" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66683 5.49984V4.6665C6.66683 3.28579 7.78612 2.1665 9.16683 2.1665H10.8335C12.2142 2.1665 13.3335 3.28579 13.3335 4.6665V5.49984H15.8335C16.2937 5.49984 16.6668 5.87293 16.6668 6.33317C16.6668 6.79341 16.2937 7.1665 15.8335 7.1665H4.16683C3.70659 7.1665 3.3335 6.79341 3.3335 6.33317C3.3335 5.87293 3.70659 5.49984 4.16683 5.49984H6.66683ZM8.3335 4.6665C8.3335 4.20627 8.70659 3.83317 9.16683 3.83317H10.8335C11.2937 3.83317 11.6668 4.20627 11.6668 4.6665V5.49984H8.3335V4.6665Z" fill="#4A5055" />
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
                    <h2 className={styles.heading}>Add test price list and report letterhead</h2>

                    <div className={styles.stepPriceandreportLay} >
                        <div className={styles.stepPriceandreportTop}>
                            <div className={styles.stepPriceandreportIcon}>
                                <img src='/logo192.png' />
                            </div>
                            <div className={styles.stepPriceandreporttext1}>Test and price list</div>
                            <div className={styles.stepPriceandreporttext2}>Download sample</div>
                            <div className={styles.stepPriceandreporttext3}>Upload</div>
                        </div>
                        <div className={styles.stepPriceandreportTop}>
                            <div className={styles.stepPriceandreportIcon}>
                                <img src='/logo192.png' />
                            </div>
                            <div className={styles.stepPriceandreporttext1}>Report letterhead</div>
                            {/* <div className={styles.stepPriceandreporttext2}>Download sample</div> */}
                            <div className={styles.stepPriceandreporttext3}>Upload</div>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        {step < 4 && (
                            <button className={styles.button} onClick={handleNextStep} type="submit">
                                Next
                            </button>
                        )}
                        {step > 1 && (
                            <button className={styles.button} onClick={handlePreviousStep}>
                                Previous
                            </button>
                        )}
                    </div>
                    {/* Input fields for Step 3 */}
                </div>
            )}
            {/* ******************************Discount****************************************** */}
            {step === 4 && (
                <div className={styles.stepContent}>
                    {discountData.length
                        <= 0 ? <>
                        <div className={styles.headingLayout}>
                            <h2 className={styles.heading}>Discount</h2>
                            <h4 className={styles.discountCoupanButton}>Add Coupan</h4>
                        </div>

                        <div className={styles.discountLayout} >
                            <div>
                                <img className={styles.discountCoupanIcon} src='/logo192.png' />
                            </div>
                            <div className={styles.discountCoupanText}>Add discount coupons</div>
                            <h3 className={styles.discountCoupanButton}>Add Coupan</h3>
                        </div></> : <Discount />}
                    <div className={styles.buttonContainer}>
                        {step <= 4 && (
                            <button className={styles.buttonToDahbord} onClick={handleSubmits} type="submit">
                                Continue to Dashbord
                            </button>
                        )}
                        {step > 1 && (
                            <button className={styles.button} onClick={handlePreviousStep}>
                                Previous
                            </button>
                        )}
                    </div>
                    {/* Input fields for Step 3 */}
                </div>
            )}

        </div>
    );
};

export default Onbaording;
