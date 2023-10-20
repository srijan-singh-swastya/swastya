import styles from "./Overview.module.css";

const Overview = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.currencyRupeeCircleParent}>
        <img
          className={styles.currencyRupeeCircleIcon}
          alt=""
          src="/Image/LabSummaryLeft/currencyrupeecircle1.svg"
        />
        <div className={styles.revenue}>Revenue</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.overviewParent}>
            <div className={styles.overview1}>Overview</div>
            <button className={styles.dropdown}>
              <div className={styles.labelParent}>
                <div className={styles.label}>Label</div>
                <div className={styles.div}>*</div>
              </div>
              <div className={styles.searchfatParent}>
                <img
                  className={styles.searchfatIcon}
                  alt=""
                  src="/Image/LabSummaryLeft/searchfat1.svg"
                />
                <div className={styles.text}>12 Jun - 17 Jun</div>
                <img
                  className={styles.arrowaltdownIcon}
                  alt=""
                  src="/Image/LabSummaryLeft/arrowaltdown.svg"
                />
              </div>
            </button>
          </div>
          <button className={styles.button}>
            <div className={styles.buttonSize}>
              <img
                className={styles.arrowdownloadIcon}
                alt=""
                src="/Image/LabSummaryLeft/arrowdownload.svg"
              />
              <div className={styles.text1}>Download report</div>
              <img
                className={styles.arrowforwardIcon}
                alt=""
                src="/Image/LabSummaryLeft/arrowforward.svg"
              />
            </div>
          </button>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.majesticonsmoneyLineWrapper}>
              <img
                className={styles.currencyRupeeCircleIcon}
                alt=""
                src="/Image/LabSummaryLeft/majesticonsmoneyline.svg"
              />
            </div>
            <div className={styles.totalRevenueParent}>
              <div className={styles.totalRevenue}>Total Revenue</div>
              <div className={styles.parent}>
                <div className={styles.div1}>₹19,083.98</div>
                <div className={styles.caretupParent}>
                  <img
                    className={styles.arrowaltdownIcon}
                    alt=""
                    src="/Image/LabSummaryLeft/cornerdownright.svg"
                  />
                  <div className={styles.div2}>2.4%</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.percent03Wrapper}>
              <img
                className={styles.currencyRupeeCircleIcon}
                alt=""
                src="/Image/LabSummaryLeft/percent03.svg"
              />
            </div>
            <div className={styles.totalRevenueParent}>
              <div className={styles.totalRevenue}>Total Discount</div>
              <div className={styles.parent}>
                <div className={styles.div1}>₹1,987.00</div>
                <div className={styles.caretupParent}>
                  <img
                    className={styles.arrowaltdownIcon}
                    alt=""
                    src="/Image/LabSummaryLeft/cornerdownright.svg"
                  />
                  <div className={styles.div2}>2.4%</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.solarhandMoneyOutlineWrapper}>
              <img
                className={styles.currencyRupeeCircleIcon}
                alt=""
                src="/Image/LabSummaryLeft/solarhandmoneyoutline.svg"
              />
            </div>
            <div className={styles.totalRevenueParent}>
              <div className={styles.totalRevenue}>Total Commission</div>
              <div className={styles.parent}>
                <div className={styles.div1}>₹4,987.90</div>
                <div className={styles.caretupParent}>
                  <img
                    className={styles.arrowaltdownIcon}
                    alt=""
                    src="/Image/LabSummaryLeft/cornerdownright.svg"
                  />
                  <div className={styles.div2}>2.4%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
