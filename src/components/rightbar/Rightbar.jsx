import React from 'react';
import './rightbar.css';
import rightimg from "../../img/opsite.jpg"
const Rightbar = () => {
  return (

    <div className="rightbar">
      <div className="rightbarWrapper">
        <img
        src={rightimg}
        alt="rightImg"
        />
      </div>
    </div>
    
  );
};
export default Rightbar;
 