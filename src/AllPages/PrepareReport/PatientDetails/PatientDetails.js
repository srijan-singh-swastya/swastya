import styles from "./PatientDetails.module.css";

const PatientDetails = () => {
  return (
    <div className={styles.patientinfo}>
      <div className={styles.inputFieldParent}>
        <div className={styles.inputField}>
          <div className={styles.nameParent}>
            <div className={styles.name}>Name:</div>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.abhinavDutta}>Abhinav Dutta</div>
      
        </div>
        <div className={styles.inputField}>
          <div className={styles.nameParent}>
            <div className={styles.name}>Ref No:</div>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.abhinavDutta}>1038</div>
        
        </div>
        <div className={styles.inputField}>
          <div className={styles.nameParent}>
            <div className={styles.name}>Ref By:</div>
            <div className={styles.div}>*</div>
          </div>
          
          <div className={styles.abhinavDutta}>Ben Dover</div>
        
        </div>
        <div className={styles.inputField}>
          <div className={styles.nameParent}>
            <div className={styles.name}>Sample(s):</div>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.abhinavDutta}>Plain,EDTAB,Container</div>
          
        </div>
        <div className={styles.inputField4}>
          <div className={styles.testStatusParent}>
            <div className={styles.name}>Test status</div>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.tag}>
          
            <div className={styles.tag1}>Report generated</div>
          </div>
        
        </div>
        <div className={styles.inputField4}>
          <div className={styles.testStatusParent}>
            <div className={styles.name}>Payment status</div>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.tag2}>
            
            <div className={styles.tag1}>Advance paid</div>
            <img className={styles.searchfatIcon} alt="" src="/close2.svg" />
          </div>
         
        </div>
      </div>
      <div className={styles.inputFieldParent}>
        <div className={styles.inputField}>
          <div className={styles.ageParent}>
            <div className={styles.name}>Age:</div>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.abhinavDutta}>25</div>
         
        </div>
        <div className={styles.inputField}>
          <div className={styles.ageParent}>
            <div className={styles.name}>Gender:</div>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.abhinavDutta}>Male</div>
        
        </div>
        <div className={styles.inputField}>
          <div className={styles.ageParent}>
            <div className={styles.name}>Phone:</div>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.abhinavDutta}>9876543210</div>
         
        </div>
      </div>
      <div className={styles.inputFieldParent}>
        <div className={styles.inputField}>
          <div className={styles.nameParent}>
            <div className={styles.name}>Registered:</div>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.abhinavDutta}>31/08/2023 10:34:54 AM</div>
      
        </div>
        <div className={styles.inputField}>
          <div className={styles.nameParent}>
            <div className={styles.name}>Collected:</div>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.abhinavDutta}>ALL WARD</div>

        </div>
        <div className={styles.inputField}>
          <div className={styles.recievedWrapper}>
            <div className={styles.name}>Recieved:</div>
          </div>
          <div className={styles.abhinavDutta}>31/08/2023</div>
        </div>
        <div className={styles.inputField12} />
      </div>
    </div>
  );
};

export default PatientDetails;
