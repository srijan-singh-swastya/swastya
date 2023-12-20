import React, { useState } from 'react'
import TopBar from '../../../AllPages/General/TopBar/TopBar'
import styles from './SignReportHome.module.css';
import SignReportPopUp from '../SignReportPopUp/SignReportPopUp';
const SignReportHome = () => {
    const [reviewPopUp, setReviewPopUp] = useState(false);
    const [active, setActive] = useState("box1")
    const goBack = () => {
        window.history.back();
    };
    const handleReview = () => {
        setReviewPopUp(!reviewPopUp)
    }
    const handleSignReportPopUpClick = () => {
        setReviewPopUp(!reviewPopUp)
    }
    return (
        <div>
            <TopBar />
            <div className={styles.SignReportHomeBox2}>
                <div className={styles.SignReportHomeBox2Line1} >
                    <svg onClick={goBack} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#181B1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> Final reports to sign
                </div>
            </div>
            <div className={styles.SignReportHomeBox3}>
                <div className={styles.Box3Layout}>
                    <div className={styles.Box3LayoutCard1}>
                        <div onClick={() => setActive("box1")}
                            className={`${styles.Box3LayoutCard1Layout} ${active === 'box1' ? styles.activeBox : ''}`}
                        >
                            <div className={styles.box3Text}>Reports pending for sign</div>
                            <div className={styles.box3Text}>2</div>
                        </div>
                    </div>
                    <div className={styles.Box3LayoutCard1}>
                        <div onClick={() => setActive("box2")}
                            className={`${styles.Box3LayoutCard1Layout} ${active === 'box2' ? styles.activeBox : ''}`}
                        >
                            <div className={styles.box3Text}>Report approved</div>
                            <div className={styles.box3Text}>2</div>
                        </div>
                    </div>
                    <div className={styles.Box3LayoutCard1}>
                        <div onClick={() => setActive("box3")}
                            className={`${styles.Box3LayoutCard1Layout} ${active === 'box3' ? styles.activeBox : ''}`}
                        >
                            <div className={styles.box3Text}>Report rejected</div>
                            <div className={styles.box3Text}>2</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.SignReportHomeBox4}>
                <div className={styles.SignReportHomeBox4Weekly}>
                    <div className={styles.SignReportHomeBox4WeeklyTest1}>This Week</div>
                    <div className={styles.SignReportHomeBox4Daily}>
                        <div className={styles.Box4Date}>
                            <div className={styles.Box4BoldText}>15 July 23</div>
                            <div className={styles.Box4NormalText}>Sunday</div>
                        </div>
                        <div className={styles.Box4PendingReport}>
                            <div className={styles.Box4BoldText}>Reports pending</div>
                            <div className={styles.Box4NormalText}>12</div>
                        </div>
                        <div onClick={handleReview} className={styles.Box4ReviewButton}>Review</div>
                        
                    </div>
                   
                </div>
                <div className={styles.SignReportHomeBox4Weekly}>
                    <div className={styles.SignReportHomeBox4WeeklyTest1}>Last Week</div>
                    <div className={styles.SignReportHomeBox4Daily}>
                        <div className={styles.Box4Date}>
                            <div className={styles.Box4BoldText}>14 July 23</div>
                            <div className={styles.Box4NormalText}>Sunday</div>
                        </div>
                        <div className={styles.Box4PendingReport}>
                            <div className={styles.Box4BoldText}>Reports pending</div>
                            <div className={styles.Box4NormalText}>12</div>
                        </div>
                        <div onClick={handleReview} className={styles.Box4ReviewButton}>Review</div>
                        
                    </div>
                    <div className={styles.SignReportHomeBox4Daily}>
                        <div className={styles.Box4Date}>
                            <div className={styles.Box4BoldText}>13 July 23</div>
                            <div className={styles.Box4NormalText}>Sunday</div>
                        </div>
                        <div className={styles.Box4PendingReport}>
                            <div className={styles.Box4BoldText}>Reports pending</div>
                            <div className={styles.Box4NormalText}>12</div>
                        </div>
                        <div onClick={handleReview} className={styles.Box4ReviewButton}>Review</div>
                        
                    </div>
                </div>
                {/* <div className={styles.noReportsToSign}>
                    <img src="/Image/KitInventory/20.svg"/>
                    <div className={styles.Box4BoldText}>No reports To sign</div>
                </div> */}



            </div>
            {
                reviewPopUp ?
                    <div className={styles.modalOverlay}>
                        <div className={styles.detailsAndTestLayout}>
                            {/* patientDetails from Prapare report component */}
                            <SignReportPopUp onClick={handleSignReportPopUpClick} />
                        </div>
                    </div> : ""
            }
        </div>
    )
}

export default SignReportHome