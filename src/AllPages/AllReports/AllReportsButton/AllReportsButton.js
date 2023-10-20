import styles from "./AllReportsButton.module.css";

const AllReportsButton = () => {
  return (
    <div className={styles.allreportsbutton}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.arrowLeftParent}>
                <img
                  className={styles.arrowLeftIcon}
                  alt=""
                  src="/Image/AllReports/arrowleft.svg"
                />
                <div className={styles.text}>All entries</div>
              </div>
            </div>
            <div className={styles.dropdown}>
              <div className={styles.labelParent}>
                <div className={styles.label}>Label</div>
                <div className={styles.div}>*</div>
              </div>
              <div className={styles.searchfatParent}>
                <img
                  className={styles.searchfatIcon}
                  alt=""
                  src="/Image/AllReports/searchfat2.svg"
                />
                <div className={styles.text1}>12 Jun - 17 Jun</div>
                <button className={styles.arrowaltdown}>
                  <img
                    className={styles.arrowaltdownIcon}
                    alt=""
                    src="/Image/AllReports/arrowaltdown2.svg"
                  />
                </button>
              </div>
              <div className={styles.helpText}>Help text</div>
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.buttonSize}>
              <img
                className={styles.fileDownloadInLc}
                alt=""
                src="/Image/AllReports/file-download-inlc4.svg"
              />
              <div className={styles.text2}>Create new entry</div>
              <img
                className={styles.arrowforwardIcon}
                alt=""
                src="/Image/AllReports/arrowforward4.svg"
              />
            </div>
          </button>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.metricTabsParent}>
            <button className={styles.metricTabs} autoFocus={true}>
              <div className={styles.metricTabsInner}>
                <div className={styles.optionParent}>
                  <div className={styles.option}>All entries</div>
                  <div className={styles.div1}>2</div>
                </div>
              </div>
            </button>
            <button className={styles.metricTabs1}>
              <div className={styles.metricTabsChild}>
                <div className={styles.optionGroup}>
                  <div className={styles.option1}>Report pending</div>
                  <div className={styles.div2}>2</div>
                </div>
              </div>
            </button>
            <button className={styles.metricTabs1}>
              <div className={styles.metricTabsChild}>
                <div className={styles.optionGroup}>
                  <div className={styles.option1}>Report generated</div>
                  <div className={styles.div2}>0</div>
                </div>
              </div>
            </button>
            <button className={styles.metricTabs1}>
              <div className={styles.metricTabsChild}>
                <div className={styles.optionGroup}>
                  <div className={styles.option1}>Report approved</div>
                  <div className={styles.div2}>0</div>
                </div>
              </div>
            </button>
            <button className={styles.metricTabs1}>
              <div className={styles.metricTabsChild}>
                <div className={styles.optionGroup}>
                  <div className={styles.option1}>Report rejected</div>
                  <div className={styles.div2}>0</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.searchWrapper}>
          <div className={styles.search}>
            <div className={styles.labelParent}>
              <div className={styles.label}>Label</div>
              <div className={styles.div6}>*</div>
            </div>
            <div className={styles.searchfatGroup}>
              <img
                className={styles.searchfatIcon1}
                alt=""
                src="/Image/AllReports/searchfat3.svg"
              />
              <input
                className={styles.text3}
                placeholder="Search by ID/ phone number"
                type="text"
              />
              <img
                className={styles.searchfatIcon}
                alt=""
                src="/Image/AllReports/arrowaltdown3.svg"
              />
            </div>
          </div>
        </div>
        <button className={styles.buttonSize1}>
          <img className={styles.printerIcon} alt="" src="/Image/AllReports/printer.svg" />
          <div className={styles.text4}>Print reports</div>
          <img
            className={styles.arrowforwardIcon1}
            alt=""
            src="/Image/AllReports/arrowforward5.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default AllReportsButton;
