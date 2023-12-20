import React from 'react'
import styles from "./ReportTAT.module.css";
import { useState } from 'react';

import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;


const data = [
    {
        "id": 1,
        "testName": "Addf",
        "TAT": 300,

    },
    {
        "id": 2,
        "testName": "Addf",
        "TAT": 180,

    },
    {
        "id": 3,
        "testName": "Addf",
        "TAT": 420,
    },
    {
        "id": 4,
        "testName": "Addf",
        "TAT": 240,
    },
    {
        "id": 5,
        "testName": "Addf",
        "TAT": 300,

    },
    {
        "id": 6,
        "testName": "Addf",
        "TAT": 180,

    },
    {
        "id": 7,
        "testName": "Addf",
        "TAT": 420,
    },
    {
        "id": 8,
        "testName": "Addf",
        "TAT": 240,
    },

]

const ReportTAT = () => {

    const [dates, setDates] = useState([])
    const [startDate, setStaetDate] = useState("");
    const [endDate, setEndtDate] = useState("");

    const handleChange = (value) => {
        if (value) {
            setStaetDate(value[0]?.format('DD-MM-YYYY'))
            setEndtDate(value[1]?.format('DD-MM-YYYY'))
        }
    }
    console.log(startDate)
    console.log(endDate)
    return (
        <div className={styles.moneycollection}>
            <div className={styles.medicolineinjectionParent}>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <path d="M18.6663 15.167H10.6663M21.333 9.83366H10.6663M26.6663 9.56699V23.4337C26.6663 25.6739 26.6663 26.794 26.2304 27.6496C25.8469 28.4023 25.2349 29.0142 24.4823 29.3977C23.6267 29.8337 22.5066 29.8337 20.2663 29.8337H11.733C9.4928 29.8337 8.37269 29.8337 7.51705 29.3977C6.7644 29.0142 6.15248 28.4023 5.76898 27.6496C5.33301 26.794 5.33301 25.6739 5.33301 23.4337V9.56699C5.33301 7.32678 5.33301 6.20668 5.76898 5.35103C6.15248 4.59838 6.7644 3.98646 7.51705 3.60297C8.37269 3.16699 9.4928 3.16699 11.733 3.16699H20.2663C22.5066 3.16699 23.6267 3.16699 24.4823 3.60297C25.2349 3.98646 25.8469 4.59838 26.2304 5.35103C26.6663 6.20668 26.6663 7.32678 26.6663 9.56699Z" stroke="#181B1F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className={styles.reports}>Reports</div>
            </div>
            <div className={styles.frameParent}>

                <div className={styles.moneyCollectionParent}>

                    <div className={styles.moneyCollection}>Report TAT</div>
                    <div className={styles.dropdown}>

                        <RangePicker
                            // onChange={(values)=>{
                            //   setDates(values)
                            // }}
                            // picker="month"
                            className={styles.searchfatParent}
                            onChange={(value) => { handleChange(value) }}

                        />
                        <div className={styles.helpText}>Help text</div>
                    </div>
                </div>
                <button className={styles.button}>
                    <div className={styles.buttonSize}>
                        <img
                            className={styles.arrowdownloadIcon}
                            alt=""
                            src="/Image/StartHere/arrowdownload.svg"
                        />
                        <div className={styles.text1}>Download report</div>
                        <img
                            className={styles.arrowdownloadIcon}
                            alt=""
                            src="/Image/StartHere/arrowforward.svg"
                        />
                    </div>
                </button>
            </div>
            <div className={styles.groupParent}>

                <div className={styles.frameGroup}>

                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr className={styles.tableRow}>
                                    <th className={`${styles.leftAlignedid} ${styles.thid}`}>#Id</th>
                                    <th className={`${styles.leftAligned} ${styles.thid}`}>Test Name</th>
                                    <th className={`${styles.rightAligned} ${styles.thid}`}>Report TAT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((doctor, index) => (
                                    <tr className={styles.tableRow} key={index}>
                                        <td className={`${styles.leftAligned} ${styles.id}`}>{doctor.id}</td>
                                        <td className={`${styles.leftAligned} ${styles.id}`}>{doctor.testName}</td>
                                        <td className={`${styles.rightAligned} ${styles.id}`}>{doctor.TAT}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReportTAT;
