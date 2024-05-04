import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './profile.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Modal from '../../components/modal/Modal';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [followersList, setFollowersList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [showModal, setShowModal] = useState(false); 
  const [postToDelete, setPostToDelete] = useState(null); 

  useEffect(() => {
    const storedUser = window.localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (user) {
      axios.get(`https://api.chatterchating.site/api/posts/profile/${user._id}`).then((res) => {
        setPosts(res.data);
        setLoading(false);
      });

      axios.get(`https://api.chatterchating.site/api/auth/followingList/${user._id}`).then((res) => {
        setFollowingList(res.data.followingList);
      });

      axios.get(`https://api.chatterchating.site/api/auth/followersList/${user._id}`).then((res) => {
        setFollowersList(res.data.followersList);
      });
    }
  }, [user]);

  const handleDeletePost = async () => {
    if (!postToDelete) {
      return;
    }

    try {
      const response = await axios.delete(`https://api.chatterchating.site/api/posts/${postToDelete}`, {
        data: { userId: user._id },
      });

      if (response.status === 200) {
        setPosts(posts.filter((post) => post._id !== postToDelete));
        setPostToDelete(null); // Reset the post ID
        setShowModal(false); // Hide the modal
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleShowModal = (postId) => {
    setPostToDelete(postId); // Set the post ID
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setPostToDelete(null); // Reset the post ID
    setShowModal(false); // Hide the modal
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
              <h2 className="profileInfoName">{user?.username}</h2>
              <Link to="/followingList">
                <h1 style={{ fontSize: 20 }}>Followers {followersList.length}</h1>
              </Link>
              <Link to="/followersList">
                <h1 style={{ fontSize: 20 }}>Following {followingList.length}</h1>
              </Link>
              <Link to="/editprofile">
                <button className="btn">Edit</button>
              </Link>
            </div>
          </div>
          <div className="profileRightBottom">
            {posts.map((post) => (
              <div className="postCard1" key={post._id}>
                <img
                  src={post.image}
                  alt="post"
                  onClick={() => navigate(`/post/${post._id}`)}
                />
                <div className="postCardContent1">
                  <h3 className="postCardTitle1">{post.text}</h3>
                  <button
                    className="deleteButton1"
                    onClick={() => handleShowModal(post._id)}
                  >
                    <DeleteForeverIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal for confirming deletion */}
      <Modal
        show={showModal}
        onConfirm={handleDeletePost}
        onCancel={handleCloseModal}
        message="Are you sure you want to delete this post?"
      />
    </>
  );
};

export default Profile;
