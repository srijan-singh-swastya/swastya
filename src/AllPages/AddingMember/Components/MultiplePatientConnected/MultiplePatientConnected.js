import styles from "./MultiplePatientConnected.module.css";
const MultiplePatientConnected = () => {
  return (
    <div className={styles.multiplepatientconnected}>
      <div className={styles.addPatientDetailsPopup}>
        <div className={styles.addPatientDetailsPopupInner}>
          <div className={styles.frameParent}>
            <div className={styles.textParent}>
              <div className={styles.text}>
                Multiple patients connected to 9876543210
              </div>
              <div className={styles.text1}>
                Select a member to start creating an entry
              </div>
            </div>
            <button className={styles.close}>
              <img className={styles.declineIcon} alt="" src="/Image/MultiplePatientConnected/decline.svg" />
            </button>
          </div>
        </div>
        
        <div className={styles.frameGroup}>
          <div className={styles.multipleMemebersParent}>
            <div className={styles.multipleMemebers}>
              <div className={styles.abhinavDuttaParent}>
                <div className={styles.label}>Abhinav Dutta</div>
                <div className={styles.patient1}>Patient 1</div>
              </div>
              <button className={styles.button}>
                <div className={styles.buttonSize}>
                  <img className={styles.addIcon} alt="" src="/Image/MultiplePatientConnected/add.svg" />
                  <div className={styles.text3}>Add tests</div>
                  <img
                    className={styles.addIcon}
                    alt=""
                    src="/Image/MultiplePatientConnected/arrowforward1.svg"
                  />
                </div>
              </button>
              <div className={styles.button1}>
                <div className={styles.buttonSize1}>
                  <img
                    className={styles.fileDownloadInLc}
                    alt=""
                    src="/Image/MultiplePatientConnected/file-download-inlc2.svg"
                  />
                  <div className={styles.text4}>Show details</div>
                  <img
                    className={styles.arrowforwardIcon1}
                    alt=""
                    src="/Image/MultiplePatientConnected/arrowforward2.svg"
                  />
                </div>
              </div>
            </div>
            
            
           
            <div className={styles.frameChild} />
          </div>
          <button className={styles.button8}>
            <div className={styles.buttonSize8}>
              <img
                className={styles.plusSqFrIcon}
                alt=""
                src="/Image/MultiplePatientConnected/plus-sqfr.svg"
              />
              <div className={styles.text3}>Add new member</div>
              <img className={styles.addIcon} alt="" src="/Image/MultiplePatientConnected/arrowforward1.svg" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiplePatientConnected;
