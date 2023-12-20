import React from 'react'
import { useState } from 'react';
import styles from "./MoneyPending.module.css";
import { Doughnut } from 'react-chartjs-2';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
const MoneyPending = () => {
  const reportNotCollected = 413;
  const reportNotGenerated = 121
  const data = {
    labels: [
      'Report Not Collected',
      'Report Not Generated',

    ],
    datasets: [{
      label: 'My First Dataset',
      data: [reportNotCollected, reportNotGenerated],
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4
    }]

  };
  const options = {
    legend: {
      display: false, // Hide the legend
    },
    cutoutPercentage: 50,
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
          <div className={styles.moneyCollection}>Money Pending</div>
          <div className={styles.dropdown}>
            <RangePicker
              // onChange={(values)=>{
              //   setDates(values)
              // }}
              picker="month"
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
        <div className={styles.image160Parent}>
          {/* <img className={styles.image160Icon} alt="" src="/Image/StartHere/image-160@2x.png" /> */}
          <div className={styles.groupChild} />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.totalCollectionParent}>
            <div className={styles.totalCollection}>Total Pending</div>
            <div className={styles.div1}>₹19,083.98</div>
          </div>
          <div className={styles.pieParent}>
            <div className={styles.pieIcon} style={{ width: '300px', height: '169px' }}>

              <Doughnut data={data} options={options} />
            </div>
            {/* <img className={styles.pieIcon} alt="" src="/Image/StartHere/pie.svg" /> */}
            <div className={styles.frameContainer}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/Image/StartHere/vector-165.svg"
                />
                <div className={styles.totalCollectionParent}>
                  <div className={styles.cash}>Report Not collected</div>
                  <div className={styles.div2}>{reportNotCollected}</div>
                </div>
              </div>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/Image/StartHere/vector-166.svg"
                />
                <div className={styles.totalCollectionParent}>
                  <div className={styles.cash}>Report Not Generated</div>
                  <div className={styles.div3}>{reportNotGenerated}</div>
                </div>
              </div>
              {/* <div className={styles.vectorGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/Image/StartHere/vector-167.svg"
                />
                <div className={styles.totalCollectionParent}>
                  <div className={styles.cash}>Net Banking</div>
                  <div className={styles.div4}>₹2,834.13</div>
                </div>
              </div> */}
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

export default MoneyPending;
