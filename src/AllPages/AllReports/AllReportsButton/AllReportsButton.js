import styles from "./AllReportsButton.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientDetails from "../../PrepareReport/PatientDetails/PatientDetails";
import UpdatePayment from "../../UpdatePayment/UpdatePayment";
import RejectedReportPopUp from "../../../Features/SignReport/RejectedReportPopUp/RejectedReportPopUp";
import { Tooltip as ReactTooltip } from "react-tooltip";



import { DatePicker } from 'antd';
import moment from 'moment';
import Item from 'antd/es/list/Item';
const { RangePicker } = DatePicker;
const AllReportsButton = () => {
  const navigate = useNavigate()

  const AlltestData = [
    [
      {
        id: "1233",
        patientDetails: "John Doe",
        mobileNimber: "9801500214",
        age: "30",
        sex: "Male",
        paymentStatus: "Advance paid",
        updatePaymentStatus: "Uodate payment",
        dateOfEntry: "2023-11-01",
        testNames: [
          {
            "name": "mt1",
            "template": {
              "bound": "15"
            }
          },
          {
            "name": "mt2",
            "template": {
              "bound": "15"
            }
          }
        ],
        testStatus: "Report rejected",
        printStatus: "Printed",
        prepareReport: "Edit Report",
        print: "someIcon"
      },
      {
        id: "1234",
        patientDetails: "John Doe",
        mobileNimber: "9801500214",
        age: "30",
        sex: "Male",
        paymentStatus: "Advance paid",
        updatePaymentStatus: "Uodate payment",
        dateOfEntry: "2023-11-01",
        testNames: [
          {
            "name": "mjjt1",
            "template": {
              "bound": "15"
            }
          },
          {
            "name": "dhmt2",
            "template": {
              "bound": "15"
            }
          }
        ],
        testStatus: "Report accepted",
        printStatus: "Printed",
        prepareReport: "Prepare Report",
        print: "someIcon"
      },
    ],
    [
      {
        id: "1235",
        patientDetails: "John Doe",
        mobileNimber: "9801500214",
        age: "30",
        sex: "Male",
        paymentStatus: "Full pending",
        updatePaymentStatus: "Uodate payment",
        dateOfEntry: "2023-11-01",
        testNames: [
          {
            "name": "ddfmt1",
            "template": {
              "bound": "15"
            }
          },
          {
            "name": "mt2",
            "template": {
              "bound": "15"
            }
          }
        ],
        testStatus: "Report generated",
        printStatus: "Not Printed",
        prepareReport: "Prepare Report",
        print: "someIcon"
      },
    ],
    [
      {
        id: "1236",
        patientDetails: "John Doe",
        mobileNimber: "9801500214",
        age: "30",
        sex: "Male",
        paymentStatus: "Full pending",
        updatePaymentStatus: "Uodate payment",
        dateOfEntry: "2023-11-01",
        testNames: [
          {
            "name": "11mt1",
            "template": {
              "bound": "15"
            }
          },
          {
            "name": "smt2",
            "template": {
              "bound": "15"
            }
          },
          {
            "name": "sdmt2",
            "template": {
              "bound": "15"
            }
          },
         
        ],
        testStatus: "Report rejected",
        printStatus: "Not Printed",
        prepareReport: "Prepare Report",
        print: "someIcon"
      },
    ],
  ];

  const KontestData = AlltestData.flatMap(group =>
    group.reduce((result, { id, testNames }) => {
      const tests = testNames.map(test => test.name).join(' ');
      const existingEntry = result.find(entry => entry.id === id);
      if (existingEntry) {
        existingEntry.test += ` ${tests}`;
      } else {
        result.push({ id, test: tests });
      }
      return result;
    }, [])
  );

  console.log(KontestData);

  const [checkedIds, setCheckedIds] = useState([]);
  const [filteredData, setFilteredData] = useState(AlltestData);
  const [mobileNumberFilter, setMobileNumberFilter] = useState('');
  const [prepareReportPopUp, setPrepareReportPopUp] = useState(false)
  const [editReportPopUp, setEditReportPopUp] = useState(false)
  const [updatePaymentPopUp, setUpdatePaymentPopUp] = useState(false)
  const [active, setActive] = useState("All entries")
  const handleCheckboxChange = (id) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };
  console.log(checkedIds)

  const handleTestStatusFilter = (e) => {
    setActive(e)

    const completedData = AlltestData.map((group) =>
      group.filter((data) => data.testStatus === e)
    );

    setFilteredData(completedData);
  };
  const handleAllEntries = (e) => {
    setActive(e)
    setFilteredData(AlltestData);

  }

  const handelNumberFilter = (searchText) => {
    if (!searchText) {
      setFilteredData(AlltestData); // Reset the filtered data if no search text is provided
    } else {
      const filtered = AlltestData.map((group) =>
        group.filter((data) =>
          data.mobileNimber.includes(searchText) || data.id.includes(searchText)
        )
      );

      setFilteredData(filtered);
    }
  };

  const goBack = () => {
    window.history.back();
  };
  const handelCreateNewEntery = () => {
    navigate("/addingMembers")
  }
  const handelPrapereReport = (e) => {
    if (e === "Prepare Report") {
      setPrepareReportPopUp(!prepareReportPopUp)
    }
    else if (e === "Edit Report") {
      setEditReportPopUp(!editReportPopUp)
    }
  }
  const handleEditReportPopUpClick = () => {
    setEditReportPopUp(!editReportPopUp)
  }
  const handlePrepareReportPopUpClick = () => {
    setPrepareReportPopUp(!prepareReportPopUp);
    // alert('Child component clicked!');
  };
  const handelUpdatePaymentStatusPopUp = () => {
    setUpdatePaymentPopUp(!updatePaymentPopUp)
    // alert('Child component clicked!');
  }
  const handleUpdatePaymentPopupClick = () => {
    setUpdatePaymentPopUp(!updatePaymentPopUp)
    alert('Jay Shree Ram');
  }
  let setCount = 0;



  const [startDate, setStaetDate] = useState("");
  const [endDate, setEndtDate] = useState("");

  const handleChange = (value) => {
    if (value) {
      setStaetDate(value[0]?.format('DD-MM-YYYY'))
      setEndtDate(value[1]?.format('DD-MM-YYYY'))
    }
    else{
      setStaetDate("")
      setEndtDate("")
    }

  }
  console.log(startDate)
  console.log(endDate)

  return (<>
    <div className={styles.allreportsbutton}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.arrowLeftParent}>
                <img
                  onClick={goBack}
                  className={styles.arrowLeftIcon}
                  alt=""
                  src="/Image/AllReports/arrowleft.svg"
                />
                <div className={styles.text}>All entries</div>
              </div>
            </div>
            {/* <div className={styles.dropdown}> */}

         
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
          <button onClick={handelCreateNewEntery} className={styles.button}>
            <div className={styles.buttonSize}>

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
            <button onClick={() => handleAllEntries("All entries")} className={styles.metricTabs1} >
              <div className={`${styles.metricTabsChild} ${active === 'All entries' ? styles.activeBox : ''}`}
              >
                <div className={styles.option1}>All entries</div>
                <div className={styles.div2}>2</div>
              </div>
            </button>
            <button onClick={() => handleTestStatusFilter("Report pending")} className={styles.metricTabs1}>
              <div className={`${styles.metricTabsChild} ${active === 'Report pending' ? styles.activeBox : ''}`}>
                <div className={styles.option1}>Report pending</div>
                <div className={styles.div2}>2</div>
              </div>
            </button>
            <button onClick={() => handleTestStatusFilter("Report generated")} className={styles.metricTabs1}>
              <div className={`${styles.metricTabsChild} ${active === 'Report generated' ? styles.activeBox : ''}`}>
                <div className={styles.option1}>Report generated</div>
                <div className={styles.div2}>0</div>
              </div>
            </button>
            <button onClick={() => handleTestStatusFilter("Report approved")} className={styles.metricTabs1}>
              <div className={`${styles.metricTabsChild} ${active === 'Report approved' ? styles.activeBox : ''}`}>
                <div className={styles.option1}>Report approved</div>
                <div className={styles.div2}>0</div>
              </div>
            </button>
            <div>
              <button onClick={() => handleTestStatusFilter("Report rejected")} className={styles.metricTabs1}>
                <div className={`${styles.metricTabsChild} ${active === 'Report rejected' ? styles.activeBox : ''}`}>
                  <div className={styles.option1}>Report rejected</div>
                  <div className={styles.div2}>0</div>
                </div>
                <div className={styles.rejectedIcon} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7471 9.41503 20.7189 6.93678 18.8911 5.10893C17.0632 3.28108 14.585 2.25292 12 2.25ZM11.25 7.5C11.25 7.30109 11.329 7.11032 11.4697 6.96967C11.6103 6.82902 11.8011 6.75 12 6.75C12.1989 6.75 12.3897 6.82902 12.5303 6.96967C12.671 7.11032 12.75 7.30109 12.75 7.5V12.75C12.75 12.9489 12.671 13.1397 12.5303 13.2803C12.3897 13.421 12.1989 13.5 12 13.5C11.8011 13.5 11.6103 13.421 11.4697 13.2803C11.329 13.1397 11.25 12.9489 11.25 12.75V7.5ZM12 17.25C11.7775 17.25 11.56 17.184 11.375 17.0604C11.19 16.9368 11.0458 16.7611 10.9606 16.5555C10.8755 16.35 10.8532 16.1238 10.8966 15.9055C10.94 15.6873 11.0472 15.4868 11.2045 15.3295C11.3618 15.1722 11.5623 15.065 11.7805 15.0216C11.9988 14.9782 12.225 15.0005 12.4305 15.0856C12.6361 15.1708 12.8118 15.315 12.9354 15.5C13.059 15.685 13.125 15.9025 13.125 16.125C13.125 16.4234 13.0065 16.7095 12.7955 16.9205C12.5845 17.1315 12.2984 17.25 12 17.25Z" fill="#E81A1A" />
                  </svg>
                </div>
              </button>

            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.searchWrapper}>
          <div className={styles.search}>

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
                onChange={(e) => handelNumberFilter(e.target.value)}
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
    <div>

      <div className={styles.allDataLayout}>
        <div className={styles.allDataLayoutTop}>
          <div className={styles.allDataLayoutTopBox}>
            <div className={styles.allDataLayoutTopIcon}>

              <input
                type="checkbox"
                className={styles.allDataLayoutToptexts}
                checked

              />
            </div>
            <div className={styles.allDataLayoutTopId}>
              <div className={styles.allDataLayoutToptexts}>##Id</div>
            </div>
            <div className={styles.allDataLayoutTopPatientDetails}>
              <div className={styles.allDataLayoutToptexts}>Patient  details</div>
            </div>
            <div className={styles.allDataLayoutTopAgeSexBox}>
              <div className={styles.allDataLayoutToptexts}>Age&Sex</div>
            </div>
            <div className={styles.allDataLayoutTopPaymentStatusBox}>
              <div className={styles.allDataLayoutToptexts}>Payment status</div>

            </div>
            <div className={styles.allDataLayoutTopUpdatePaymentStatusBox}>
              <div className={styles.allDataLayoutToptexts}>Update Payment status</div>
            </div>
            <div className={styles.allDataLayoutTopDateOfEnteryBox}>
              <div className={styles.allDataLayoutToptexts}>Date of entry</div>

            </div>
            <div className={styles.allDataLayoutTopTestNameBox}>
              <div className={styles.allDataLayoutToptexts}>Test names</div>


            </div>

            <div className={styles.allDataLayoutTopTestStatusBox}>
              <div className={styles.allDataLayoutToptexts}>Test status</div>

            </div>
            <div className={styles.allDataLayoutTopPrintStatusBox}>
              <div className={styles.allDataLayoutToptexts}>Print status</div>

            </div>
            <div className={styles.allDataLayoutTopPrepareReportBox}>
              <div className={styles.allDataLayoutToptexts}>Prepare Report</div>

            </div>
            <div className={styles.allDataLayoutTopPrintBox}>
              <div className={styles.allDataLayoutToptexts}>Print</div>

            </div>

          </div>
        </div>
        <div className={styles.allDataLayoutBottom}>

          {/* <button onClick={handleShowIfChecked}>Show Checked IDs</button> */}
          {/* {console.log(filteredData.filter(arr => arr.length > 0))} */}
          {filteredData.filter(arr => arr.length > 0).map((group, groupIndex) => (
            <div className={styles.allDataLayoutBottomBox} key={groupIndex}>
              {group.map((data, dataIndex) => (
                <div className={styles.bundeelContainer} key={dataIndex}>

                  <div className={styles.allDataLayoutTopIcon}>
                    {/* <div className={styles.allDataLayoutToptexts}>c</div> */}
                    <input
                      type="checkbox"
                      className={styles.allDataLayoutToptexts}
                      checked={checkedIds.includes(data.id)}
                      onChange={() => handleCheckboxChange(data.id)}
                    />
                  </div>
                  <div className={styles.allDataLayoutTopId}>
                    <div className={styles.allDataLayoutTextId}>{data.id}</div>
                  </div>
                  <div className={styles.allDataLayoutTopPatientDetails}>
                    <div className={styles.papa}>
                      <div className={styles.allDataLayoutTextPatientDetails}>{data.patientDetails} </div>
                      {setCount === 0 ?
                        <div className={styles.allDataLayoutTextPatientDetails}> {data.mobileNimber}</div> : ""
                      }
                    </div>

                  </div>
                  <div className={styles.allDataLayoutTopAgeSexBox}>
                    <div className={styles.allDataLayoutTopTextAgeSex}>{data.age}{data.sex}</div>
                  </div>
                  <div className={styles.allDataLayoutTopPaymentStatusBox}>
                    {data.paymentStatus === "Advance paid" ?
                      <div className={styles.allDataLayoutTopTextPaymentStatusPaid}>{data.paymentStatus}</div>
                      :
                      <div className={styles.allDataLayoutTopTextPaymentStatus}>{data.paymentStatus}</div>
                    }

                  </div>
                  <div onClick={handelUpdatePaymentStatusPopUp} className={styles.allDataLayoutTopUpdatePaymentStatusBox}>
                    <div className={styles.allDataLayoutTopTextUpdatePaymentStatus}>{data.updatePaymentStatus}</div>
                  </div>
                  <div className={styles.allDataLayoutTopDateOfEnteryBox}>
                    <div className={styles.allDataLayoutTopTextAgeSex}>{data.dateOfEntry}</div>

                  </div>
                  {/* <div data-tooltip-id="my-tooltip-1" className={styles.allDataLayoutTopTestNameBox}>
                    <div className={styles.allDataLayoutTopTextAgeSex}>Test names</div>
                    <div className={styles.allDataLayoutTopTextAgeSex}>Test names</div>

                  </div>
                  <ReactTooltip
                    id="my-tooltip-1"
                    place="bottom"
                    content={dataIndex}
                  /> */}

                  {/* <div className={styles.allDataLayoutTopTestNameBox}>
                    {data.testNames.map((name, testNameIndex) => (
                      <div
                      data-for="tool"
                      data-tip="eerer"
                        key={`${dataIndex}-${testNameIndex}`}
                        data-tip={`tooltip-${dataIndex}-${testNameIndex}`}
                        className={styles.allDataLayoutTopTextAgeSex}
                        data-html={true}
                      >
                        {name.name}
                      </div>
                    ))}
                        <ReactTooltip id="tool"/>
                  </div>
               */}




                  <div className={styles.allDataLayoutTopTestNameBox}>
                    {data.testNames.map((name, testNameIndex) => (
                      <div key={`${dataIndex}-${testNameIndex}`} data-tooltip-id={`tooltip-${data.id}`} className={styles.allDataLayoutTopTextAgeSex}>
                        {name.name}

                      </div>

                    ))}

                    {KontestData.map((name, testNameIndex) => (
                      <ReactTooltip key={`tooltip-${dataIndex}-${testNameIndex}`} id={`tooltip-${name.id}`}>
                        {name.test}
                      </ReactTooltip>
                    ))}
                  </div>




                  {/* <div className={styles.allDataLayoutTopTestNameBox}>
      {data.testNames.map((name, testNameIndex) => (
        <div key={`${dataIndex}-${testNameIndex}`} data-tip={`tooltip-${dataIndex}-${testNameIndex}`} className={styles.allDataLayoutTopTextAgeSex}>
          {name.name}
        </div>
      ))}

      {data.testNames.map((name, testNameIndex) => (
        <ReactTooltip key={`tooltip-${dataIndex}-${testNameIndex}`} id={`tooltip-${dataIndex}-${testNameIndex}`}>
          {name.name}
        </ReactTooltip>
      ))}
    </div> */}
                  <div className={styles.allDataLayoutTopTestStatusBox}>
                    {data.testStatus === "Report generated" ?
                      <div className={styles.allDataLayoutTopTextTestStatus1}>{data.testStatus}</div> : ""
                    }
                    {data.testStatus === "Report accepted" ?
                      <div className={styles.allDataLayoutTopTextTestStatus2}>{data.testStatus}</div> : ""
                    }
                    {data.testStatus === "Report rejected" ?
                      <div className={styles.allDataLayoutTopTextTestStatus3}>{data.testStatus}</div> : ""
                    }
                  </div>
                  <div className={styles.allDataLayoutTopPrintStatusBox}>
                    {data.printStatus === "Not Printed" ?
                      <div className={styles.allDataLayoutTopTextNotPrinted}>{data.printStatus}</div> :
                      <div className={styles.allDataLayoutTopTextPrinted}>{data.printStatus}</div>
                    }

                  </div>
                  <div onClick={() => handelPrapereReport(data.prepareReport)} className={styles.allDataLayoutTopPatientDetails}>
                    <div className={styles.allDataLayoutTopTextPrepareReport}>{data.prepareReport}</div>

                  </div>
                  <div className={styles.allDataLayoutTopPrintBox}>
                    <div className={styles.allDataLayoutTopTextIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <g clip-path="url(#clip0_562_18361)">
                          <path d="M12.0622 4.66634V3.46634C12.0622 2.7196 12.0622 2.34624 11.9169 2.06102C11.789 1.81014 11.585 1.60616 11.3342 1.47833C11.0489 1.33301 10.6756 1.33301 9.92884 1.33301H6.19551C5.44877 1.33301 5.0754 1.33301 4.79019 1.47833C4.5393 1.60616 4.33533 1.81014 4.2075 2.06102C4.06217 2.34624 4.06217 2.7196 4.06217 3.46634V4.66634M4.06217 11.9997C3.44219 11.9997 3.1322 11.9997 2.87787 11.9315C2.18769 11.7466 1.64859 11.2075 1.46366 10.5173C1.39551 10.263 1.39551 9.95299 1.39551 9.33301V7.86634C1.39551 6.74624 1.39551 6.18618 1.61349 5.75836C1.80524 5.38204 2.1112 5.07608 2.48753 4.88433C2.91535 4.66634 3.4754 4.66634 4.59551 4.66634H11.5288C12.6489 4.66634 13.209 4.66634 13.6368 4.88433C14.0131 5.07608 14.3191 5.38204 14.5109 5.75836C14.7288 6.18618 14.7288 6.74624 14.7288 7.86634V9.33301C14.7288 9.95299 14.7288 10.263 14.6607 10.5173C14.4758 11.2075 13.9367 11.7466 13.2465 11.9315C12.9921 11.9997 12.6822 11.9997 12.0622 11.9997M10.0622 6.99967H12.0622M6.19551 14.6663H9.92884C10.6756 14.6663 11.0489 14.6663 11.3342 14.521C11.585 14.3932 11.789 14.1892 11.9169 13.9383C12.0622 13.6531 12.0622 13.2797 12.0622 12.533V11.4663C12.0622 10.7196 12.0622 10.3462 11.9169 10.061C11.789 9.81014 11.585 9.60616 11.3342 9.47833C11.0489 9.33301 10.6756 9.33301 9.92884 9.33301H6.19551C5.44877 9.33301 5.0754 9.33301 4.79019 9.47833C4.5393 9.60616 4.33533 9.81014 4.2075 10.061C4.06217 10.3462 4.06217 10.7196 4.06217 11.4663V12.533C4.06217 13.2797 4.06217 13.6531 4.2075 13.9383C4.33533 14.1892 4.5393 14.3932 4.79019 14.521C5.0754 14.6663 5.44877 14.6663 6.19551 14.6663Z" stroke="#0067DF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_562_18361">
                            <rect width="16" height="16" fill="white" transform="translate(0.0625)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                  </div>

                </div>

              ))}

            </div>
          ))}
          {
            prepareReportPopUp ?
              <div className={styles.modalOverlay}>
                <div className={styles.detailsAndTestLayout}>
                  {/* patientDetails from Prapare report component */}
                  <PatientDetails onClick={handlePrepareReportPopUpClick} />
                </div>
              </div> : ""
          }
          {
            editReportPopUp ?
              <div className={styles.modalOverlay}>
                <div className={styles.detailsAndTestLayout}>
                  {/* UpdatePayment from Prapare report component */}
                  <RejectedReportPopUp onClick={handleEditReportPopUpClick} />
                </div>
              </div> : ""
          }
          {
            updatePaymentPopUp ?
              <div className={styles.modalOverlay}>
                <div className={styles.detailsAndTestLayout}>
                  <UpdatePayment onClick={handleUpdatePaymentPopupClick} />
                </div>
              </div> : ""
          }

        </div>
      </div>
    </div>
  </>
  );
};

export default AllReportsButton;
