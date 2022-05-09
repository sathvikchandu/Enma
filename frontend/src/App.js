import General from './Components/General/General';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import DevDashboard from './Components/Developer/DevDashboard';
import ClientDashboard from './Components/Client/ClientDashboard';
import ManagerDashboard from './Components/Project_Manager/ManagerDashboard';
import Signupsupport from './Components/login/Signup_support';
import Signin from './Components/login/Signin';
import Forgot_pasword from './Components/login/Forgot_pasword';
import Signin_support from './Components/login/Signin_support';
import Client_newproject from './Components/Client/Client_newproject';
import Client_viewcurrproj from './Components/Client/Client_viewcurrproj';
import ClientViewProfile from './Components/Client/ClientViewProfile';
import Devsignin from './Components/login/Devsignin';
import Pmsignin from './Components/login/Pmsignin';
import Whoru from './Components/login/Whoru';
import Devprofile from './Components/Developer/Devprofile';
import DeveloperProjects from './Components/Developer/DeveloperProjects';
import ManagerProfile from './Components/Project_Manager/ManagerProfile';

function App() {
  return (
   <>
    <Router>
      
      <Routes>
        <Route path="/" element={<General/>} /> 
        
        <Route path="/signup_support" element={<Signupsupport/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="forgot" element={<Forgot_pasword/>} />
        <Route path="/devdashboard" element={<DevDashboard/>} />
        <Route path="/devprojects" element={<DeveloperProjects/>} />
        <Route path="/clientdashboard" element={<ClientDashboard/>} />
        <Route path="/managerdashboard" element={<ManagerDashboard/>} />
        <Route path="/signin_support" element={<Signin_support/>} />\
        <Route path="/client_newproject" element={<Client_newproject/>} />
        <Route path="/client_viewcurrproj" element={<Client_viewcurrproj/>} />
        <Route path="/clientviewprofile" element={<ClientViewProfile/>} />
        <Route path="/devsignin" element={<Devsignin/>} />
        <Route path="/pmsignin" element={<Pmsignin/>} />
        <Route path="/whoru" element={<Whoru/>} />
        <Route path="/devprofile" element={<Devprofile/>} />
        <Route path="/managerprofile" element={<ManagerProfile/>} />
      </Routes>      
    </Router>
    
    
   </> 
  )
}

export default App;
