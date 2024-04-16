import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './userProfile.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {
  const [state,setState]= useState()
  const { _id } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing(prevState => !prevState);
  };
  const fecthdata = async()=>{
    try {
      const res = await axios.get(`http://localhost:3006/api/users/userbyId/${_id}`)
    
      setState(res.data.user)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fecthdata()
  })
console.log(state);
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
              <h1 style={{ fontSize: 20 }}>following 3</h1>
              <h1 style={{ fontSize: 20 }}>followers 5</h1>
              <div className="email">
                <h1 style={{ fontFamily: 'Arial', fontSize: 30 }}>Email</h1>
                <h1>{state?.email}</h1>
              </div>
              {isFollowing ? (
                <>
                  <button className="unfollowButton" onClick={handleFollowToggle}>
                    Unfollow
                  </button>
                  <button className="messageButton">Message</button>
                </>
              ) : (
                <button className="followButton" onClick={handleFollowToggle}>
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
