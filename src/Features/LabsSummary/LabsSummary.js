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
import DoctorCommition from '../../AllPages/LabSummary/DoctorCommition/DoctorCommition';
import LabSummaryDiscount from '../../AllPages/LabSummary/LabSummaryDiscount/LabSummaryDiscount';
import MajorBusiness from '../../AllPages/LabSummary/MajorBusiness/MajorBusiness';
import MoneyPending from '../../AllPages/LabSummary/MoneyPending/MoneyPending';
import MoneyCollection from '../../AllPages/LabSummary/MoneyCollection/MoneyCollection';
import ReportTAT from '../../AllPages/LabSummary/ReportTAT/ReportTAT';
import KitEfficiency from '../../AllPages/LabSummary/KitEfficiency/KitEfficiency';

import LabSummaryRight from '../../AllPages/LabSummary/LabSummaryRight/LabSummaryRight';
const LabsSummary = () => {
    const goBack = () => {
        window.history.back();
      };
    return (

        <div className={styles.settingLayout}>

            <div className={styles.settingLayoutTop}>Swastya.ai</div>
            <div className={styles.settingLayoutMid}>
                <div className={styles.settingLayoutMidtext}>
                    <svg onClick={goBack}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#181B1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Lab Summary
                </div>
            </div>
            <div className={styles.settingLayoutEnd}>
                <div className={styles.settingLayoutEndLeft}>
                    <LabSummaryLeft />
                </div>
                <div className={styles.settingLayoutEndRight}>
                    <section id='overview' >
                        <Overview />
                    </section>
                    <section id='moneyCollection'>
                        <MoneyCollection />
                    </section>
                    <section id='moneyPending'>
                        <MoneyPending />
                    </section>
                    <section id='labSummaryDiscount'>
                        <LabSummaryDiscount />
                    </section>
                    <section id='doctorCommition'>
                        <DoctorCommition />
                    </section>
                    <section id='majorBusiness'>
                        <MajorBusiness />
                    </section>
                    <section id='kitEfficiency'>
                        <KitEfficiency />
                    </section>
                    <section id='reportTAT'>
                        <ReportTAT />
                    </section>
                   

                </div>
            </div>
        </div>


    )
}

export default LabsSummary