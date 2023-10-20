import styles from "./PatientReport.module.css";

const PatientReport = () => {
  return (
    <div className={styles.patientreport}>
      <div className={styles.searchfatParent}>
        <div className={styles.investigation}>Investigation</div>
   
        <div className={styles.investigation}>Observed values</div>
        <div className={styles.investigation}>Units</div>
        <div className={styles.investigation}>Reference intervals</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.searchfatGroup}>
          <div className={styles.investigation}>Haemoglobin Testo</div>
        </div>
        <div className={styles.searchfatGroup}>

          <div className={styles.electrolyesSerumWrapper}>
            <div className={styles.investigation}>Electrolyes Serums</div>
          </div>

          <div className={styles.inputField1}>

            <input
              className={styles.inputFieldChild}
              placeholder="Enter value"
              type="text"
            />
          </div>
          <div className={styles.investigation}>mg/Dl</div>
          <div className={styles.investigation}>{`<150`}</div>
        </div>


        <div className={styles.searchfatGroup}>
          <div className={styles.electrolyesSerumWrapper}>
            <div className={styles.investigation}>Electrolyes Serums</div>
          </div>
          <div className={styles.inputField1}>
            <input
              className={styles.inputFieldChild}
              placeholder="Enter value"
              type="text"
            />
          </div>
          <div className={styles.investigation}>mg/Dl</div>
          <div className={styles.investigation}>{`<150`}</div>


        </div><div className={styles.searchfatGroup}>
          <div className={styles.electrolyesSerumWrapper}>
            <div className={styles.investigation}>Electrolyes Serums</div>
          </div>
          <div className={styles.inputField1}>
            <input
              className={styles.inputFieldChild}
              placeholder="Enter value"
              type="text"
            />
          </div>
          <div className={styles.investigation}>mg/Dl</div>
          <div className={styles.investigation}>{`<150`}</div>
        </div>







        <div className={styles.frameWrapper}>
          <div className={styles.inputFieldParent}>
            <div className={styles.inputField4}>
              <div className={styles.interpretationOfHaemoglobinParent}>
                <div className={styles.interpretationOfHaemoglobin}>
                  Interpretation of Haemoglobin:
                </div>
                <div className={styles.div8}>*</div>
              </div>
              <img
                className={styles.searchfatIcon}
                alt=""
                src="/searchfat.svg"
              />
              <img
                className={styles.searchfatIcon}
                alt=""
                src="/arrowaltdown.svg"
              />
              <div className={styles.helpText4}>Help text</div>
            </div>
            <div className={styles.inputField5}>
              <img
                className={styles.searchfatIcon}
                alt=""
                src="/searchfat.svg"
              />
              <div className={styles.investigation}>
                Hemoglobin is a protein in your red blood cells that carries
                oxygen to your body's organs and tissues and transports carbon
                dioxide from your organs and tissues back to your lungs. If a
                hemoglobin test reveals that your hemoglobin level is lower than
                normal, it means you have a low red blood cell count (anemia).
              </div>
              <img
                className={styles.searchfatIcon}
                alt=""
                src="/arrowaltdown.svg"
              />
              <div className={styles.helpText5}>Help text</div>
            </div>
          </div>
        </div>
        <div className={styles.frameChild3} />
      </div>
    </div>
  );
};

export default PatientReport;
