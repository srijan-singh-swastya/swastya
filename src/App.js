import st from './App.module.css';
import AddingMember from './AllPages/AddingMember/AddingMember.js';
import MultiplePatientConnected from './AllPages/AddingMember/Components/MultiplePatientConnected/MultiplePatientConnected';
import PatientInfo from './AllPages/AddingMember/Components/PatientInfo/PatientInfo';
import AmmountPerPatient from './AllPages/AddingMember/Components/AmmountPerPatient/AmmountPerPatient';
import PaymentDetails from './AllPages/AddingMember/Components/PaymentDetails/PaymentDetails';
import LoginMain from './AllPages/Login/LoginMain/LoginMain';
import LoginOtp from './AllPages/Login/LoginOtp/LoginOtp';
import AllReportsButton from './AllPages/AllReports/AllReportsButton/AllReportsButton';
import DateRangePicker from './AllPages/General/DateRangePicker/DateRangePicker';
import AllReportRecords from './AllPages/AllReports/AllReportsRecords/AllReportsRecords';
import AllReportsData from './AllPages/AllReports/AllReportsData/AllReportsData';
import Dashbord from './AllPages/Dashbord/Dashbord';
import TechnicianDashbord from './AllPages/TechnicianDashbord/TechnicianDashbord';
import PatientDetails from './AllPages/PrepareReport/PatientDetails/PatientDetails';
import PatientReport from './AllPages/PrepareReport/PatientReport/PatientReport';
import LabDetails from './AllPages/Settings/LabDetails/LabDetails';
import TechnicianDetails from './AllPages/Settings/TechnicianDetails/TechnicianDetails';
import TestAndPriceList from './AllPages/Settings/TestAndPriceList/TestAndPriceList';
import ReportLetterhead from './AllPages/Settings/ReportLetterhead/ReportLetterhead';
import Discount from './AllPages/Settings/Discount/Discount';
import SettingLeft from './AllPages/Settings/SettingLeft/SettingLeft';
import Settings from './Features/Settings/Settings';
import Login from './Features/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartHere from './Features/StartHere/StartHere';
import LabsSummary from './Features/LabsSummary/LabsSummary';
function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<StartHere />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/settings/*" element={<Settings />} />
        <Route path="/labsSummary/*" element={<LabsSummary />} />
        <Route path="/technicianDashbord" element={<TechnicianDashbord/>}/>
        <Route path="/dashbord" element={<Dashbord/>}/>
      </Routes>
    </Router>
  </>
  );
}
export default App;


// return (
//   <div className={st.btn}>
//   {/* <AddingMember/> */}
//   {/* <MultiplePatientConnected/> */}
//   {/* <PatientInfo/> */}
//   {/* <AmmountPerPatient/> */}
//   {/* <PaymentDetails/> */}

//   {/* <LoginMain/> */}
//   {/* <LoginOtp/> */}
//   {/* <AllReportsButton/> */}
//   {/* <DateRangePicker/> */}
//   {/* <AllReportRecords/> */}
//   {/* <AllReportsData/> */}
//   {/* <Dashbord/> */}
//   {/* <TechnicianDashbord/> */}
//   {/* <PatientDetails/> */}
//   {/* <PatientReport/> */}
//   {/* <LabDetails/> */}
//   {/* <TechnicianDetails/> */}
//   {/* <TestAndPriceList/> */}
//   {/* <ReportLetterhead/> */}
//   {/* <Discount/> */}
//   {/* <SettingLeft/> */}




//   {/* <Settings/> */}
//   {/* <Login/> */}
//   <StartHere/>
//   </div>
// );

// }

// export default App;
