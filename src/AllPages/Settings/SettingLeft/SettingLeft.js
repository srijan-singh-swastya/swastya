import styles from "./SettingLeft.module.css";
import { Link } from "react-router-dom";
const SettingLeft = () => {


  return (
    <div className={styles.settingleft}>
      <div className={styles.frameParent}>
        <div className={styles.frameParent}>
          <button className={styles.idParentMain} 
           >
            <Link to="/settings" className={styles.idParent}>
              <img className={styles.idIcon} alt="ee"
                src="/Image/SettingLeft/view-timeline.svg" />
              <div className={styles.linkParent}>
                <div className={styles.link1}>Lab details</div>
              </div>
            </Link>
          </button>
          <button className={styles.idParentMain} >
            <Link to="technicianDetails" className={styles.idParent}>
              <img className={styles.idIcon} alt="" src="/Image/SettingLeft/id.svg" />
              <div className={styles.linkParent}>
                <div className={styles.link1}>Technician details</div>
              </div>
            </Link>
          </button>
          <button className={styles.idParentMain} >
            <Link to="testAndPriceList" className={styles.idParent}>
              <img className={styles.idIcon}
                alt=""
                src="/Image/SettingLeft/view-timeline1.svg" />
              <div className={styles.linkParent}>
                <div className={styles.link1}>Test and price list</div>
              </div>
            </Link>
          </button>

          <button className={styles.idParentMain}>
            <Link to="reportLetterhead" className={styles.idParent}>
              <img className={styles.idIcon} alt="" src="/Image/SettingLeft/gallery.svg" />
              <div className={styles.linkParent}>
                <div className={styles.link1}>Report letterhead</div>
              </div>
            </Link>
          </button>

          <button className={styles.idParentMain}>
            <Link to="discount" className={styles.idParent}>
              <img
                className={styles.idIcon}
                alt=""
                src="/Image/SettingLeft/percent03.svg"
              />
              <div className={styles.linkParent}>
                <div className={styles.link1}>Discount</div>
              </div>
            </Link>
          </button>

        </div>
        <button className={styles.idParent}>
          <img className={styles.idIcon} alt="" src="/Image/SettingLeft/logout.svg" />
          <div className={styles.linkParent}>
            <div className={styles.link1}>Log out</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SettingLeft;
