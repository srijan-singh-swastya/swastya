import React from 'react'
import styles from "./LabsSummary.module.css";
import SettingLeft from '../../AllPages/Settings/SettingLeft/SettingLeft';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Discount from '../../AllPages/Settings/Discount/Discount';
import ReportLetterhead from '../../AllPages/Settings/ReportLetterhead/ReportLetterhead';
import TestAndPriceList from '../../AllPages/Settings/TestAndPriceList/TestAndPriceList';
import TechnicianDetails from '../../AllPages/Settings/TechnicianDetails/TechnicianDetails';
import LabDetails from '../../AllPages/Settings/LabDetails/LabDetails';


import LabSummaryLeft from '../../AllPages/LabSummary/LabSummaryLeft/LabSummaryLeft';
import Overview from '../../AllPages/LabSummary/Overview/Overview';
const LabsSummary = () => {
    return (
     
            <div className={styles.settingLayout}>

                <div className={styles.settingLayoutTop}>Swastya.ai</div>
                <div className={styles.settingLayoutMid}>
                    <div className={styles.settingLayoutMidtext}>
                        <img className={styles.leftIcon} alt=""
                            src="/Image/SettingLeft/view-timeline.svg" />
                        Lab Summary
                    </div>
                </div>
                <div className={styles.settingLayoutEnd}>
                    <div className={styles.settingLayoutEndLeft}>
                        <LabSummaryLeft />
                    </div>
                    <div className={styles.settingLayoutEndRight}>

                        <Routes>
                            <Route path="/" element={<Overview />} />
                            <Route path="discount" element={<Discount />} />
                            <Route path="reportLetterhead" element={<ReportLetterhead />} />
                            <Route path="testAndPriceList" element={<TestAndPriceList />} />
                            <Route path="technicianDetails" element={<TechnicianDetails />} />


                        </Routes>


                    </div>
                </div>
            </div>


    )
}

export default LabsSummary