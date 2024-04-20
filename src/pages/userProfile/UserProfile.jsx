import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './userProfile.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {
  const [state,setState]= useState()
  const [userData, setUserData] = useState(null);
  const { _id } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);
  const userId = _id;

  useEffect(() => {
    const userData = window.localStorage.getItem("user");
    if (userData) {
      setUserData(JSON.parse(userData));
    }
  }, []);


  const fecthdata = async()=>{
    const logUserId = userData ? userData._id : null;
    console.log(logUserId,'sdfghjkl')
    try {
      const res = await axios.get(`http://localhost:3006/api/users/userbyId/${userId}`)
      console.log(res,'dsfghjk')
      setIsFollowing(res.data.user.followers.includes(logUserId));
      setState(res.data.user)
   
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{          
    fecthdata()
  }, [userId, userData])
  
  const handleFollow = async () => {
    try {
      const logUserId = userData ? userData._id : null;
      
      if (logUserId) {
        if (isFollowing) {
          await axios.put(`http://localhost:3006/api/users/${logUserId}/unfollow`, {
            userId: userId, // Send userId in the request body
          });
          setIsFollowing(false); // Update state
        } else {
          await axios.put(`http://localhost:3006/api/users/${logUserId}/follow`, {
            userId: userId, // Send userId in the request body
          });
          setIsFollowing(true); // Update state
        }
      }
    } catch (error) {
      console.error("Error occurred while following/unfollowing user:", error);
    }
  };
  
  
  return (
    <>
      {/* <Topbar /> */}
      <div className="userprofile">
        <Sidebar />
        <div className="userprofileRight">
          <div className="userprofileRightTop">
            <div className="userprofileCover">
              <img
                className="userprofileCoverImg"
                src={state?.coverPicture}
                alt=""
              />
              <img
                className="userprofileUserImg"
                src={state?.profilePicture}
                alt=""
              />
            </div>
            <div className="userprofileInfo">
              <h2 className="userprofileInfoName">{state?.username}</h2>
              <h1 style={{ fontSize: 20 }}>following {state?.followings.length}</h1>
              <h1 style={{ fontSize: 20 }}>followers {state?.followers.length}</h1>
              <div className="email">
                <h1 style={{ fontFamily: 'Arial', fontSize: 30 }}>Email</h1>
                <h1>{state?.email}</h1>
              </div>
              {isFollowing ? (
                <>
                  <button className="unfollowButton" onClick={handleFollow}>
                    Unfollow
                  </button>
                  <button className="messageButton">Message</button>
                </>
              ) : (
                <button className="followButton" onClick={handleFollow}>
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className="userprofileRightBottom"></div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
