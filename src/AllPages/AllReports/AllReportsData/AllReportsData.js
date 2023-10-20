import { useState, useCallback } from "react";

import styles from "./AllReportsData.module.css";

const AllReportsData = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className={styles.frameyyy}>
        <div className={styles.frameyyyInner}>
          <div className={styles.checkboxButtonWrapper}>
            <input className={styles.checkboxButton} type="checkbox" />
          </div>
        </div>
        <div className={styles.frameyyyChild}>
          <div className={styles.wrapper}>
            <div className={styles.div}>3038</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.abhinavDuttaParent}>
            <div className={styles.abhinavDutta}>Abhinav Dutta</div>
            <div className={styles.male}>987653210</div>
          </div>
        </div>
        <div className={styles.frameyyyInner1}>
          <div className={styles.wrapper}>
            <div className={styles.male}>25, Male</div>
          </div>
        </div>
        <div className={styles.frameyyyInner2}>
          <div className={styles.checkboxButtonWrapper}>
            <div className={styles.tag}>
              
              <div className={styles.tag1}>Advance paid</div>
             
            </div>
          </div>
        </div>
        <button className={styles.buttonWrapper}>
          <button className={styles.button}>
            <div className={styles.buttonSize}>
             
              <div className={styles.text}>Update payment</div>
              
            </div>
          </button>
        </button>
        <div className={styles.frameyyyInner3}>
          <div className={styles.checkboxButtonWrapper}>
            <div className={styles.div}>30/01/2023</div>
          </div>
        </div>
        <div className={styles.frameyyyInner4}>
          <div className={styles.wrapper}>
            <div className={styles.male}>Lipid Profile Test, Haemoglo...</div>
          </div>
        </div>
        <div className={styles.tagContainer}>
          <div className={styles.tag2}>
            
            <div className={styles.tag1}>Report generated</div>
            
          </div>
        </div>
        <div className={styles.tagFrame}>
          <div className={styles.tag}>
           
            <div className={styles.tag1}>Not printed</div>
           
          </div>
        </div>
        <button className={styles.buttonContainer} onClick={openFrame}>
          <button className={styles.button}>
            <div className={styles.buttonSize}>
              
              <div className={styles.text}>Prepare Report</div>
              
            </div>
          </button>
        </button>
        <button className={styles.buttonWrapper}>
          <button className={styles.button}>
            <div className={styles.buttonSize}>
              <img className={styles.priIcon} alt="e" src="/Image/AllReports/printer.svg" />
              <div className={styles.text2}>Print</div>
            
            </div>
          </button>
        </button>
      </div>
      
    </>
  );
};

export default AllReportsData;


// export default AllReportsData