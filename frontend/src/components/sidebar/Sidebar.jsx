import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2Icon from '@mui/icons-material/Person2';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
// import { Link } from 'react-router-dom';
// import { useContext } from "react";
// import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
    // const {dispatch} = useContext(DarkModeContext);
  return (
    <>
   <div className="sidebar">
    <div className="top">
    {/* <Link to="/" className='sidelink'> */}

        <span className="logo">
             Admin Dashboard
        </span>
    {/* </Link> */}
    </div>
    <hr />
    <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <li>
            {/* <Link to="/"className='sidelink'> */}

                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            {/* </Link> */}
            </li>
            <p className="title">LIST</p>
            <li>
                {/* <Link to="/users" className='sidelink'> */}
                <Person2Icon className='icon' />
                <span>oGX</span>
                {/* </Link> */}
                    
            </li>

            <li>
            {/* <Link to="/products" className='sidelink'> */}

                <ProductionQuantityLimitsIcon className='icon' />
                <span>iGX</span>
            {/* </Link> */}
            </li>

            <li>
                <FilterFramesIcon className='icon' />
                <span>Marketing</span>
            </li>

            <li>
                <DeliveryDiningIcon className='icon' />
                <span>Business Development</span>
            </li>
          
            <li>
                <QueryStatsIcon className='icon' />
                <span>Legal and Finance</span>
            </li>

            <li>
                <NotificationsIcon className='icon' />
                <span>Notification</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
                <HealthAndSafetyIcon className='icon' />
                <span>System Health</span>
            </li>

            <li>
                <PsychologyIcon className='icon' />
                <span>Logs</span>
            </li>

            <li>
                <SettingsIcon className='icon' />
                <span>Settings</span>
            </li>

            <p className="title">USER</p>
            <li>
                <AccountCircleIcon className='icon' />
                <span>Profile</span>
            </li>

            <li>
                <LogoutIcon className='icon' />
                <span>Logout</span>
            </li>

            <li>
                <span>Color options</span>
            </li>
        </ul>
    </div>
  {/* <div className="bottom">
    <div className="colorOption" onClick={()=>{
        dispatch({type: "LIGHT"})
    }}></div>
    <div className="colorOption" onClick={()=>{
        dispatch({type: "DARK"})
    }}></div>
  </div> */}
   </div>
    </>
  )
}

export default Sidebar
