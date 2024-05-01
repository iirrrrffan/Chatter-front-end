import React, { useEffect, useState } from 'react';
import './home.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import { useNavigate } from 'react-router-dom';
// import chatIllustration from '../../img/chat_illustration.svg';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = window.localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      navigate('/home');
    } else {
      navigate('/');
    }
  }, []);

  return (
    <div className="homePage">
      <Topbar />
      <div className="heroSection">
        <div className="heroContent">
          <h1>Welcome to Chatter</h1>
          <p>The best place to chat with friends and family</p>
          <button className="startChattingBtn" onClick={()=>navigate("/list")}>Take Friends</button>
        </div>
        <img src="https://i.pinimg.com/474x/d5/4e/e7/d54ee7604ffdb54a1dd6e0cca127681c.jpg" alt="Chat Illustration" className="heroImage" />
      </div>
      <div className="mainContainer">
        <Sidebar />
        <div className="chatContainer">
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
