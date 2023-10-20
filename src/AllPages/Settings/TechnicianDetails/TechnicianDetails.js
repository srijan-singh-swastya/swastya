import React from 'react';
import styles from './TechnicianDetails.module.css'; // Import the CSS module

const TechnicianDetails = () => {
  const technicianData = [
    {
      "SrNo": 1,
      "Name": "John Doe",
      "PhoneNumber": "123-456-7890",
      "Role": "Technician",
    },
    {
      "SrNo": 2,
      "Name": "Jane Smith",
      "PhoneNumber": "987-654-3210",
      "Role": "Supervisor",
    },
    // Add more technician entries here
  ];
  
  return (
    <div className={styles.technicianDetails}>
      <div className={styles.technicianDetailsrow}>
        <div><h1>Technician Details</h1></div>
        <div><button>Add technician</button></div>
      </div>
      <table className={styles.detailsTable}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>SrNo</th>
            <th className={styles.tableHeader}>Name</th>
            <th className={styles.tableHeader}>Phone Number</th>
            <th className={styles.tableHeader}>Role</th>
            <th className={styles.tableHeader}>Action</th>
          </tr>
        </thead>
        <tbody>
          {technicianData.map((entry, index) => (
            <tr key={entry.SrNo}>
              <td className={styles.tableData}>{entry.SrNo}</td>
              <td className={styles.tableData}>{entry.Name}</td>
              <td className={styles.tableData}>{entry.PhoneNumber}</td>
              <td className={styles.tableData}>{entry.Role}</td>
              <td className={styles.tableData}>
                <button className={styles.editButton}>Edit</button>
                <button className={styles.deleteButton}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TechnicianDetails;
