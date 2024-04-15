import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import "./userProfile.css";

const UserProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isMessaging, setIsMessaging] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMessageToggle = () => {
    setIsMessaging(!isMessaging);
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
                src="https://i.pinimg.com/474x/7e/05/8d/7e058d01d8ee1303f1eeb7d92a7b3c0c.jpg"
                alt=""
              />
              <img
                className="userprofileUserImg"
                src="https://i.pinimg.com/474x/f3/15/ea/f315eaf88a74193d158cbf6482548421.jpg"
                alt=""
              />
            </div>
            <div className="userprofileInfo">
              <h2 className="userprofileInfoName">profileInfoName</h2>
              <h1 style={{ fontSize: 20 }}>following 3</h1>
              <h1 style={{ fontSize: 20 }}>followers 5</h1>
              <div className='email'>
                <h1 style={{ fontFamily: 'Arial', fontSize: 30 }}>Email</h1>
                <h1>@suiefhui</h1>
              </div>
              {isFollowing ? (
                <>
                  <button className="unfollowButton" onClick={handleFollowToggle}>Unfollow</button>
                  <button className="messageButton" onClick={handleMessageToggle}>Message</button>
                </>
              ) : (
                <button className="followButton" onClick={handleFollowToggle}>Follow</button>
              )}
            </div>
          </div>
          <div className="userprofileRightBottom"></div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
