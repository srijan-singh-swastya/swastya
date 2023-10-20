import styles from "./LabSummaryLeft.module.css";

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
          <button className={styles.normalTabs}>
            <div className={styles.cornerDownRightParent}>
              <img
                className={styles.cornerDownRightIcon}
                alt=""
                 src="/Image/LabSummaryLeft/cornerdownright.svg"
              />
              <div className={styles.option}>Overview</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                 src="/Image/LabSummaryLeft/placeholder1.svg"
              />
            </div>
          </button>
        </div>
       
        <div className={styles.normalTabsWrapper}>
          <button className={styles.normalTabs2}>
            <div className={styles.cornerDownRightGroup}>
              <img
                className={styles.cornerDownRightIcon}
                alt=""
                 src="/Image/LabSummaryLeft/cornerdownright.svg"
              />
              <div className={styles.option2}>Money collection</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                 src="/Image/LabSummaryLeft/placeholder.svg"
              />
            </div>
          </button>
        </div>
        <div className={styles.normalTabsWrapper}>
          <button className={styles.normalTabs2}>
            <div className={styles.cornerDownRightGroup}>
              <img
                className={styles.cornerDownRightIcon}
                alt=""
                 src="/Image/LabSummaryLeft/cornerdownright.svg"
              />
              <div className={styles.option2}>Money pending</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                 src="/Image/LabSummaryLeft/placeholder.svg"
              />
            </div>
          </button>
        </div>
        <div className={styles.normalTabsWrapper}>
          <button className={styles.normalTabs2}>
            <div className={styles.cornerDownRightGroup}>
              <img
                className={styles.cornerDownRightIcon}
                alt=""
                 src="/Image/LabSummaryLeft/cornerdownright.svg"
              />
              <div className={styles.option2}>Discount</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                 src="/Image/LabSummaryLeft/placeholder.svg"
              />
            </div>
          </button>
        </div>
        <div className={styles.normalTabsWrapper}>
          <button className={styles.normalTabs2}>
            <div className={styles.cornerDownRightGroup}>
              <img
                className={styles.cornerDownRightIcon}
                alt=""
                 src="/Image/LabSummaryLeft/cornerdownright.svg"
              />
              <div className={styles.option2}>Doctor commission</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                 src="/Image/LabSummaryLeft/placeholder.svg"
              />
            </div>
          </button>
        </div>
        <div className={styles.normalTabsWrapper}>
          <button className={styles.normalTabs2}>
            <div className={styles.cornerDownRightGroup}>
              <img
                className={styles.cornerDownRightIcon}
                alt=""
                 src="/Image/LabSummaryLeft/cornerdownright.svg"
              />
              <div className={styles.option2}>Major Business</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                 src="/Image/LabSummaryLeft/placeholder.svg"
              />
            </div>
          </button>
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
            <img
              className={styles.placeholderIcon}
              alt=""
               src="/Image/LabSummaryLeft/placeholder.svg"
            />
          </div>
        </div>
        <div className={styles.normalTabsWrapper}>
          <button className={styles.normalTabs2}>
            <div className={styles.cornerDownRightGroup}>
              <img
                className={styles.cornerDownRightIcon}
                alt=""
                 src="/Image/LabSummaryLeft/cornerdownright.svg"
              />
              <div className={styles.option2}>Kit Efficiency</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                 src="/Image/LabSummaryLeft/placeholder.svg"
              />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.currencyRupeeCircleParent}>
            <img className={styles.file02Icon} alt=""  src="/Image/LabSummaryLeft/file02.svg" />
            <div className={styles.revenue}>Report</div>
            <img
              className={styles.placeholderIcon}
              alt=""
               src="/Image/LabSummaryLeft/placeholder.svg"
            />
          </div>
        </div>
        <div className={styles.normalTabsWrapper}>
          <button className={styles.normalTabs2}>
            <div className={styles.cornerDownRightGroup}>
              <img
                className={styles.cornerDownRightIcon}
                alt=""
                 src="/Image/LabSummaryLeft/cornerdownright.svg"
              />
              <div className={styles.option2}>Report TAT</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                 src="/Image/LabSummaryLeft/placeholder.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabSummaryLeft;
