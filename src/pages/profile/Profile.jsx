import React, { useEffect, useState } from 'react';
import "./profile.css";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState([]);
  const [coverPicture, setCoverPicture] = useState([]);

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
        if (response.status === 200) {
          setUsername(response.data.user.username);
          setEmail(response.data.user.email);
          setProfilePicture(response.data.user.profilePicture);
          setCoverPicture(response.data.user.coverPicture);
        }
      
      }
    } catch (error) {
      console.log('Error fetching user profile:', error);
    }
  };

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img
  className="profileCoverImg"
  src={user?.coverPicture}
  alt=""
/>

              <img
                className="profileUserImg"
                src={user?.profilePicture}
                alt=""
              />
            </div>
            <div className="profileInfo">
            <h2 className="profileInfoName">{user ?.username}</h2>
            <h1 style={{fontSize:20}}>following 3</h1>
            <h1 style={{fontSize:20}}>followers 5</h1>
              <div className='email'>
                <h1 style={{fontFamily:'Arial',fontSize:30}}>Email</h1>
                {user && <h1>{user.email}</h1>}
              </div>
              <div>
                <Link to={"/editprofile"}>
                <button className='btn'>Edit</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
