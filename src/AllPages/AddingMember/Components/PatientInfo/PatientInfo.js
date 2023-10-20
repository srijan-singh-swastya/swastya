import styles from "./PatientInfo.module.css";
const PatientInfo = () => {


  return (
    <>
      <div className={styles.patientinfo}>
        <div className={styles.patientinfoInner}>
          <div className={styles.frameParent}>
            <div className={styles.wrapper}>
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.text}>Add patient and test details</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.aWrapper}>
            <div className={styles.div}>A</div>
          </div>
          <div className={styles.abhinavDuttaWrapper}>
            <div className={styles.abhinavDutta}>Abhinav Dutta</div>
          </div>
          <button className={styles.button}>
            <div className={styles.buttonSize}>
              <img className={styles.addIcon} alt="" src="/Image/PatientInfo/add1.svg" />
              <div className={styles.text1}>Edit details and tests</div>
              <img className={styles.addIcon} alt="8" src="/Image/PatientInfo/arrowforward1.svg" />
            </div>
          </button>
          <img className={styles.trashCanIcon} alt="" src="/Image/PatientInfo/trash-can.svg" />

        </div>
        
        <div className={styles.buttonWrapper}>
          <button className={styles.button2}>
            <div className={styles.buttonSize2}>
              <img className={styles.addIcon2} alt="" src="/Image/PatientInfo/add1.svg" />
              <div className={styles.text1}>Add new member</div>
              <img className={styles.addIcon} alt="" src="/Image/PatientInfo/arrowforward1.svg" />
            </div>
          </button>
        </div>
      </div>
      
    </>
  );
};

export default PatientInfo;
