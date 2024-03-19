import React from 'react'
import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";


const Topbar = () => {
   
  return (
    <div className="topbarContainer">
 <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Chatter</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
        
          <SearchIcon/>
          <input
            placeholder="Search friends"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
      </div>
    </div>
  )
}

export default Topbar