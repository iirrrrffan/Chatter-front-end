import React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const navigation = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigation('/');
  };
  
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarList">
          <div className="sidebarListItem" >
            <Link to={"/messanger"} className="link">
              <ChatIcon className="sidebarIcon" />
            </Link>
          </div>
          
          <div className="sidebarListItem" >
            <Link to={"/list"}>
            <Diversity3Icon className="sidebarIcon" />
            </Link>
          </div>

          <div className="sidebarListItem" onClick={handleLogout}>
            <LogoutIcon className="sidebarIcon" />
          </div>
          
          
        </div>
        <div className='feed'>
          <div className='feedWrapper'>
            {/* Add any additional content here */}
          </div>
        </div>
        <div className="sidebarList">
          <div className="sidebarListItem">
            <Link to={"/profile"} className="link">
              <img src="https://i.pinimg.com/564x/1d/f1/43/1df143603c7a9f51f3e8348f0ede6277.jpg" alt="" className='img'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
