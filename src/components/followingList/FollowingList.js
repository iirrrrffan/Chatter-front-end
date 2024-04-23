import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import axios from 'axios';
import './followingList.css';

const FollowingList = () => {
  const [user, setUser] = useState(null);
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    const storedUser = window.localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const fetchFollowingList = async () => {
      try {
        if (user?._id) {
          const res = await axios.get(`http://localhost:3006/api/auth/followersList/${user._id}`);
          console.log(res.data, "Following list fetched");
          setFollowingList(res.data.followersList); 
        }
      } catch (error) {
        console.error("Error fetching following list:", error);
      }
    };

    fetchFollowingList();
  }, [user]); 

  return (
    <div>
      <div className="mainF">
        <Sidebar />
        <div>
          {followingList.map((following) => (
            <div key={following._id} className="friendListF" style={{ display: 'flex' }}>
              <img
                className="friendListImgF"
                src={following.profilePicture || 'https://i.pinimg.com/474x/4a/88/91/4a8891e05c016137daca400e23175f58.jpg'}
                alt={following.username}
              />
              <span className="friendListNameF">{following.username}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowingList;
