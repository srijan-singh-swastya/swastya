import styles from "./AddTest.module.css";
const AddTest = () => {
  return (
    <div className={styles.addtest}>
      <div className={styles.addtestInner}>
        <div className={styles.frameParent}>
          <div className={styles.wrapper}>
            <div className={styles.div}>2</div>
          </div>
          <div className={styles.text}>Add tests</div>
        </div>
        <div className={styles.setas}>
          <input type="checkbox" className={styles.setasCheckbox} />
          <div className={styles.setasText}>Same tests as Primary contact </div>
        </div>
      </div>
      <div className={styles.addtestChild}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.testNameWrapper}>
              <b className={styles.testName}>Test name</b>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.priceWrapper}>
              <b className={styles.testName}>Price (₹)</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dropdownParent}>
        <div className={styles.dropdown1}>
          
          <div className={styles.searchfatGroup}>
            <input
              className={styles.text2}
              type="text"
              placeholder="Select tests"
            />
            <button className={styles.arrowaltdown}>
              <img
                className={styles.arrowaltdownIcon1}
                alt=""
                src="Image/AddTest/arrowaltdown1.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.inputField}>
         
          <div className={styles.searchfatContainer}>
            
            <div className={styles.text1}>₹ shows automaticallyy</div>
            <img
              className={styles.searchfatIcon}
              alt=""
              src="Image/AddTest/arrowaltdown4.svg"
            />
          </div>
        </div>
      </div>

      <button className={styles.buttonWrapper}>
        <div className={styles.button}>
          <div className={styles.buttonSize}>
            <img className={styles.addIcon} alt="" src="Image/AddTest/add.svg" />
            <div className={styles.text12}>Add 5 more rows</div>
            <img
              className={styles.arrowforwardIcon}
              alt=""
              src="/arrowforward4.svg"
            />
          </div>
        </div>
      </button>

    </div>
  );
};

export default AddTest;
