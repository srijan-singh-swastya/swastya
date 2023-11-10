import React from 'react'
import styles from "./DoctorCommition.module.css";
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
  return (
    <div className={styles.moneycollection}>
      <div className={styles.frameParent}>
        <div className={styles.moneyCollectionParent}>
          <div className={styles.moneyCollection}>Doctor Commission</div>
          <div className={styles.dropdown}>
            <div className={styles.labelParent}>
              <div className={styles.label}>Label</div>
              <div className={styles.div}>*</div>
            </div>
            <div className={styles.searchfatParent}>
              <img
                className={styles.searchfatIcon}
                alt=""
                src="/Image/StartHere/searchfat.svg"
              />
              <div className={styles.text}>Jul 14 – Jul 20</div>
              <img
                className={styles.arrowaltdownIcon}
                alt=""
                src="/Image/StartHere/arrowaltdown.svg"
              />
            </div>
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
                  <th>Doctor Name</th>
                  <th>Number of Tests</th>
                  <th>To Be Paid</th>
                  <th>Total Paid</th>
                </tr>
              </thead>
              <tbody>
                {data.map((doctor, index) => (
                  <tr key={index}>
                    <td>{doctor.doctorName}</td>
                    <td>{doctor.numberOfTests}</td>
                    <td>${doctor.toBePaid}</td>
                    <td>${doctor.totalPaid}</td>
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
