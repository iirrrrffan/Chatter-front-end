import React, { useEffect, useState } from 'react';
import "./profile.css";
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
       setUser(response)
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
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img
  className="profileCoverImg"
  src={user?.coverPicture || "https://i.pinimg.com/564x/4c/84/79/4c8479b1c7353fba04b9dea897163b3f.jpg"}
  alt=""
/>

              <img
                className="profileUserImg"
                src={user?.profilePicture || "https://i.pinimg.com/474x/4a/88/91/4a8891e05c016137daca400e23175f58.jpg"}
                alt=""
              />
            </div>
            <div className="profileInfo">
            <h2 className="profileInfoName">{user ?.username}</h2>
            <br/>
            <Link to={"/followingList"}>
            <h1 style={{fontSize:20}}>followers  {user?.followings.length}</h1>
            </Link>
    
            <Link to={"/followersList"}> 
            <h1 style={{fontSize:20}}>followings  {user?.followers.length}</h1>
            </Link>
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
