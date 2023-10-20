import React from 'react'
import styles from "./AllReportsRecords.module.css";
const AllReportsRecords = () => {
    return (
        <div className={styles.framexx}>
          <div className={styles.frameParent}>
            <div className={styles.checkboxButtonWrapper}>
              <input
                className={styles.checkboxButton}
                disabled={true}
                type="checkbox"
              />
            </div>
            <div className={styles.idWrapper}>
              <b className={styles.id}>{`# ID `}</b>
            </div>
            <div className={styles.patientDetailsWrapper}>
              <b className={styles.patientDetails}>Patient details</b>
            </div>
            <div className={styles.ageSexWrapper}>
              <b className={styles.patientDetails}>{`Age & Sex`}</b>
            </div>
            <div className={styles.paymentStatusWrapper}>
              <b className={styles.id}>Payment status</b>
            </div>
            <div className={styles.paymentStatusWrapper}>
              <b className={styles.updatePaymentStatusContainer}>
                <span className={styles.updatePaymentStatusContainer1}>
                  <p className={styles.update}>{`Update `}</p>
                  <p className={styles.update}>payment status</p>
                </span>
              </b>
            </div>
            <div className={styles.dateOfEntryWrapper}>
              <b className={styles.id}>Date of entry</b>
            </div>
            <div className={styles.testNamesWrapper}>
              <b className={styles.patientDetails}>Test names</b>
            </div>
            <div className={styles.paymentStatusWrapper}>
              <b className={styles.id}>Test status</b>
            </div>
            <div className={styles.paymentStatusWrapper}>
              <b className={styles.id}>Print status</b>
            </div>
            <div className={styles.paymentStatusWrapper}>
              <b className={styles.id}>Prepare Report</b>
            </div>
            <div className={styles.paymentStatusWrapper}>
              <b className={styles.id}>Print</b>
            </div>
          </div>
        </div>
      );
}

export default AllReportsRecords