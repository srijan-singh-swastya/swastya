import { useState } from "react";
import styles from "./SignReportPopUp.module.css";

const SignReportPopUp = (props) => {
    const { onClick } = props;
    const [doctorComment, setDoctorComment] = useState("")
    const [rejectPopUp, setRejectPopUp] = useState(false)
    const handleTextChange = (e) => {
        setDoctorComment(e.target.value);
    };
    const handleReject = () => {
        if (doctorComment === "") {
            setRejectPopUp(!rejectPopUp)
        }
        else {
            if (onClick) {
                onClick();
            }
        }

    }
    const handleCancleRejectPopUp = () => {
        setRejectPopUp(!rejectPopUp)
    }

    return (
        <>
            <div className={styles.prepareReportNav}>
                <div className={styles.prepareReportNavText1}>Review and take action on reports</div>
                <div onClick={handleReject} className={styles.prepareReportNavText3}>Reject report</div>
                <div className={styles.prepareReportNavText4}>Approve and go to next report</div>
                <div onClick={onClick} className={styles.prepareReportNavText5}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>

            <div className={styles.SignUpReportConatiner}>
                <div className={styles.SignUpReportConatinerLeft}>
                    <div className={styles.patientinfo}>
                        <div className={styles.inputFieldParent}>
                            <div className={styles.inputField}>
                                <div className={styles.nameParent}>
                                    <div className={styles.name}>Name:</div>
                                    <div className={styles.div}>*</div>
                                </div>
                                <div className={styles.abhinavDutta}>Abhinav Dutta</div>

                            </div>
                            <div className={styles.inputField}>
                                <div className={styles.nameParent}>
                                    <div className={styles.name}>Ref No:</div>
                                    <div className={styles.div}>*</div>
                                </div>
                                <div className={styles.abhinavDutta}>1038</div>

                            </div>
                            <div className={styles.inputField}>
                                <div className={styles.nameParent}>
                                    <div className={styles.name}>Ref By:</div>
                                    <div className={styles.div}>*</div>
                                </div>

                                <div className={styles.abhinavDutta}>Ben Dover</div>

                            </div>
                            <div className={styles.inputField}>
                                <div className={styles.nameParent}>
                                    <div className={styles.name}>Sample(s):</div>
                                    <div className={styles.div}>*</div>
                                </div>
                                <div className={styles.abhinavDutta}>Plain,EDTAB,Container</div>

                            </div>
                            <div className={styles.inputField4}>
                                <div className={styles.testStatusParent}>
                                    <div className={styles.name}>Test status</div>
                                    <div className={styles.div}>*</div>
                                </div>
                                <div className={styles.tag}>

                                    <div className={styles.tag1}>Report generated</div>
                                </div>

                            </div>
                            <div className={styles.inputField4}>
                                <div className={styles.testStatusParent}>
                                    <div className={styles.name}>Payment status</div>
                                    <div className={styles.div}>*</div>
                                </div>
                                <div className={styles.tag2}>
                                    <div className={styles.tag1}>Advance paid</div>
                                </div>

                            </div>
                        </div>
                        <div className={styles.inputFieldParent}>
                            <div className={styles.inputField}>
                                <div className={styles.ageParent}>
                                    <div className={styles.name}>Age:</div>
                                    <div className={styles.div}>*</div>
                                </div>
                                <div className={styles.abhinavDutta}>25</div>

                            </div>
                            <div className={styles.inputField}>
                                <div className={styles.ageParent}>
                                    <div className={styles.name}>Gender:</div>
                                    <div className={styles.div}>*</div>
                                </div>
                                <div className={styles.abhinavDutta}>Male</div>

                            </div>
                            <div className={styles.inputField}>
                                <div className={styles.ageParent}>
                                    <div className={styles.name}>Phone:</div>
                                    <div className={styles.div}>*</div>
                                </div>
                                <div className={styles.abhinavDutta}>9876543210</div>

                            </div>
                        </div>
                        <div className={styles.inputFieldParent}>
                            <div className={styles.inputField}>
                                <div className={styles.nameParent}>
                                    <div className={styles.name}>Registered:</div>
                                    <div className={styles.div}>*</div>
                                </div>
                                <div className={styles.abhinavDutta}>31/08/2023 10:34:54 AM</div>

                            </div>
                            <div className={styles.inputField}>
                                <div className={styles.nameParent}>
                                    <div className={styles.name}>Collected:</div>
                                    <div className={styles.div}>*</div>
                                </div>
                                <div className={styles.abhinavDutta}>ALL WARD</div>

                            </div>
                            <div className={styles.inputField}>
                                <div className={styles.recievedWrapper}>
                                    <div className={styles.name}>Recieved:</div>
                                </div>
                                <div className={styles.abhinavDutta}>31/08/2023</div>
                            </div>
                            <div className={styles.inputField12} />
                        </div>
                    </div>

                    {/* prepare report below */}

                    <div className={styles.patientreport}>
                        <div className={styles.searchfatParent}>
                            <div className={styles.investigation}>Investigation</div>

                            <div className={styles.investigation}>Observed values</div>
                            <div className={styles.investigation}>Units</div>
                            <div className={styles.investigation}>Reference intervals</div>
                        </div>
                        <div className={styles.frameParent}>
                            <div className={styles.searchfatGroup}>
                                <div className={styles.investigation}>Haemoglobin Testo</div>
                            </div>
                            <div className={styles.searchfatGroup}>

                                <div className={styles.electrolyesSerumWrapper}>
                                    <div className={styles.investigation}>Electrolyes Serums</div>
                                </div>

                                <div className={styles.inputField1}>

                                    <input
                                        className={styles.inputFieldChild}
                                        placeholder="Enter valuessss"
                                        type="text"
                                    />
                                </div>
                                <div className={styles.investigation}>mg/Dl</div>
                                <div className={styles.investigation}>{`<150`}</div>
                            </div>


                            <div className={styles.searchfatGroup}>
                                <div className={styles.electrolyesSerumWrapper}>
                                    <div className={styles.investigation}>Electrolyes Serums</div>
                                </div>
                                <div className={styles.inputField1}>
                                    <input
                                        className={styles.inputFieldChild}
                                        placeholder="Enter valuessssssssss"
                                        type="text"
                                    />
                                </div>
                                <div className={styles.investigation}>mg/Dl</div>
                                <div className={styles.investigation}>{`<150`}</div>


                            </div><div className={styles.searchfatGroup}>
                                <div className={styles.electrolyesSerumWrapper}>
                                    <div className={styles.investigation}>Electrolyes Serums</div>
                                </div>
                                <div className={styles.inputField1}>
                                    <input
                                        className={styles.inputFieldChild}
                                        placeholder="Enter value"
                                        type="text"
                                    />
                                </div>
                                <div className={styles.investigation}>mg/Dl</div>
                                <div className={styles.investigation}>{`<150`}</div>
                            </div>


                            <div className={styles.frameWrapper}>
                                <div className={styles.inputFieldParent}>
                                    <div className={styles.inputField4}>
                                        <div className={styles.interpretationOfHaemoglobinParent}>
                                            <div className={styles.interpretationOfHaemoglobin}>
                                                Interpretation of Haemoglobin:
                                            </div>
                                            <div className={styles.div8}>*</div>
                                        </div>


                                    </div>
                                    <div className={styles.inputField5}>

                                        <div className={styles.investigation}>
                                            Hemoglobin is a protein in your red blood cells that carries
                                            oxygen to your body's organs and tissues and transports carbon
                                            dioxide from your organs and tissues back to your lungs. If a
                                            hemoglobin test reveals that your hemoglobin level is lower than
                                            normal, it means you have a low red blood cell count (anemia).
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className={styles.frameChild3} />
                        </div>
                    </div>
                </div>
                <div className={styles.SignUpReportConatinerRight}>
                    <div className={styles.SignReportBoldText}>Add Comments</div>
                    <div>
                        <textarea

                            className={styles.SignReportTextArea}

                            onChange={handleTextChange}
                            placeholder="Enter text here..."
                        >
                        </textarea>

                    </div>
                </div>
            </div>
            {
                rejectPopUp ?
                    <div className={styles.modalOverlay}>
                        <div className={styles.detailsAndTestLayout}>
                            <div className={styles.rejectBoxText1}>
                                <div>Add comments to reject the report</div>
                                <svg onClick={handleCancleRejectPopUp} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4.1665 4.16602L9.99984 9.99935M15.8332 15.8327L9.99984 9.99935M9.99984 9.99935L15.8332 4.16602L4.1665 15.8327" stroke="#181B1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className={styles.rejectBoxText2}>Help the technician understand the reason for rejection</div>
                            <div onClick={handleCancleRejectPopUp} className={styles.rejectBoxText3}>Okay</div>


                        </div>
                    </div> : ""
            }
        </>
    );
};

export default SignReportPopUp;

