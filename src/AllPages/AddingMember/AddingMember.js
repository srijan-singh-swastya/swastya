import React from 'react'
import AddDetailsTop from './Components/AddDetailsTop/AddDetailsTop.js'
import AddPatientDetailsPopup from "./Components/PatientDetails/AddPatientDetailsPopup.js"
import AddTest from './Components/AddTest/AddTest.js'
import style from "./AddingMember.module.css"
const AddingMember = () => {
  return (
    <div>
      <div className={style.top}><AddDetailsTop /></div>
      <div className={style.bottom}>
        <div className={style.left}><AddPatientDetailsPopup /></div>
        <div className={style.right}><AddTest /></div>
      </div>
    </div>
  )
}

export default AddingMember