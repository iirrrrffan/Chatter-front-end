import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './userProfile.css';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {
  const [state,setState]= useState()
  const [userData, setUserData] = useState(null);
  const { _id } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);
  const userId = _id;

  const  navigate=useNavigate();

  useEffect(() => {
    const userData = window.localStorage.getItem("user");
    if (userData) {
      setUserData(JSON.parse(userData));
    }
  }, []);
  const senderId = userData?._id;


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
            userId: userId, 
          });
          setIsFollowing(false);
        } else {
          await axios.put(`http://localhost:3006/api/users/${logUserId}/follow`, {
            userId: userId, 
          });
          setIsFollowing(true); 
        }
      }
    } catch (error) {
      console.error("Error occurred while following/unfollowing user:", error);
    }
  };


  const handleSubmit = async (receiverId)=>{
    try {
      const data = {
        senderId: senderId,
        receiverId:receiverId,
      }
      const res = await axios.post("http://localhost:3006/api/conversation",data)
      console.log(res);
      navigate("/messanger")
    } catch (error) {
      
    }
  }
  
  
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
                src={state?.coverPicture || "https://i.pinimg.com/736x/6c/b7/67/6cb76744222834de4cf768c4606c029c.jpg"}
                alt=""
              />
              <img
                className="userprofileUserImg"
                src={state?.profilePicture || "https://i.pinimg.com/474x/4a/88/91/4a8891e05c016137daca400e23175f58.jpg"}
                alt=""
              />
            </div>
            <div className="userprofileInfo">
              <h2 className="userprofileInfoName">{state?.username}</h2>
              <h1 style={{ fontSize: 20 }}>following {state?.followings.length}</h1>
              <h1 style={{ fontSize: 20 }}>followers {state?.followers.length}</h1>
              {isFollowing ? (
                <>
                  <button className="unfollowButton" onClick={handleFollow}>
                    Unfollow
                  </button>
                  <button className="messageButton" onClick={()=>handleSubmit(state?._id)}>Message</button>
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
