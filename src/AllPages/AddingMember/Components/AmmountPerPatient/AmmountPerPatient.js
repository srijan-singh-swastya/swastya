import styles from "./AmmountPerPatient.module.css";
const AmmountPerPatient = () => {
  return (
    <div className={styles.ammountperpatient}>
      <div className={styles.ammountperpatientInner}>
        <div className={styles.frameParent}>
          <div className={styles.wrapper}>
            <div className={styles.div}>2</div>
          </div>
          <div className={styles.text}>Total amount per patient</div>
          <div className={styles.dropdown}>
            <div className={styles.labelParent}>
              <div className={styles.label}>Label</div>
              <div className={styles.div1}>*</div>
            </div>
            <div className={styles.searchfatParent}>
              <img
                className={styles.searchfatIcon}
                alt=""
                src="/undefined.png"
              />
              <div className={styles.text1}>Abhinav Dutta</div>
              <img
                className={styles.arrowaltdownIcon}
                alt=""
                src="/undefined1.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.particularsWrapper}>
            <div className={styles.particulars}>Particulars</div>
          </div>
          <div className={styles.amountWrapper}>
            <div className={styles.particulars}>Amount(₹)</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.kalicharanGhoshParent}>
              <div className={styles.kalicharanGhosh}>Kalicharan Ghosh</div>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.haemoglobinTestParent}>
                  <b className={styles.haemoglobinTest}>Haemoglobin Test</b>
                  <img
                    className={styles.arrowaltdownIcon1}
                    alt=""
                    src="/undefined2.png"
                  />
                </div>
                <div className={styles.container}>
                  <div className={styles.div2}>450.00</div>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.haemoglobinTestParent}>
                  <b className={styles.haemoglobinTest}>Lipid Profile</b>
                  <img
                    className={styles.arrowaltdownIcon1}
                    alt=""
                    src="/undefined2.png"
                  />
                </div>
                <div className={styles.container}>
                  <div className={styles.div2}>200.00</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.kalicharanGhoshParent}>
              <div className={styles.abhinavDutta}>Abhinav Dutta</div>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.haemoglobinTestParent}>
                  <b className={styles.haemoglobinTest}>Haemoglobin Test</b>
                  <img
                    className={styles.arrowaltdownIcon1}
                    alt=""
                    src="/undefined2.png"
                  />
                </div>
                <div className={styles.container}>
                  <div className={styles.div2}>450.00</div>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.haemoglobinTestParent}>
                  <b className={styles.haemoglobinTest}>Lipid Profile</b>
                  <img
                    className={styles.arrowaltdownIcon1}
                    alt=""
                    src="/undefined2.png"
                  />
                </div>
                <div className={styles.container}>
                  <div className={styles.div2}>200.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent9}>
          <div className={styles.particularsWrapper}>
            <div className={styles.div}>TOTAL</div>
          </div>
          <div className={styles.wrapper3}>
            <b className={styles.particulars}>₹1300.00</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmmountPerPatient;
