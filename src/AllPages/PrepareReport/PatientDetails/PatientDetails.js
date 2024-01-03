import styles from "./PatientDetails.module.css";
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";


const PatientDetails = (props) => {
  const [fileData, setFileData] = useState(null)
  const { onClick } = props;
  const { id } = props;
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Access the uploaded file here
    setFileData(file)
    // Do something with the file, like sending it to an API or processing it
  };
  const data = [
    [
      { id: 1, name: '', age: '' },

    ],
    [
      { id: 3, name: 's', mobile: '' },
    ],

  ];

  const [currentArrayIndex, setCurrentArrayIndex] = useState(0);
  const [currentIndexInArray, setCurrentIndexInArray] = useState(0);
  const [showingMessage, setShowingMessage] = useState(false);
  const [currentdata, setcurrentdata] = useState(false)
  useEffect(() => {
    let timer;
    if (currentdata) {
      if (currentIndexInArray < data[currentArrayIndex].length - 1) {
        setCurrentIndexInArray(currentIndexInArray + 1);
      } else if (currentArrayIndex < data.length - 1) {
        setShowingMessage(true);
        setCurrentArrayIndex(currentArrayIndex + 1);
        setCurrentIndexInArray(0);

      }
      setcurrentdata(false)
    }
    if (showingMessage) {
      timer = setTimeout(() => {
        setShowingMessage(false);

      }, 4000); // Display the message for 5 seconds
    }
    return () => clearTimeout(timer);
  }, [showingMessage, currentArrayIndex, currentIndexInArray, data]);

  const saveAndNext = () => {
    setcurrentdata(true)
    // setShowingMessage(true);
  };




  const AllEntriesData = useSelector((state) => state.newAllEntries)
  console.log(AllEntriesData)


  function findBookingById(id) {
    for (const order of AllEntriesData.orders) {
      for (const booking of order.bookings) {
        if (booking.id === id) {
          //   console.log(JSON.stringify(booking, null, 2)); // Logging the found booking
          return booking;
        }
      }
    }
    return null; // Return null if the booking is not found
  }

  // Call the function with the specified ID
  const originalData = findBookingById(id);
  console.log(originalData)



  return (
    <>
      <div className={styles.prepareReportNav}>
        <div className={styles.prepareReportNavText1}>Prepare report</div>
        <div className={styles.prepareReportNavText2}>Print</div>
        <div onClick={onClick} className={styles.prepareReportNavText3}>Save report</div>
        <div onClick={saveAndNext} className={styles.prepareReportNavText4}>Save and go to next report</div>
        <div onClick={onClick} className={styles.prepareReportNavText5}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      {showingMessage && (
        <div className={styles.showingMessages}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <g clip-path="url(#clip0_948_56182)">
              <path d="M14.5 27C21.4036 27 27 21.4036 27 14.5C27 7.59644 21.4036 2 14.5 2C7.59644 2 2 7.59644 2 14.5C2 21.4036 7.59644 27 14.5 27Z" stroke="#373737" stroke-width="1.33" stroke-miterlimit="10" />
              <path d="M14.5003 18.6667C17.3768 18.6667 19.7087 16.3348 19.7087 13.4583C19.7087 10.5819 17.3768 8.25 14.5003 8.25C11.6238 8.25 9.29199 10.5819 9.29199 13.4583C9.29199 16.3348 11.6238 18.6667 14.5003 18.6667Z" stroke="#373737" stroke-width="1.33" stroke-miterlimit="10" />
              <path d="M6.14014 23.7938C6.92479 22.2511 8.12102 20.9556 9.59642 20.0508C11.0718 19.1459 12.7688 18.667 14.4996 18.667C16.2304 18.667 17.9274 19.1459 19.4028 20.0508C20.8782 20.9556 22.0745 22.2511 22.8591 23.7938" stroke="#373737" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
            </g><defs>
              <clipPath id="clip0_948_56182">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className={styles.showingMessagesText1}>Changing to new patient report</div>

        </div>
      )}
      <div className={styles.patientinfo}>
        <div className={styles.inputFieldParent}>
          <div className={styles.inputField}>
            <div className={styles.nameParent}>
              <div className={styles.name}>Name:</div>
              <div className={styles.div}>*</div>
            </div>
            <div className={styles.abhinavDutta}>{originalData.metadata.user.name}</div>

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
            <div className={styles.abhinavDutta}>{originalData.metadata.user.age}</div>

          </div>
          <div className={styles.inputField}>
            <div className={styles.ageParent}>
              <div className={styles.name}>Gender:</div>
              <div className={styles.div}>*</div>
            </div>
            {originalData.metadata.user.gender===1?
            <div className={styles.abhinavDutta}>Male</div>:
            <div className={styles.abhinavDutta}>Female</div>
      }

          </div>
          <div className={styles.inputField}>
            <div className={styles.ageParent}>
              <div className={styles.name}>Phone:</div>
              <div className={styles.div}>*</div>
            </div>
            <div className={styles.abhinavDutta}>{originalData.metadata.user.phoneNumber}</div>

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
            <div className={styles.abhinavDutta}>{originalData.createdAt}</div>
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

              <div className={styles.interpretationOfHaemoglobin}>
                Interpretation of Haemoglobin:
              </div>


              <div className={styles.aboutTest}>
                Hemoglobin is a protein in your red blood cells that carries
                oxygen to your body's organs and tissues and transports carbon
                dioxide from your organs and tissues back to your lungs. If a
                hemoglobin test reveals that your hemoglobin level is lower than
                normal, it means you have a low red blood cell count (anemia).
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
                    <path d="M3.75 9.13867H14.25M14.25 9.13867L9.75 4.63867M14.25 9.13867L9.75 13.6387" stroke="#0067DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
          {fileData ?
            <div className={styles.showingImage}>
              <div className={styles.uploadImgeBox1}>Uploaded image</div>
              <img className={styles.showingImageBox} src={URL.createObjectURL(fileData)} />

            </div>
            : ""
          }
        </div>
      </div>

    </>
  );
};

export default PatientDetails;
