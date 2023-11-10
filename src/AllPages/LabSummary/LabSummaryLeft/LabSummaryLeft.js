import styles from "./LabSummaryLeft.module.css";
import { Link } from "react-router-dom";
const LabSummaryLeft = () => {
  return (
    <div className={styles.labsummaryleft}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.currencyRupeeCircleParent}>
            <img
              className={styles.currencyRupeeCircleIcon}
              alt=""
              src="/Image/LabSummaryLeft/currencyrupeecircle.svg"
            />
            <div className={styles.revenue}>Revenue</div>
            <img
              className={styles.placeholderIcon}
              alt=""
              src="/Image/LabSummaryLeft/placeholder.svg"
            />
          </div>
        </div>
        <div className={styles.normalTabsWrapper}>
          <a href="#overview" className={styles.normalTabs}>Overview </a>
        </div>
        <div className={styles.normalTabsWrapper}>
          <a href="#moneyCollection" className={styles.normalTabs}>Money Collection </a>
        </div>
        <div className={styles.normalTabsWrapper}>
          <a href="#moneyPending" className={styles.normalTabs}>Money Pending </a>
        </div>

        <div className={styles.normalTabsWrapper}>
          <a href="#labSummaryDiscount" className={styles.normalTabs}>Discount </a>
        </div>
        <div className={styles.normalTabsWrapper}>
          <a href="#doctorCommition" className={styles.normalTabs}>Doctor Commition </a>
        </div>
        <div className={styles.normalTabsWrapper}>
          <a href="#majorBusiness" className={styles.normalTabs}>Major Business </a>
        </div>

      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.currencyRupeeCircleParent}>
            <img
              className={styles.medicolineinjectionIcon}
              alt=""
              src="/Image/LabSummaryLeft/medicolineinjection1.svg"
            />
            <div className={styles.revenue}>Kit</div>
           
          </div>
        </div>
        <div className={styles.normalTabsWrapper}>
          <a href="#kitEfficiency" className={styles.normalTabs}>Kit Efficiency</a>
        </div>

      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.currencyRupeeCircleParent}>
            <img className={styles.file02Icon} alt="" src="/Image/LabSummaryLeft/file02.svg" />
            <div className={styles.revenue}>Report</div>
          </div>
        </div>
        <div className={styles.normalTabsWrapper}>
          <a href="#reportTAT" className={styles.normalTabs}>Report TAT </a>
        </div>

      </div>
    </div>
  );
};

export default LabSummaryLeft;
