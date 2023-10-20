import styles from "./AddPatientDetailsPopup.module.css";
const AddPatientDetailsPopup = () => {
  return (
    <div className={styles.addPatientDetailsPopup}>
      <div className={styles.addPatientDetailsPopupInner}>
        <div className={styles.frameParent}>
          <div className={styles.wrapper}>
            <div className={styles.div}>1</div>
          </div>
          <div className={styles.text}>Add patient details</div>
        </div>
      </div>
      <div className={styles.inputFieldParent}>
        <div className={styles.inputField}>
          <div className={styles.labelParent}>
            <div className={styles.label}>Phone number</div>
            <div className={styles.div1}>*</div>
          </div>
          <div className={styles.inputFieldflagsParent}>
            <div className={styles.inputFieldflags}>
              <img className={styles.flagsIcon} alt="" src="/Image/AddPatientDetailsPopup/flags.svg" />
              <div className={styles.inputFieldflagsChild} />
            </div>
            <input
              className={styles.text1}
              type="text"
              placeholder="Enter phone number"
              maxLength={10}
              minLength={10}
              required
            />
            <div className={styles.button}>
              <div className={styles.buttonSize}>
                <img
                  className={styles.fileDownloadInLc}
                  alt=""
                  src="/Image/AddPatientDetailsPopup/file-download-inlc.svg"
                />
                <div className={styles.text2}>Check</div>
                <img
                  className={styles.arrowforwardIcon}
                  alt=""
                  src="/Image/AddPatientDetailsPopup/arrowforward.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.helpText}>Help text</div>
        </div>
        <div className={styles.iconlytwoToneinfoCircleParent}>
          <img
            className={styles.iconlytwoToneinfoCircle}
            alt=""
            src="/Image/AddPatientDetailsPopup/iconlytwotoneinfo-circle3.svg"
          />
          <div className={styles.tag}>
            Enter phone number to check if patient details already present
          </div>
          <img
            className={styles.iconlytwoToneinfoCircle}
            alt=""
            src="/Image/AddPatientDetailsPopup/close2.svg"
          />
        </div>
        <div className={styles.inputField}>
          <div className={styles.labelParent}>
            <div className={styles.label}>Name</div>
            <div className={styles.div1}>*</div>
          </div>
          <div className={styles.searchfatParent}>
            <img
              className={styles.searchfatIcon}
              alt=""
              src="/Image/AddPatientDetailsPopup/searchfat2.svg"
            />
            <input
              className={styles.text1}
              type="text"
              placeholder="Enter name"
              required
            />
            <img
              className={styles.searchfatIcon}
              alt=""
              src="/Image/AddPatientDetailsPopup/arrowaltdown1.svg"
            />
          </div>
          <div className={styles.helpText}>Help text</div>
        </div>
        <div className={styles.inputField}>
          <div className={styles.labelParent}>
            <div className={styles.label}>Age</div>
            <div className={styles.div1}>*</div>
          </div>
          <div className={styles.searchfatParent}>
            <img
              className={styles.searchfatIcon}
              alt=""
              src="/Image/AddPatientDetailsPopup/searchfat2.svg"
            />
            <input
              className={styles.text1}
              type="text"
              placeholder="Enter age"
              maxLength={3}
              minLength={0}
              required
            />
            <img
              className={styles.searchfatIcon}
              alt=""
              src="/Image/AddPatientDetailsPopup/arrowaltdown1.svg"
            />
          </div>
          <div className={styles.helpText}>Help text</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.labelParent}>
            <div className={styles.div}>Sex</div>
            <div className={styles.div4}>*</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.radioButtonParent}>
              <input
                className={styles.radioButton}
                type="radio"
                name="patientSex"
              />
              <div className={styles.label}>Male</div>
            </div>
            <div className={styles.radioButtonParent}>
              <input
                className={styles.radioButton}
                type="radio"
                name="patientSex"
              />
              <div className={styles.label}>Female</div>
            </div>
          </div>
        </div>
        <div className={styles.inputField}>
          <div className={styles.labelParent}>
            <div className={styles.label}>Recommended by</div>
            <div className={styles.div1}>*</div>
          </div>
          <div className={styles.searchfatParent}>
            <img
              className={styles.searchfatIcon}
              alt=""
              src="/Image/AddPatientDetailsPopup/searchfat2.svg"
            />
            <input
              className={styles.text1}
              type="text"
              placeholder="Enter recommended by"
              required
            />
            <button className={styles.arrowaltdown}>
              <img
                className={styles.arrowaltdownIcon2}
                alt=""
                src="/Image/AddPatientDetailsPopup/arrowaltdown2.svg"
              />
            </button>
          </div>
          <div className={styles.helpText}>Help text</div>
        </div>
      </div>
      <div className={styles.addPatientDetailsPopupChild} />
      <div className={styles.dropdown}>
        <div className={styles.labelParent}>
          <div className={styles.label}>Recommended doctor</div>
          <div className={styles.div1}>*</div>
        </div>
        <div className={styles.searchfatParent1}>
          <img className={styles.searchfatIcon} alt="" src="/Image/AddPatientDetailsPopup/searchfat  .svg" />
          <div className={styles.text6}>Enter recommended doctor name</div>
          <img
            className={styles.searchfatIcon}
            alt="p"
            src="/Image/AddPatientDetailsPopup/arrowaltdown1.svg"
          />
        </div>
       
      </div>
      
    </div>
  );
};

export default AddPatientDetailsPopup;
