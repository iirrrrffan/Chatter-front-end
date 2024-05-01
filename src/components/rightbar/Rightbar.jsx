import React from 'react';
import './rightbar.css';
import { useNavigate } from 'react-router-dom';

const Rightbar = () => {
  const navigate = useNavigate()
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="rightbarContent">
          <h2>Photo Uploud</h2>
          <p>Explore our latest updates and features.</p>

          <button className="exploreButton" onClick={()=>navigate("/profile")}>Go to Profile</button>
        </div>
        <img src="https://i.pinimg.com/564x/13/06/0f/13060f232413b80f3f437fe0409d7631.jpg" alt="Right Image" className="rightImage" />
      </div>
    </div>
  );
};

export default Rightbar;
