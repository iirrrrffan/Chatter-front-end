import React, { useEffect, useState } from 'react';
import "./profile.css";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState(null);

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
    console.log("jjj")
    try {
      if (user?._id) { 
        const response = await axios.get(`http://localhost:3006/api/users/${user._id}`);
        console.log(response, "wertfgyh");
        if (response.status === 200) {
          setUsername(response.data.user.username);
          setEmail(response.data.user.email);
          setProfilePic(response.data.user.profilePic);
        }
        console.log(setEmail)
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
                src="https://i.pinimg.com/564x/10/06/8e/10068e23be71b95ed0a1a4d25a57f4d2.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="https://i.pinimg.com/564x/45/c4/6c/45c46ce18a62cd986e90ebf0c8b75557.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h2 className="profileInfoName">Edit profile information </h2>
              <div>
                {user && <input className='input' placeholder='name' value={user.username} onChange={(e) => setUsername(e.target.value)} />}
              </div>
              <div className='email'>
                <h1>Email</h1>
                {user && <h1>{user.email}</h1>}
              </div>
              <div>
                <button className='btn'>Save</button>
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
