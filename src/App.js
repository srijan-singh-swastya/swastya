import st from './App.module.css';
import Dashbord from './AllPages/Dashbord/Dashbord';
import TechnicianDashbord from './AllPages/TechnicianDashbord/TechnicianDashbord';
import Settings from './Features/Settings/Settings';
import Login from './Features/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartHere from './Features/StartHere/StartHere';
import LabsSummary from './Features/LabsSummary/LabsSummary';
import KitInventorys from './Features/KitInventorys/KitInventorys';
import Onbaordings from './Features/Onbaordings/Onbaordings';
import AddingMembers from './Features/AddingMembers/AddingMembers';
import AllReport from './Features/AllReport/AllReport';
import SignReportHome from './Features/SignReport/SignReportHome/SignReportHome';
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
        <Route path="/kitInventorys" element={<KitInventorys/>}/>
        <Route path="/onbaordings" element={<Onbaordings/>}/>
        <Route path="/addingMembers" element={<AddingMembers/>}/>
        <Route path="/allReport" element={<AllReport/>}/>
        <Route path="/signReportHome" element={<SignReportHome/>}/>

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
