 import React from 'react';
 import ChatIcon from '@mui/icons-material/Chat';
 import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
 import Diversity3Icon from '@mui/icons-material/Diversity3';
 import LogoutIcon from '@mui/icons-material/Logout';
 import './sidebar.css'
import { Link } from 'react-router-dom';

 const Sidebar = () => {
   return (
     <div className='sidebar'>
 <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link to={"/messanger"}>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon"  />
            <span className="sidebarListItemText">Chats</span>
          </li>
          </Link>
          <li className="sidebarListItem">
            <PeopleAltIcon className="sidebarIcon" />
            <span className="sidebarListItemText">People</span>
          </li>
          <li className="sidebarListItem">
            <LogoutIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Logout</span>
          </li>
          <li className="sidebarListItem">
            <Diversity3Icon className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <div className='feed'>
            <div className='feedWrapper'>

            </div>
          </div>
           {/* <li className="feed">
            < AccountCircleIcon className="profileIcon" />
            <span className="sidebarListItemText">Profile</span>
          </li> */}
        </ul>
      </div>
     </div>
   )
 }
 
 export default Sidebar