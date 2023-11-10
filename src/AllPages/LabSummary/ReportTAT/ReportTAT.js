// import React from 'react'

// const ReportTAT = () => {
//   return (
//     <div>ReportTAT</div>
//   )
// }

// export default ReportTAT


import React from 'react'
import styles from "./ReportTAT.module.css";
const data = [
    {
        "id": 1,
        "testName": "Addf",
        "TAT": 300,
     
    },
    {
        "id": 2,
        "testName": "Addf",
        "TAT": 180,
      
    },
    {
        "id": 3,
        "testName": "Addf",
        "TAT": 420,
    },
    {
        "id": 4,
        "testName": "Addf",
        "TAT": 240,
    },
    {
        "id": 5,
        "testName": "Addf",
        "TAT": 300,
     
    },
    {
        "id": 6,
        "testName": "Addf",
        "TAT": 180,
      
    },
    {
        "id": 7,
        "testName": "Addf",
        "TAT": 420,
    },
    {
        "id": 8,
        "testName": "Addf",
        "TAT": 240,
    },
    
]

const ReportTAT = () => {
    return (
        <div className={styles.moneycollection}>
            <div className={styles.frameParent}>
                <div className={styles.moneyCollectionParent}>

                    <div className={styles.moneyCollection}>Report TAT</div>
                    <div className={styles.dropdown}>
                        <div className={styles.labelParent}>
                            <div className={styles.label}>Label</div>
                            <div className={styles.div}>*</div>
                        </div>
                        <div className={styles.searchfatParent}>
                            <img
                                className={styles.searchfatIcon}
                                alt=""
                                src="/Image/StartHere/searchfat.svg"
                            />
                            <div className={styles.text}>Jul 14 – Jul 20</div>
                            <img
                                className={styles.arrowaltdownIcon}
                                alt=""
                                src="/Image/StartHere/arrowaltdown.svg"
                            />
                        </div>
                        <div className={styles.helpText}>Help text</div>
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
            <div className={styles.groupParent}>

                <div className={styles.frameGroup}>

                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.leftAlignedid}>#Id</th>
                                    <th className={styles.leftAligned}>Test Name</th>
                                    <th className={styles.rightAligned}>Report TAT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((doctor, index) => (
                                    <tr key={index}>
                                        <td className={styles.leftAlignedid}>{doctor.id}</td>
                                        <td className={styles.leftAligned}>{doctor.testName}</td>
                                        <td className={styles.rightAligned}>{doctor.TAT}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReportTAT;
