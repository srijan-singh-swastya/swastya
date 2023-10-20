import { useCallback } from "react";
import styles from "./TechnicianDashbord.module.css";

const TechnicianDashbord = () => {
    const onButtonSizeContainerClick = useCallback(() => {
        // Please sync "master doc" to the project
    }, []);

    const onFrameButtonClick = useCallback(() => {
        // Please sync "master doc" to the project
    }, []);

    const onFrameButton2Click = useCallback(() => {
        // Please sync "master doc" to the project
    }, []);

    return (
        <div className={styles.dashbord}>
             <div className={styles.dashbordTop}>
                <div>Swastya.ai</div>
                <div>LogOut</div>
             </div>
            <div className={styles.welcomename}>Hi Satish Kumar</div>
            <div className={styles.welcomenames}>Welcome back👋</div>
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
                            <div className={styles.text1}>View reports and sign</div>
                            <img
                                className={styles.arrowforwardIcon}
                                alt=""
                                src="/Image/Dashbord/arrowforward3.svg"
                            />
                        </div>
                    </button>
                </div>
                </div>



            <div className={styles.frameParent4}>
                <div className={styles.sectionHeaderParent}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.content}>
                            <div className={styles.textAndSupportingText}>
                                <div className={styles.text4}>Entries and reports</div>
                               
                            </div>
                        </div>
                        <img className={styles.dividerIcon} alt="" src="/Image/Dashbord/divider.svg" />
                    </div>
                    <div className={styles.frameParent5}>
                        
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
                        <button className={styles.frameButton} onClick={onFrameButton2Click}>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnicianDashbord;
