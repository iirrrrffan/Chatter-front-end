import React from 'react'
import "./topbar.css";
import { Link } from "react-router-dom";


const Topbar = () => {
   
  return (
    <div className="topbarContainer">
 <div className="topbarLeft">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">Chatter</span>
        </Link>
      </div>
      <div className="topbarCenter">
      </div>
      <div className="topbarRight">
      </div>
    </div>
  )
}

export default Topbar