
import React from 'react'
import styles from "./MajorBusiness.module.css";
import { Bar } from 'react-chartjs-2';
const MajorBusiness = () => {
  const data = {
    labels: ['Dr Ramu', 'Dr pula', 'Dr ilsa', 'Dr sohar'],
    datasets: [
      {
        label: 'Jan',
        backgroundColor: '#28B6AE',
        // borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        barThickness: 12,
        data: [12, 19, 3, 5],
        barPercentage: 0.8
      },
      {
        label: 'Gap', // Create a dataset for the gap
        backgroundColor: 'transparent',
        borderWidth: 0, // No border for the gap
        barThickness: 12,
        data: [0, 0, 0, 0], // Empty data for the gap
      },
      {
        label: 'Feb',
        backgroundColor: '#8535EB',
        // borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        barThickness: 12,
        data: [15, 28, 4, 7],
        barPercentage: 0.1
      },
      {
        label: 'Gap', // Create a dataset for the gap
        backgroundColor: 'transparent',
        borderWidth: 0, // No border for the gap
        barThickness: 12,
        data: [0, 0, 0, 0], // Empty data for the gap
      },
      
      {
        label: 'mar',
        backgroundColor: "#EABD48",
        // borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        barThickness: 12,
        data: [15, 1, 4, 7],
        barPercentage: 0.8
      },
     

    ],

  };

  const options = {
    responsive: true, // Set to true to make it responsive
    maintainAspectRatio: false, // Set to false to define your own width and height
    width: 300, // Specify the width here
    height: 800, // Specify the height here
    legend: {
      display: false, // Hide the legend
      position: 'top',

    },

    scales: {
      x: {
        display: true, // Hide x-axis grid lines
      },
      y: {
        display: true, // Hide y-axis grid lines
        beginAtZero: true,
      },
    },
    elements: {
      bar: {
        borderWidth: 0,
      },
    },

  };


  return (
    <div className={styles.moneycollection}>
      <div className={styles.frameParent}>
        <div className={styles.moneyCollectionParent}>
          <div className={styles.moneyCollection}>Major Business</div>
          <div className={styles.dropdown}>
            <div className={styles.labelParent}>
              <div className={styles.label}>Label</div>
              <div className={styles.div}>*</div>
            </div>
            <div className={styles.searchfatParent}>
              <img
                className={styles.searchfatIcon}
                alt=""
                src="/Image/StartHere/searchfat.svg"
              />
              <div className={styles.text}>Jul 14 – Jul 20</div>
              <img
                className={styles.arrowaltdownIcon}
                alt=""
                src="/Image/StartHere/arrowaltdown.svg"
              />
            </div>
            <div className={styles.helpText}>Help text</div>
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.buttonSize}>
            <img
              className={styles.arrowdownloadIcon}
              alt=""
              src="/Image/StartHere/arrowdownload.svg"
            />
            <div className={styles.text1}>Download report</div>
            <img
              className={styles.arrowdownloadIcon}
              alt=""
              src="/Image/StartHere/arrowforward.svg"
            />
          </div>
        </button>
      </div>
      <div className={styles.groupParent}>

        <div className={styles.frameGroup}>
          <div className={styles.totalCollectionParent}>
           <div  className={styles.colorBox}> <div className={styles.circleColor1} /> June</div>
           <div className={styles.colorBox}> <div className={styles.circleColor2} /> July</div>
           <div className={styles.colorBox}> <div className={styles.circleColor3} /> Aug</div>



          </div>
          <div className={styles.pieParent}>
            <div className={styles.barLayouts}  >
              <Bar data={data} options={options} />
            </div>


          </div>
          <div className={styles.frameDiv}>
            <div className={styles.stars02Parent}>
              <img className={styles.stars02Icon} alt="" src="/Image/StartHere/stars02.svg" />
              <div className={styles.smartInsights}>Smart insights</div>
            </div>
            <div className={styles.insight}>Insight</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorBusiness;
