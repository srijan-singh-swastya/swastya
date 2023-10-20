import React, { useState } from 'react';
import styles from './ReportLetterhead.module.css'; // Import the CSS module

const ReportLetterhead = () => {
  const [reportLetterhead, setReportLetterhead] = useState("https://trbahadurpur.com/wp-content/uploads/2022/06/with-font-768x768.jpg");

  // Function to handle opening file chooser dialog
  const handleFileInput = () => {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  };

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setReportLetterhead(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.reportLetterhead}>
      <div className={styles.header}>
        <div className={styles.leftHeader}><h1>ReportLetterhead</h1></div>
        <div  onClick={handleFileInput}>
          <button className={styles.rightHeader}>Add New ReportLetterhead</button>
        </div>
      </div>
      <div className={styles.uploadSection}>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        {reportLetterhead && (
          <img
            className={styles.reportLetterheadImage}
            src={reportLetterhead}
            alt="Report Letterhead"
          />
        )}
      </div>
    </div>
  );
};

export default ReportLetterhead;
