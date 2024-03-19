 import React from 'react';
 import ChatIcon from '@mui/icons-material/Chat';
 import GroupsIcon from '@mui/icons-material/Groups';
 import StorefrontIcon from '@mui/icons-material/Storefront';
 import SchoolIcon from '@mui/icons-material/School';
 import LogoutIcon from '@mui/icons-material/Logout';
 import './sidebar.css'

 const Sidebar = () => {
   return (
     <div className='sidebar'>
 <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <GroupsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">People</span>
          </li>
          <li className="sidebarListItem">
            <StorefrontIcon className="sidebarIcon" />
            <span className="sidebarListItemText">marketpalce</span>
          </li>
          <li className="sidebarListItem">
            <LogoutIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Logout</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
        </ul>
      </div>
     </div>
   )
 }
 
 export default Sidebar