import styles from "./KitEfficiency.module.css";

const KitEfficiency = () => {
  return (
    <div className={styles.kitefficiency}>
      <div className={styles.medicolineinjectionParent}>
        <img
          className={styles.medicolineinjectionIcon}
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/7645/7645138.png"
        />
        <div className={styles.kit}>Kit</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.kitEfficiencyParent}>
            <div className={styles.kitEfficiency}>Kit Efficiency</div>
            <div className={styles.dropdown}>
              <div className={styles.labelParent}>
                <div className={styles.label}>Label</div>
                <div className={styles.div}>*</div>
              </div>
              <div className={styles.searchfatParent}>
                <img
                  className={styles.searchfatIcon}
                  alt=""
                  src="/searchfat1.svg"
                />
                <div className={styles.text}>Blood test kits</div>
                <img
                  className={styles.arrowaltdownIcon}
                  alt=""
                  src="/arrowaltdown1.svg"
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
        <div className={styles.frameContainer}>
          <div className={styles.dropdownWrapper}>
            <div className={styles.dropdown1}>
              <div className={styles.labelGroup}>
                <div className={styles.label1}>Showing for</div>
                <div className={styles.div1}>*</div>
              </div>
              <div className={styles.searchfatGroup}>
                <img
                  className={styles.searchfatIcon}
                  alt=""
                  src="/searchfat.svg"
                />
                <div className={styles.text2}>Jul 12- Jul 28</div>
                <img
                  className={styles.searchfatIcon}
                  alt=""
                  src="/arrowaltdown.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.kitsUsedParent}>
              <b className={styles.kitsUsed}>Kits used</b>
              <div className={styles.wrapper}>
                <div className={styles.div2}>900</div>
              </div>
            </div>
            <div className={styles.kitsUsedParent}>
              <b className={styles.kitsUsed}>Tests Ran</b>
              <div className={styles.wrapper}>
                <div className={styles.div2}>1000</div>
              </div>
            </div>
            <div className={styles.kitsUsedParent}>
              <b className={styles.kitsUsed}>Kit Efficiency</b>
              <div className={styles.wrapper}>
                <div className={styles.div2}>67%</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.stars02Parent}>
              <img className={styles.stars02Icon} alt="" src="/stars02.svg" />
              <div className={styles.text}>Smart insights</div>
            </div>
            <div className={styles.insight}>Insight</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitEfficiency;
