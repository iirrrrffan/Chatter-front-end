import React, { useEffect, useState } from 'react'
import "./friendsList.css"
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios";
import Sidebar from '../sidebar/Sidebar';



const FriendList = () => {
 
  return (
    <>
    <div className="main">
    <Sidebar/>
    <div className="searchContainer">
          <input
            type="text"
            placeholder="Search..."
           
          />
        </div>
    <Link to={"/userprofile"}>
    <div className="friendList" style={{display:"flex"}}>
      
    <img
      className="friendListImg"
      src="https://i.pinimg.com/474x/5b/d3/9d/5bd39d1af410eac798f8e64d3000ab82.jpg"
      alt=""
    />
    <span className="friendListName">NAME</span>
   
  </div>

  <div className="friendList" style={{display:"flex"}}>
      
      <img
        className="friendListImg"
        src="https://i.pinimg.com/474x/5b/d3/9d/5bd39d1af410eac798f8e64d3000ab82.jpg"
        alt=""
      />
      <span className="friendListName">NAME</span>
     
    </div>
  </Link>
    </div>
      
  </>
  )
}

export default FriendList