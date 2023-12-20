import { useCallback, useState } from "react";
import styles from "./Dashbord.module.css";
import { useNavigate } from "react-router-dom";
import { DatePicker } from 'antd';
import moment from 'moment';
import Item from 'antd/es/list/Item';
const { RangePicker } = DatePicker;
const Dashbord = () => {
  const [date, setDate] = useState(false)
  const handleDate = () => {
    setDate(!date)
  }
  const navigate = useNavigate()
  const onButtonSizeContainerClick = useCallback(() => {
    navigate("/signReportHome")
    // Please sync "master doc" to the project
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/allReport")
    // Please sync "master doc" to the project
  }, []);

  const onFrameButton1Click = useCallback(() => {
    navigate("/labsSummary/")
    // Please sync "master doc" to the project
  }, []);

  const onFrameButton2Click = useCallback(() => {
    navigate("/kitInventorys")
    // Please sync "master doc" to the project
  }, []);

  const onFrameButton3Click = useCallback(() => {
    navigate("/settings")
    // Please sync "master doc" to the project
  }, []);



  // all about dates
  const [startDate, setStaetDate] = useState("");
  const [endDate, setEndtDate] = useState("");

  const handleChange = (value) => {
    if (value) {
      setStaetDate(value[0]?.format('DD-MM-YYYY'))
      setEndtDate(value[1]?.format('DD-MM-YYYY'))
    }
    else {
      setStaetDate("")
      setEndtDate("")
    }

  }
  console.log(startDate)
  console.log(endDate)


  return (
    <div className={styles.dashbord}>
      <div className={styles.dashbordTop}>
        <div>Swastya.ai</div>
        {/* <div>LogOut</div> */}
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>

          <div className={styles.frameContainer}>
            <div className={styles.numberParent}>
              <b className={styles.number1}>30</b>
              <div className={styles.heading}>Reports pending to be signed</div>
            </div>
            <div className={styles.maskGroupParent}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/Image/Dashbord/mask-group.svg"
              />
              <img
                className={styles.warningcircleIcon}
                alt=""
                src="/Image/Dashbord/warningcircle1.svg"
              />
            </div>
          </div>
          <button className={styles.button}>
            <div
              className={styles.buttonSize}
              onClick={onButtonSizeContainerClick}
            >
              <img
                className={styles.fileDownloadInLc}
                alt=""
                src="/Image/Dashbord/file-download-inlc3.svg"
              />
              <div className={styles.text1}>View reports and sign</div>
              <img
                className={styles.arrowforwardIcon}
                alt=""
                src="/Image/Dashbord/arrowforward3.svg"
              />
            </div>
          </button>
        </div>
        <div className={styles.autoAddedFrameParent}>
          <div className={styles.autoAddedFrame}>
            <div className={styles.labSummaryForParent}>
              <div className={styles.labSummaryFor}>{`Lab summary for `}</div>
              <div onClick={handleDate} className={styles.dropdown}>

                {/* <div className={styles.searchfatParent}> */}
                <RangePicker
                  // onChange={(values)=>{
                  //   setDates(values)
                  // }}
                  // picker="month"
                  className={styles.searchfatParent}
                  onChange={(value) => { handleChange(value) }}

                />
                {/* </div> */}

              </div>

            </div>

            <button onClick={onFrameButton1Click} className={styles.button1}>
              <div className={styles.buttonSize1}>
                <img
                  className={styles.fileDownloadInLc}
                  alt=""
                  src="/Image/Dashbord/file-download-inlc3.svg"
                />
                <div className={styles.text3}>View detailed summary</div>
                <img
                  className={styles.arrowforwardIcon}
                  alt=""
                  src="/Image/Dashbord/arrowforward1.svg"
                />
              </div>
            </button>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.majesticonsmoneyLineWrapper}>
                <img
                  className={styles.majesticonsmoneyLine}
                  alt=""
                  src="/Image/Dashbord/majesticonsmoneyline.svg"
                />
              </div>
              <div className={styles.totalRevenueParent}>
                <div className={styles.totalRevenue}>Total Revenue</div>
         
                  <div className={styles.div1}>₹19,083.98</div>
                 
             
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.percent03Wrapper}>
                <img
                  className={styles.majesticonsmoneyLine}
                  alt=""
                  src="/Image/Dashbord/percent03.svg"
                />
              </div>
              <div className={styles.totalRevenueParent}>
                <div className={styles.totalRevenue}>Total Discount</div>
         
                  <div className={styles.div1}>₹1,987.00</div>
         
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.solarhandMoneyOutlineWrapper}>
                <img
                  className={styles.majesticonsmoneyLine}
                  alt=""
                  src="/Image/Dashbord/solarhandmoneyoutline.svg"
                />
              </div>
              <div className={styles.totalRevenueParent}>
                <div className={styles.totalRevenue}>Total Commission</div>
      
                  <div className={styles.div1}>₹4,987.90</div>
                  
      
              </div>
            </div>
          </div>
        </div>
      </div>






      <div className={styles.frameParent4}>
        <div className={styles.sectionHeaderParent}>
          <div className={styles.sectionHeader}>
            <div className={styles.content}>
              <div className={styles.textAndSupportingText}>
                <div className={styles.text4}>Entries and reports</div>
                <div className={styles.supportingText}>
                  Keep track of vendors and their security ratings.
                </div>
              </div>
            </div>
            <img className={styles.dividerIcon} alt="" src="/Image/Dashbord/divider.svg" />
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.frameParent6}>
              <div className={styles.filePlus03Wrapper}>
                <img
                  className={styles.filePlus03Icon}
                  alt=""
                  src="/Image/Dashbord/fileplus03.svg"
                />
              </div>
              <div className={styles.headingAndNumber}>
                <b className={styles.heading1}>Add patient detail and test</b>
                <div className={styles.numberAndBadge}>
                  <div className={styles.number2}>
                    Create new patient or add tests for existing patient
                  </div>
                  <div className={styles.badgeWrap1}>
                    <div className={styles.badge}>
                      <img
                        className={styles.arrowUpIcon}
                        alt=""
                        src="/Image/Dashbord/arrowup.svg"
                      />
                      <div className={styles.text5}>10%</div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.arrowRightIcon}
                alt=""
                src="/Image/Dashbord/arrowright.svg"
              />
            </div>
            <button className={styles.frameButton} onClick={onFrameButtonClick}>
              <div className={styles.folderWrapper}>
                <img
                  className={styles.filePlus03Icon}
                  alt=""
                  src="/Image/Dashbord/folder.svg"
                />
              </div>
              <div className={styles.headingAndNumber}>
                <b className={styles.heading2}>All entries</b>
                <div className={styles.numberAndBadge1}>
                  <div className={styles.number3}>
                    See test entries and their report statuses
                  </div>
                  <div className={styles.badgeWrap2}>
                    <div className={styles.badge}>
                      <img
                        className={styles.arrowUpIcon}
                        alt=""
                        src="/Image/Dashbord/arrowup.svg"
                      />
                      <div className={styles.text6}>10%</div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.arrowRightIcon}
                alt=""
                src="/Image/Dashbord/arrowright.svg"
              />
            </button>
          </div>
        </div>






        <div className={styles.sectionHeaderParent}>
          <div className={styles.sectionHeader}>
            <div className={styles.content}>
              <div className={styles.textAndSupportingText}>
                <div className={styles.text4}>More actions</div>
                <div className={styles.supportingText}>
                  Keep track of vendors and their security ratings.
                </div>
              </div>
            </div>
            <img className={styles.dividerIcon} alt="" src="/Image/Dashbord/divider.svg" />
          </div>
          <div className={styles.frameParent5}>
            <button
              className={styles.frameButton}
              onClick={onFrameButton1Click}
            >
              <div className={styles.lineChartUp03Wrapper}>
                <img
                  className={styles.filePlus03Icon}
                  alt=""
                  src="/Image/Dashbord/linechartup03.svg"
                />
              </div>
              <div className={styles.headingAndNumber}>
                <b className={styles.heading2}>Lab summary</b>
                <div className={styles.numberAndBadge1}>
                  <div className={styles.number3}>
                    Report of all documents and day wise breakdown
                  </div>
                  <div className={styles.badgeWrap2}>
                    <div className={styles.badge}>
                      <img
                        className={styles.arrowUpIcon}
                        alt=""
                        src="/Image/Dashbord/arrowup.svg"
                      />
                      <div className={styles.text6}>10%</div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.arrowRightIcon}
                alt=""
                src="/Image/Dashbord/arrowright.svg"
              />
            </button>
            <button
              className={styles.frameButton}
              onClick={onFrameButton2Click}
            >
              <div className={styles.containerWrapper}>
                <img
                  className={styles.filePlus03Icon}
                  alt=""
                  src="/Image/Dashbord/container.svg"
                />
              </div>
              <div className={styles.headingAndNumber}>
                <b className={styles.heading2}>Kit inventory</b>
                <div className={styles.numberAndBadge1}>
                  <div className={styles.number3}>
                    See kit efficiency and add kits from here
                  </div>
                  <div className={styles.badgeWrap2}>
                    <div className={styles.badge}>
                      <img
                        className={styles.arrowUpIcon}
                        alt=""
                        src="/Image/Dashbord/arrowup.svg"
                      />
                      <div className={styles.text6}>10%</div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.arrowRightIcon}
                alt=""
                src="/Image/Dashbord/arrowright.svg"
              />
            </button>
            <div className={styles.frameParent6}>
              <div className={styles.percent03Container}>
                <img
                  className={styles.filePlus03Icon}
                  alt=""
                  src="/Image/Dashbord/percent031.svg"
                />
              </div>
              <div className={styles.headingAndNumber}>
                <b className={styles.heading1}>Doctor commission</b>
                <div className={styles.numberAndBadge}>
                  <div className={styles.number2}>
                    External doctors commission and payments
                  </div>
                  <div className={styles.badgeWrap1}>
                    <div className={styles.badge}>
                      <img
                        className={styles.arrowUpIcon}
                        alt=""
                        src="/Image/Dashbord/arrowup.svg"
                      />
                      <div className={styles.text5}>10%</div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.arrowRightIcon}
                alt=""
                src="/Image/Dashbord/arrowright.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.sectionHeaderParent}>
          <div className={styles.sectionHeader}>
            <div className={styles.content}>
              <div className={styles.textAndSupportingText}>
                <div className={styles.text4}>Settings</div>
                <div className={styles.supportingText}>
                  Keep track of vendors and their security ratings.
                </div>
              </div>
            </div>
            <img className={styles.dividerIcon} alt="" src="/Image/Dashbord/divider.svg" />
          </div>
          <button className={styles.frameWrapper} onClick={onFrameButton3Click}>
            <div className={styles.frameParent11}>
              <div className={styles.settings01Wrapper}>
                <img
                  className={styles.filePlus03Icon}
                  alt=""
                  src="/Image/Dashbord/settings01.svg"
                />
              </div>
              <div className={styles.headingAndNumber}>
                <b className={styles.heading2}>Setting</b>
                <div className={styles.numberAndBadge1}>
                  <div className={styles.number3}>
                    Add technicians, test price list and more
                  </div>
                  <div className={styles.badgeWrap2}>
                    <div className={styles.badge}>
                      <img
                        className={styles.arrowUpIcon}
                        alt=""
                        src="/Image/Dashbord/arrowup.svg"
                      />
                      <div className={styles.text6}>10%</div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.arrowRightIcon}
                alt=""
                src="/Image/Dashbord/arrowright.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
