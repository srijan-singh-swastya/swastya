import styles from "./AddDetailsTop.module.css";
const AddDetailsTop = () => {
  return (
    <div className={styles.adddetailstop}>
      <div className={styles.adddetailstopInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameWrapper}>
            <div className={styles.text}>Add details and tests</div>
          </div>
        </div>
      </div>
      <button className={styles.button}>
        <div className={styles.buttonSize}>
          <img
            className={styles.fileDownloadInLc}
            alt=""
            src="/file-download-inlc5.svg"
          />
          <div className={styles.text1}>Save and add new member</div>
          <img
            className={styles.arrowforwardIcon}
            alt=""
            src="/arrowforward6.svg"
          />
        </div>
      </button>
      <div className={styles.button1}>
        <button className={styles.buttonSize1}>
          <img
            className={styles.fileDownloadInLc}
            alt=""
            src="/file-download-inlc6.svg"
          />
          <div className={styles.text2}>Save</div>
          <img
            className={styles.arrowforwardIcon}
            alt=""
            src="/arrowforward6.svg"
          />
        </button>
      </div>
      <button className={styles.close}>
        <img className={styles.declineIcon} alt="" src="/Image/AddDetailsTop/decline.svg" />
      </button>
    </div>
  );
};

export default AddDetailsTop;
