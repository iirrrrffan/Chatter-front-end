import React, { useEffect, useState } from 'react'
import "./friendsList.css"
import {useNavigate } from 'react-router-dom'
import axios from "axios";
import Sidebar from '../sidebar/Sidebar';




const FriendList = () => {

 const navigation = useNavigate()
   const [users, setUsers] = useState();
  
  const fecthdata=async ()=>{
    try {
      const res=await axios.get('http://localhost:3006/api/users/allusers')
      
      setUsers(res.data.users)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fecthdata()
  },[])
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
    <div >
      {users?.map((i,index)=>(
    <div key={i?.Id||index} className="friendList" style={{display:"flex"}} onClick={()=>{navigation(`/userprofile/${i._id}`)}}> 
    <img
      className="friendListImg"
      src={i?.profilePicture}
      alt={i.username}
    />
    <span className="friendListName">{i?.username}</span>
  </div>
  ))}
  </div>
    </div>
      
  </>
  )
}

export default FriendList