import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './TechnicianDetails.module.css'; // Import the CSS module

const TechnicianDetails = () => {
  const [technicianData, setTechnicianData] = useState([]);
  const [addTechnician, setAddTechnician] = useState(false)
  const [editIndex, setEditIndex] = useState(-1);
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
          const response = await axios.post('http://localhost:8090/first/v1/list-employees', x);

          // Set the lab data in the component's state
          console.log(response.data.employee)
          setTechnicianData(response.data.employee);
        } catch (err) {
          // Handle errors and display the error message from the server
          console.error(err);
        }
      } else {
        console.log('Lab ID not found in localStorage.');
      }
    };

    fetchData();
  }, [addTechnician]);
 

  const handleEditEmployee = (index) => {
    setEditIndex(index);
  };



  const handleSaveEmployee = async (index) => {
    // console.log(technicianData[index]); 
    setEditIndex(-1); // Exit edit mode after saving changes

    const x = {
      employee: technicianData[index],
    }
    try {
      // Making a POST request to the update-employee endpoint
      const res = await axios.post(`http://localhost:8090/first/v1/update-employee`, x)
      alert("update-employee updated successfully")
    }
    catch (err) {
      console.log(err)

    }
  };

  const handleDeleteEmployee = async (index) => {
    const x = {
      id: technicianData[index].id,
    }
    try {
      // Making a POST request to the update-employee endpoint
      const res = await axios.post(`http://localhost:8090/first/v1/delete-employee`, x)
      alert("delete-employee successfully")
      setAddTechnician(false)
      setTechnicianData((prevData) => {
        const newData = prevData.filter((employee) => employee.id !== x.id);
        return newData;
      });

    }
    catch (err) {
      console.log(err)

    }
  }




  //all abot adding new technician in below
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    role: '',
    labId: localStorage.getItem('labId')
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleAddTechnician = () => {
    setAddTechnician(!addTechnician)
  }


  const handleSave = async () => {
    console.log(formData)
    const labId1 = localStorage.getItem('labId');
    const x = {
      employee: formData,
    }
    if (labId1) {
      try {
        // Making a post request to the create-employee endpoint 
        const response = await axios.post('http://localhost:8090/first/v1/create-employee', x);

        alert("emp created")
        setAddTechnician(!addTechnician)
        setFormData({
          name: '',
          phoneNumber: '',
          role: '',
          labId: localStorage.getItem('labId')
        })
      } catch (err) {
        // Handle errors message from the server
        console.error(err);
        alert("emp not created")
      }
    } else {
      console.log('Lab ID not found in localStorage.');
    }
   

  }
  const handelSaveandAddNewTechnician = async() => {
    console.log(formData)
    const labId1 = localStorage.getItem('labId');
    const x = {
      employee: formData,
    }
    if (labId1) {
      try {
        // Making a post request to the create-employee endpoint 
        const response = await axios.post('http://localhost:8090/first/v1/create-employee', x);

        alert("emp created")
      } catch (err) {
        // Handle errors message from the server
        console.error(err);
        alert("emp not created")
      }
    } else {
      console.log('Lab ID not found in localStorage.');
    }
    setFormData({
      name: '',
      phoneNumber: '',
      role: '',
      labId: localStorage.getItem('labId')
    })
  }
  const handleCancle = () => {
    setAddTechnician(!addTechnician)
  }

  return (
    <div className={styles.technicianDetails}>
      <div className={styles.technicianDetailsrow}>
        <div><h1>Technician Details</h1></div>
        <div><button onClick={handleAddTechnician}>Add technician</button></div>
      </div>


      <div className={styles.detailsTable}>
        <div className={styles.detailsTableHeader}>
          <div className={styles.SrNoBox}>SrNo</div>
          <div className={styles.NameBox}>Name</div>
          <div className={styles.PhoneNumberBox}>Phone Number</div>
          <div className={styles.RoleBox}>Role</div>
          <div className={styles.ActionBox}>Action</div>
        </div>
        {technicianData.map((entry, index) => (
          <div className={styles.detailsTableData} key={entry.id}>
            <div className={styles.SrNoBox1}>{index + 1}</div>
            <div className={styles.NameBox1}>
              {editIndex === index ? (
                <input
                  className={styles.inputText}
                  type="text"
                  value={entry.name}
                  onChange={(e) => {
                    const newData = [...technicianData];
                    newData[index].name = e.target.value;
                    setTechnicianData(newData);
                  }}
                />
              ) : (
                entry.name
              )}
            </div>
            <div className={styles.PhoneNumberBox1}>
              {editIndex === index ? (
                <input
                  className={styles.inputText}
                  type="text"
                  value={entry.phoneNumber}
                  onChange={(e) => {
                    const newData = [...technicianData];
                    newData[index].phoneNumber = e.target.value;
                    setTechnicianData(newData);
                  }}
                />
              ) : (
                entry.phoneNumber
              )}
            </div>
            <div className={styles.RoleBox1}>
              {editIndex === index ? (
                <input
                  className={styles.inputText}
                  type="text"
                  value={entry.role}
                  onChange={(e) => {
                    const newData = [...technicianData];
                    newData[index].role = e.target.value;
                    setTechnicianData(newData);
                  }}
                />
              ) : (
                entry.role
              )}
            </div>
            <div className={styles.ActionBox1}>
              {editIndex === index ? (
                <button onClick={() => handleSaveEmployee(index)} className={styles.editButton}>
                  Save
                </button>
              ) : (
                <button onClick={() => handleEditEmployee(index)} className={styles.editButton}>
                  Edit
                </button>
              )}
              <button onClick={() => handleDeleteEmployee(index)} className={styles.deleteButton}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {addTechnician ? <>
        <div className={styles.addTechnicianPopUp}>
          <div className={styles.addTechnicianPopUpContainer}>


            <div className={styles.prepareReportNav}>
              <div className={styles.prepareReportNavText1}>Add technician</div>
              <div onClick={handelSaveandAddNewTechnician} className={styles.prepareReportNavText3}>Save and Add new Technician</div>

              <div onClick={handleSave} className={styles.prepareReportNavText4}>Save</div>

              <div onClick={handleCancle} className={styles.prepareReportNavText5}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 5L12 12M19 19L12 12M12 12L19 5L5 19" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>



            <div className={styles.containerLayout}>
              <div className={styles.container}>
                <div className={styles.row}>
                  <div className={styles.column}>
                    <div className={styles.lableFontSize} htmlFor="name">Name</div>
                    <input
                      className={styles.inputFild}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name"
                      value={formData.name}
                      onChange={handleChange}

                    />
                  </div>
                  <div className={styles.column}>
                    <div className={styles.lableFontSize} htmlFor="phoneNumber">Phone Number</div>
                    <input
                      className={styles.inputFild}
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Enter Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.column}>
                    <div className={styles.lableFontSize} htmlFor="role">Role</div>
                    <input
                      className={styles.inputFild}
                      type="text"
                      name="role"
                      id="role"
                      placeholder="Enter Role"
                      value={formData.role}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </> : ""}
    </div>
  );
};

export default TechnicianDetails;
