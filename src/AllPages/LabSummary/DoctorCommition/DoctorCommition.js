import React from 'react'
import styles from "./DoctorCommition.module.css";
import { useState } from 'react';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const data = [
  {
    "doctorName": "Dr. Smith",
    "numberOfTests": 5,
    "toBePaid": 300,
    "totalPaid": 150
  },
  {
    "doctorName": "Dr. Johnson",
    "numberOfTests": 3,
    "toBePaid": 180,
    "totalPaid": 180
  },
  {
    "doctorName": "Dr. Williams",
    "numberOfTests": 7,
    "toBePaid": 420,
    "totalPaid": 300
  },
  {
    "doctorName": "Dr. Brown",
    "numberOfTests": 4,
    "toBePaid": 240,
    "totalPaid": 240
  },
  {
    "doctorName": "Dr. Johnson",
    "numberOfTests": 3,
    "toBePaid": 180,
    "totalPaid": 180
  },
  {
    "doctorName": "Dr. Williams",
    "numberOfTests": 7,
    "toBePaid": 420,
    "totalPaid": 300
  },
  {
    "doctorName": "Dr. Brown",
    "numberOfTests": 4,
    "toBePaid": 240,
    "totalPaid": 240
  },
  {
    "doctorName": "Dr. Williams",
    "numberOfTests": 7,
    "toBePaid": 420,
    "totalPaid": 300
  },
  {
    "doctorName": "Dr. Brown",
    "numberOfTests": 4,
    "toBePaid": 240,
    "totalPaid": 240
  }
]



const DoctorCommition = () => {

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
      <div className={styles.frameParent}>
        <div className={styles.moneyCollectionParent}>
          <div className={styles.moneyCollection}>Doctor Commission</div>
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
          <div className={styles.totalCollectionParent}>
            <div className={styles.totalCollection}>Total Commission</div>
            <div className={styles.div1}>₹19,083.98</div>
          </div>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thid}>Doctor Name</th>
                  <th className={styles.thid}>Number of Tests</th>
                  <th className={styles.thid}>To Be Paid</th>
                  <th className={styles.thid}>Total Paid</th>
                </tr>
              </thead>
              <tbody>
                {data.map((doctor, index) => (
                  <tr className={styles.tableRow} key={index}>
                    <td className={styles.tdid}>{doctor.doctorName}</td>
                    <td className={styles.tdid}>{doctor.numberOfTests}</td>
                    <td className={styles.tdid}>${doctor.toBePaid}</td>
                    <td className={styles.tdid}>${doctor.totalPaid}</td>
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

export default DoctorCommition;
