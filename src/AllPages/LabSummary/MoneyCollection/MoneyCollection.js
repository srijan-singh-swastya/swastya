import styles from "./MoneyCollection.module.css";
import { Doughnut } from 'react-chartjs-2';
const MoneyCollection = () => {
  const Cash=12;
  const UPI=121;
  const NetBnking=132;
  const data = {
    labels: [
      'Cash',
      'UPI',
      'Net Banking',
    
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [Cash, UPI, NetBnking],
      backgroundColor: [
        'rgb(54, 162, 235)',       
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
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

  return (
    <div className={styles.moneycollection}>
      <div className={styles.frameParent}>
        <div className={styles.moneyCollectionParent}>
          <div className={styles.moneyCollection}>Money collection</div>
          <div className={styles.dropdown}>

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
            <div className={styles.totalCollection}>Total collection</div>
            <div className={styles.div1}>₹19x,083.98</div>
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
                  <div className={styles.cash}>Cash</div>
                  <div className={styles.div2}>₹{Cash}</div>
                </div>
              </div>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/Image/StartHere/vector-166.svg"
                />
                <div className={styles.totalCollectionParent}>
                  <div className={styles.cash}>UPI</div>
                  <div className={styles.div3}>₹{UPI}</div>
                </div>
              </div>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/Image/StartHere/vector-167.svg"
                />
                <div className={styles.totalCollectionParent}>
                  <div className={styles.cash}>Net Banking</div>
                  <div className={styles.div4}>₹{NetBnking}</div>
                </div>
              </div>
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

export default MoneyCollection;
