
import React from 'react'
import styles from "./LabSummaryDiscount.module.css";
import { Bar } from 'react-chartjs-2';
const LabSummaryDiscount = () => {
  const people = ["Harsh","Puja","Rahul"]
  const value = [22,290,332]
  // Sample data for the bar chart
  const data = {

    labels: people,
    datasets: [
      {
        label: "Discount Given",
        data: value,
        backgroundColor:  'rgba(54, 162, 235, 0.6)',
        borderColor: [
     
          'rgba(54, 162, 235, 1)',
        
        ],
        borderWidth: 7,
        barThickness: 8,
        barPercentage:.2,
        // grouped:true,
        // maxBarThickness: 21,
        indexAxis: false
      },
    ],

  };
  const options = {
    responsive: true, // Set to true to make it responsive
    maintainAspectRatio: false, // Set to false to define your own width and height
    width: 300, // Specify the width here
    height: 900, // Specify the height here
    legend: {
      display: false, // Hide the legend
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
          <div className={styles.moneyCollection}>Discount</div>
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
            <div className={styles.totalCollection}>Total Discount</div>
            <div className={styles.div1}>₹19,083.98</div>
          </div>
          <div className={styles.pieParent}>
            <div className={styles.barLayout} >
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

export default LabSummaryDiscount;
