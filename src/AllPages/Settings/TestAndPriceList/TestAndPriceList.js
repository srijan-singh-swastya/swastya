import React from 'react';
import styles from './TestAndPriceList.module.css'; // Import the CSS module

const TestAndPriceList = () => {
  const teatList = [
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
      <div className={styles.detailsTable}>
        <div className={styles.detailsTableHeader}>
          <div className={styles.SrNoBox}>SrNo</div>
          <div className={styles.NameBox}>TestId</div>
          <div className={styles.PhoneNumberBox}>Test Name</div>
          <div className={styles.RoleBox}>Cost</div>
          <div className={styles.ActionBox}>Action</div>
        </div>
        {teatList.map((entry, index) => (
          <div className={styles.detailsTableData} key={entry.id}>
            <div className={styles.SrNoBox1}>{entry.SrNo}</div>
            <div className={styles.NameBox1}>
             {entry.TestId}
            </div>
            <div className={styles.PhoneNumberBox1}>
            {entry.TestName}
            </div>
            <div className={styles.RoleBox1}>
            {entry.Cost}
            </div>
            <div className={styles.ActionBox1}>
             
                <button className={styles.editButton}>
                  Edit
                </button>
          
              <button  className={styles.deleteButton}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestAndPriceList;
