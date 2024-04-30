import React, { useEffect, useState } from 'react';
import "./profile.css";
import Sidebar from '../../components/sidebar/Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3006/api/posts/profile/${user._id}`);
        console.log(response);
        setPosts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [user?._id]);

  if (loading) {
    return <div>Loading...</div>;
  }


   const handleDeletePost = async (postId) => {
    try {
      const response = await axios.delete(`http://localhost:3006/api/posts/${postId}`, {
        data: { userId: user._id },
      });

      if (response.status === 200) {
        // Remove deleted post from state
        setPosts(posts.filter(post => post._id !== postId));
      } else {
        console.error('Error deleting post:', response.data);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
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
          {posts.map((post) => (
          <div className="postCard1">
      <img src={post.image} alt='post' onClick={()=>navigation(`/post/${post._id}`)}/>
      <div className="postCardContent1">
        <h3 className="postCardTitle1">{post.text}</h3>
        <button className="deleteButton1"  onClick={() => handleDeletePost(post._id)}>        
          <DeleteForeverIcon/>
        </button>
      </div>
    </div>
 ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
