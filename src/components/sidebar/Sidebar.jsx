 import React from 'react';
 import ChatIcon from '@mui/icons-material/Chat';
 import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
 import Diversity3Icon from '@mui/icons-material/Diversity3';
 import LogoutIcon from '@mui/icons-material/Logout';
 import './sidebar.css'
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


 const Sidebar = () => {
  const navigation = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('user');
    navigation('/')
  }
   return (
     <div className='sidebar'>
 <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link to={"/messanger"}>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon"  />
            <span className="sidebarListItemText"></span>
          </li>
          </Link>
          <li className="sidebarListItem">
            <PeopleAltIcon className="sidebarIcon" />
            <span className="sidebarListItemText"></span>
          </li>
          <li className="sidebarListItem" onClick={handleLogout}>
            <LogoutIcon className="sidebarIcon" />
            <span className="sidebarListItemText"></span>
          </li>
          <li className="sidebarListItem">
            <Diversity3Icon className="sidebarIcon" />
            <span className="sidebarListItemText"></span>
          </li>
          <div className='feed'>
            <div className='feedWrapper'>
            </div>
          </div>
         
           <li className="feed">
           <Link to={"/profile"}>
            <img src="https://i.pinimg.com/564x/1d/f1/43/1df143603c7a9f51f3e8348f0ede6277.jpg" alt="" 
            className='topbarImg'/>
            </Link>
            <span className="sidebarListItemText">Profile</span>
          </li>
          
        </ul>
      </div>
     </div>
   )
 }
 
 export default Sidebar