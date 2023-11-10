import React, { useState } from 'react';
import styles from './Onbaording.module.css';
import { useNavigate } from 'react-router-dom';
import Discount from '../Settings/Discount/Discount';
import axios from "axios"
const PlanOptions = ["Basic Plan", "Premium Plan", "Enterprise Plan"];
const Onbaording = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
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

    const handleSubmits = async(e) => {

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
            // console.log(res.data)
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
                    <form onSubmit={handleSubmit}>
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
                                    className={styles.inputField}
                                    required
                                >
                                    <option value="">Select Plan</option>
                                    {PlanOptions.map((plan, index) => (
                                        <option key={index} value={plan}>
                                            {plan}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>
                        <div className={styles.buttonContainer}>
                            {step < 4 && (
                                <button className={styles.button} type="submit">Next</button>
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
                    <h2 className={styles.heading}>Add Lab Technician</h2>
                    <div className={styles.technicianDetailLayout}>
                        <div className={styles.technicianHeader}>
                            <div className={styles.technicianDetails}>
                                <label>Technician Name:</label>

                            </div>
                            <div className={styles.technicianDetails}>
                                <label>Phone Number:</label>

                            </div>
                            <div className={styles.technicianDetails}>
                                <label>Technician Role:</label>

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
                                        {index > 0 && (
                                            <button onClick={() => removeTechnician(index)} className={styles.cancelButton}>
                                                Cancel
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <div className={styles.addNewRow} onClick={addTechnician}>Add New Row</div>
                            </div>
                            <div className={styles.buttonContainer}>
                                {step < 4 && (
                                    <button className={styles.button} type="submit">
                                        Next
                                    </button>
                                )}
                                {step > 1 && (
                                    <button className={styles.button} onClick={handlePreviousStep}>
                                        Previous
                                    </button>
                                )}
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
