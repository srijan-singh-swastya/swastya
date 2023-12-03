import styles from "./PatientDetails.module.css";

const PatientDetails = (props) => {
  const { onClick } = props;
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Access the uploaded file here
    // Do something with the file, like sending it to an API or processing it
  };

  return (
    <>
      <div className={styles.prepareReportNav}>
        <div className={styles.prepareReportNavText1}>Prepare report</div>
        <div className={styles.prepareReportNavText2}>Print</div>
        <div onClick={onClick} className={styles.prepareReportNavText3}>Save report</div>
        <div className={styles.prepareReportNavText4}>Save and go to next report</div>
        <div onClick={onClick} className={styles.prepareReportNavText5}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

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

      {/* prepare report below */}

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
                placeholder="Enter valuessss"
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
                placeholder="Enter valuessssssssss"
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
              </div>
              <div className={styles.inputField5}>
                <div className={styles.investigation}>
                  Hemoglobin is a protein in your red blood cells that carries
                  oxygen to your body's organs and tissues and transports carbon
                  dioxide from your organs and tissues back to your lungs. If a
                  hemoglobin test reveals that your hemoglobin level is lower than
                  normal, it means you have a low red blood cell count (anemia).
                </div>
              </div>
            </div>

          </div>

          <div className={styles.uploadImge}>
            <div className={styles.uploadImgeBox1}>Upload image</div>
            <div className={styles.uploadImgeBox2}>
              <div className={styles.uploadImgeBox2Left}>
                <img htmlFor="fileUpload" src="/Image/StartHere/upload.svg" />
             
                <input
                  type="file"
                  id="fileUpload"
                  className={styles.uploadInput}
                  onChange={handleFileUpload}
                  accept=".pdf,.png" // Specify the accepted file formats
                />
              </div>
              <div className={styles.uploadImgeBox2Right}>
                <label htmlFor="fileUpload" className={styles.uploadLabel}>
                  Upload PDF/PNG file
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <path d="M3.75 9.13867H14.25M14.25 9.13867L9.75 4.63867M14.25 9.13867L9.75 13.6387" stroke="#0067DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  className={styles.uploadInput}
                  onChange={handleFileUpload}
                  accept=".pdf,.png" // Specify the accepted file formats
                />
              </div>

            </div>

          </div>

          <div className={styles.frameChild3} />
        </div>
      </div>
    </>
  );
};

export default PatientDetails;
