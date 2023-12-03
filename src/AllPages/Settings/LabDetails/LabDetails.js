import styles from "./LabDetails.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
const LabDetails = () => {
  const [labData, setLabData] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Retrieving the "labId" value from localStorage
      const labId1 = localStorage.getItem('labId');
      const x = {
        labId: labId1,
      }
      if (labId1) {
        try {
          // Making a GET request to the onboard endpoint with the "labId" as a query parameter
          const response = await axios.post('http://localhost:8090/first/v1/read-lab', x);

          // Set the lab data in the component's state
          console.log(response.data.lab)
          setLabData(response.data.lab);
        } catch (err) {
          // Handle errors and display the error message from the server
          console.error(err);
        }
      } else {
        console.log('Lab ID not found in localStorage.');
      }
    };

    fetchData();
  }, []);
  const handelEditClick = () => {
    // alert("cdsf")
    console.log(labData)
    setEditMode(!editMode)
  }
  const handelSaveClick = async () => {
    setEditMode(!editMode)
    const x = {
      lab: labData,
    }
    try {
      // Making a POST request to the update-lab endpoint
      const res = await axios.post(`http://localhost:8090/first/v1/update-lab`, x)
      alert("labdetails updated successfully")
    }
    catch (err) {
      console.log(err)

    }
  }

  return (
    <div className={styles.labdetails}>
      <div className={styles.frameParent}>
        <div className={styles.forgotPasswordParent}>
          <b className={styles.forgotPassword}>Lab details</b>
          {editMode ?
            <b onClick={handelSaveClick} className={styles.editButton}>Save</b> :
            <b onClick={handelEditClick} className={styles.editButton}>Edit</b>}
        </div>
      </div>


      <div className={styles.frameGroup}>
        <div className={styles.inputFieldParent}>
          <div className={styles.inputField}>
            <div className={styles.labelParent}>
              <div className={styles.label}>Name of Lab</div>
            </div>
            <div className={styles.inputFieldflagsParent}>
            {editMode ? (
                <input
                  type="text"
                  value={labData.name}
                  onChange={(e) => setLabData({ ...labData, name: e.target.value })}
                  className={styles.text1}
                />
              ) : (
                <div className={styles.text1}>{labData.name}</div>
              )}
            </div>
          </div>
          <div className={styles.inputField}>
            <div className={styles.labelParent}>
              <div className={styles.label}>Lab address</div>
            </div>
            <div className={styles.inputFieldflagsParent}>
            {editMode ? (
                <input
                  type="text"
                  value={labData.address}
                  onChange={(e) => setLabData({ ...labData, address: e.target.value })}
                  className={styles.text1}
                />
              ) : (
                <div className={styles.text1}>{labData.address}</div>
              )}
            </div>
          </div>


          <div className={styles.inputField}>
            <div className={styles.labelParent}>
              <div className={styles.label}>Pin code</div>
            </div>
            <div className={styles.inputFieldflagsParent}>
            {editMode ? (
                <input
                  type="text"
                  value={labData.pinCode}
                  onChange={(e) => setLabData({ ...labData, pinCode: e.target.value })}
                  className={styles.text1}
                />
              ) : (
                <div className={styles.text1}>{labData.pinCode}</div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.inputFieldParent}>
          <div className={styles.inputField}>
            <div className={styles.labelParent}>
              <div className={styles.label}>Point of contact</div>
            </div>
            <div className={styles.inputFieldflagsParent}>
            {editMode ? (
                <input
                  type="text"
                  value={labData.poc}
                  onChange={(e) => setLabData({ ...labData, poc: e.target.value })}
                  className={styles.text1}
                />
              ) : (
                <div className={styles.text1}>{labData.poc}</div>
              )}
       
            </div>
          </div>
          <div className={styles.inputField}>
            <div className={styles.labelParent}>
              <div className={styles.label}>Lab ID</div>
            </div>
            <div className={styles.inputFieldflagsParent}>
            {editMode ? (
                <input
                  type="text"
                  value={labData.localId}
                  onChange={(e) => setLabData({ ...labData, localId: e.target.value })}
                  className={styles.text1}
                />
              ) : (
                <div className={styles.text1}>{labData.localId}</div>
              )}
            </div>
          </div>

          <div className={styles.inputField}>
            <div className={styles.labelParent}>
              <div className={styles.label}>Plan</div>
            </div>
            <div className={styles.inputFieldflagsParent}>
            {editMode ? (
                <input
                  type="text"
                  value={labData.plan}
                  onChange={(e) => setLabData({ ...labData, plan: e.target.value })}
                  className={styles.text1}
                />
              ) : (
                <div className={styles.text1}>{labData.plan}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDetails;
