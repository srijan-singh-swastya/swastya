import styles from "./KitEfficiency.module.css";
import { useState } from "react";
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const KitEfficiency = () => {
  const [dates, setDates] = useState([])
  const [startDate, setStaetDate] = useState("");
  const [endDate, setEndtDate] = useState("");

  const handleChange = (value) => {
    if (value) {
      setStaetDate(value[0]?.format('DD-MM-YYYY'))
      setEndtDate(value[1]?.format('DD-MM-YYYY'))
    }
  }
  console.log(startDate)
  console.log(endDate)
  return (
    <div className={styles.kitefficiency}>
      <div className={styles.medicolineinjectionParent}>

        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
          <path d="M23.0382 9.33883L25.3952 11.6959M23.0382 9.33883L20.6812 6.98181M23.0382 9.33883L25.3952 6.98181M19.7383 6.039C20.1065 6.40719 20.6812 6.98181 20.6812 6.98181M26.338 12.6387C25.9698 12.2705 25.3952 11.6959 25.3952 11.6959M25.3952 11.6959L20.6812 16.4099M20.6812 6.98181L15.9671 11.6959M13.6101 21.5954V21.5954C14.1308 22.116 14.975 22.116 15.4957 21.5953L20.6812 16.4099M13.6101 21.5954L13.1387 22.0668C12.3576 22.8478 11.0913 22.8478 10.3103 22.0668V22.0668V22.0668C9.5292 21.2857 9.5292 20.0194 10.3103 19.2383L10.7817 18.7669M13.6101 21.5954L10.7817 18.7669M10.7817 18.7669V18.7669C10.261 18.2462 10.261 17.402 10.7817 16.8813L15.9671 11.6959M15.9671 11.6959L20.6812 16.4099M25.3952 6.98181L24.4783 6.06489C24.4615 6.04809 24.4506 6.02627 24.4474 6.00274C24.4445 5.98205 24.4696 5.96959 24.4844 5.98436L26.3926 7.89264C26.4074 7.90741 26.3949 7.93249 26.3742 7.92963C26.3507 7.92638 26.3289 7.91553 26.3121 7.89874L25.3952 6.98181Z" stroke="#22202A" stroke-width="2" stroke-linecap="round" />
          <path d="M6.4388 25.9382L10.3105 22.0664" stroke="#22202A" stroke-width="2" stroke-linecap="round" />
          <path d="M15.9662 20.1791L15.0234 19.2363" stroke="#22202A" stroke-width="2" stroke-linecap="round" />
          <path d="M17.3803 18.7651L16.4375 17.8223" stroke="#22202A" stroke-width="2" stroke-linecap="round" />
          <path d="M18.7944 17.351L17.8516 16.4082" stroke="#22202A" stroke-width="2" stroke-linecap="round" />
        </svg>
        <div className={styles.kit}>Kit</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.kitEfficiencyParent}>
            <div className={styles.kitEfficiency}>Kit Efficiency</div>
            <div className={styles.dropdown}>

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
              <RangePicker
                // onChange={(values)=>{
                //   setDates(values)
                // }}
                // picker="month"
                className={styles.searchfatGroup}
                onChange={(value) => { handleChange(value) }}

              />
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
