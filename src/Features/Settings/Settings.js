import React from 'react'
import styles from "./Settings.module.css";
import SettingLeft from '../../AllPages/Settings/SettingLeft/SettingLeft';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Discount from '../../AllPages/Settings/Discount/Discount';
import ReportLetterhead from '../../AllPages/Settings/ReportLetterhead/ReportLetterhead';
import TestAndPriceList from '../../AllPages/Settings/TestAndPriceList/TestAndPriceList';
import TechnicianDetails from '../../AllPages/Settings/TechnicianDetails/TechnicianDetails';
import LabDetails from '../../AllPages/Settings/LabDetails/LabDetails';


const Settings = () => {
    const goBack = () => {
        window.history.back();
    };
    return (

        <div className={styles.settingLayout}>

            <div className={styles.settingLayoutTop}>Swastya.ai</div>
            <div className={styles.settingLayoutMid}>
                <div className={styles.settingLayoutMidtext}>
                    {/* <img className={styles.leftIcon} alt=""
                            src="/Image/SettingLeft/view-timeline.svg" /> */}
                    <svg onClick={goBack} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#181B1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Setting
                </div>
            </div>
            <div className={styles.settingLayoutEnd}>
                <div className={styles.settingLayoutEndLeft}>
                    <SettingLeft />
                </div>
                <div className={styles.settingLayoutEndRight}>

                    <Routes>
                        <Route path="/" element={<LabDetails />} />
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

export default Settings