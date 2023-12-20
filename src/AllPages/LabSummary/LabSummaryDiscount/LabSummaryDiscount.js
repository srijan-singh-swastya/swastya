
import React from 'react'
import { useState } from 'react';
import styles from "./LabSummaryDiscount.module.css";
import { Bar } from 'react-chartjs-2';

import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const LabSummaryDiscount = () => {
  const people = ["Harsh", "Puja", "Rahul"]
  const value = [22, 290, 332]
  // Sample data for the bar chart
  const data = {

    labels: people,
    datasets: [
      {
        label: "Discount Given",
        data: value,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: [

          'rgba(54, 162, 235, 1)',

        ],
        borderWidth: 7,
        barThickness: 8,
        barPercentage: .2,
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



  const [dates, setDates] = useState([])
  const [startDate, setStaetDate] = useState("");
  const [endDate, setEndtDate] = useState("");

  const handleChange = (value) => {
    if (value) {
      setStaetDate(value[0]?.format('DD-MM-YYYY'))
      setEndtDate(value[1]?.format('DD-MM-YYYY'))
    }
  }
  console.log(startDate)
  console.log(endDate)
  return (
    <div className={styles.moneycollection}>
      <div className={styles.frameParent}>
        <div className={styles.moneyCollectionParent}>
          <div className={styles.moneyCollectionDiscount}>Discount</div>
          <div className={styles.dropdown}>

            <RangePicker
              // onChange={(values)=>{
              //   setDates(values)
              // }}
              // picker="month"
              className={styles.searchfatParent}
              onChange={(value) => { handleChange(value) }}

            />
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
