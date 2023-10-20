import React from 'react';
import styles from './TestAndPriceList.module.css'; // Import the CSS module

const TestAndPriceList = () => {
  const technicianData = [
    {
      "SrNo": 1,
      "TestId": "J23334",
      "TestName": "sdf",
      "Cost": "233",
    },
    {
      "SrNo": 2,
      "TestId": "J23334",
      "TestName": "sdf",
      "Cost": "233",
    },
    // Add more technician entries here
  ];
  
  return (
    <div className={styles.technicianDetails}>
      <div className={styles.technicianDetailsrow}>
        <div><h1>Test and Price List</h1></div>
        <div><button>Add test and price List</button></div>
      </div>
      <table className={styles.detailsTable}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>SrNo</th>
            <th className={styles.tableHeader}>TestId</th>
            <th className={styles.tableHeader}>TestName</th>
            <th className={styles.tableHeader}>Cost</th>
            <th className={styles.tableHeader}>Action</th>
          </tr>
        </thead>
        <tbody>
          {technicianData.map((entry, index) => (
            <tr key={entry.SrNo}>
              <td className={styles.tableData}>{entry.SrNo}</td>
              <td className={styles.tableData}>{entry.TestId}</td>
              <td className={styles.tableData}>{entry.TestName}</td>
              <td className={styles.tableData}>{entry.Cost}</td>
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

export default TestAndPriceList;
