import React, { useEffect, useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import './sidebar.css';
import axios from 'axios';

const Sidebar = () => {
  const [profilePicture, setProfilePicture] = useState([]);
  const [user, setUser] = useState(null);
  const navigation = useNavigate();
  

  useEffect(() => {
    const storedUser = window.localStorage.getItem("user");
    console.log(storedUser,"uuu")
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (!storedUser) {
      navigation("/");
    } else {
      fetchProfile();
    }
  }, []);


  const fetchProfile = async () => {
    try {
      if (user?._id) { 
        const response = await axios.get(`http://localhost:3006/api/users/${user._id}`);
       console.log(response);
       setUser(response)
        if (response.status === 200) {
          setProfilePicture(response.data.user.profilePicture);  
          }
      
      }
    } catch (error) {
      console.log('Error fetching user profile:', error);
    }
  };




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
              <img src={user?.profilePicture || "https://i.pinimg.com/474x/4a/88/91/4a8891e05c016137daca400e23175f58.jpg"}alt="" className='img'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
