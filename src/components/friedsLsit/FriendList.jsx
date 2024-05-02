import React, { useEffect, useState } from 'react';
import './friendsList.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../sidebar/Sidebar';
import Topbar from '../topbar/Topbar';

const FriendList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [userId, setUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const usersPerPage = 5; 

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setUserId(user._id);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://api.chatterchating.site/api/users/allusers');
        setUsers(res.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = users.filter((user) => user._id !== userId);

  const searchResults = filteredUsers.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(searchResults.length / usersPerPage);
  const startIdx = (currentPage - 1) * usersPerPage;
  const currentUsers = searchResults.slice(startIdx, startIdx + usersPerPage);

  return (
    <>
      <div className="main">
        <Sidebar />
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          {currentUsers.map((user, index) => (
            <div
              key={user._id || index}
              className="friendList"
              style={{ display: 'flex' }}
              onClick={() => navigate(`/userprofile/${user._id}`)}
            >
              <img
                className="friendListImg"
                src={user?.profilePicture || "https://i.pinimg.com/474x/4a/88/91/4a8891e05c016137daca400e23175f58.jpg"}
                alt={user.username}
              />
              <span className="friendListName">{user?.username}</span>
            </div>
          ))}
        </div>

        <div className="paginationContainer">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default FriendList;
