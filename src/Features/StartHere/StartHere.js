import { useCallback } from "react";
import styles from "./StartHere.module.css";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const StartHere = () => {
  const navigate = useNavigate();

const onLoginTextClick=()=>{
  navigate('/login/');
}

  // const onLoginTextClick = useCallback(() => {
  //   navigate('/login/');
  //   // Please sync "masterdoc" to the project
  // }, []);

  const onDashboardClick = useCallback(() => {
    navigate("dashbord")
    // Please sync "Desktop - 8" to the project
  }, []);

  const onAddNewPatientClick = useCallback(() => {
    // Please sync "master doc" to the project
    navigate("addingMembers")
  }, []);

  const onAddMembersFromClick = useCallback(() => {
    // Please sync "master doc" to the project
  }, []);

  const onAddingNewMemberClick = useCallback(() => {
    // Please sync "master doc" to the project
  }, []);

  const onLabSummaryClick = useCallback(() => {
    navigate('/labsSummary/');
    // Please sync "master doc" to the project
  }, []);

  const onKitInventoryClick = useCallback(() => {
    navigate("./kitInventorys")
    // Please sync "master doc" to the project
  }, []);


  const onSettingClick=()=>{
    navigate('/settings/');
  }
  // const onSettingClick = useCallback(() => {
  //   // Please sync "master doc" to the project
  //   navigate('/settings/');
  // }, []);

  const onOnbaordingClick = useCallback(() => {
    navigate('/onbaordings')
    // Please sync "master doc" to the project
  }, []);

  return (
    <div className={styles.startHere}>
      <img className={styles.image18Icon} alt="" src="/Image/StartHere/starthere.png" />
      <div className={styles.startHereChild} />
      <div className={styles.startHereItem} />
      <div className={styles.swastyaaiPrototypeWrapper}>
        <b className={styles.swastyaaiPrototype}>Swastya.ai prototype</b>
      </div>
      <div className={styles.loginParent}>
        <button className={styles.dashboard} onClick={onLoginTextClick}>
          Login
        </button>
        <button className={styles.dashboard} onClick={onDashboardClick}>
          Dashboardll
        </button>
        <div className={styles.createNewEntryParent}>
          <b className={styles.createNewEntry}>Create new entry</b>
          <button
            className={styles.addNewPatientContainer}
            onClick={onAddNewPatientClick}
          >
            <ul className={styles.addNewPatient}>Add new patient</ul>
          </button>
          <button
            className={styles.addNewPatientContainer}
            onClick={onAddMembersFromClick}
          >
            <ul className={styles.addNewPatient}>
              Add members from same number
            </ul>
          </button>
          <button
            className={styles.addNewPatientContainer}
            onClick={onAddingNewMemberClick}
          >
            <ul className={styles.addNewPatient}>
              Adding new member of same number
            </ul>
          </button>
        </div>
        <button className={styles.dashboard} onClick={onLabSummaryClick}>
          Lab summary
        </button>
        <button className={styles.dashboard} onClick={onKitInventoryClick}>
          Kit inventory
        </button>
        <button className={styles.dashboard} onClick={onSettingClick}>
          Setting
        </button>
        <button className={styles.dashboard} onClick={onOnbaordingClick}>
        Onbaording
      </button>
      </div>
      
    </div>
  );
};

export default StartHere;
