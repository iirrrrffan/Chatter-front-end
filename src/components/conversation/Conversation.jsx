import React, { useEffect, useState } from 'react'
import "./conversation.css"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSocketContext } from '../../context/socketContext'

const Conversation = ({conversation,currentUser}) => {
const [state,setState]=useState()
const [user,setUser]=useState(null)
const userId = useParams()
                     
useEffect(() => {
  const friendId = conversation.members.find(m => m !== currentUser._id); // Find the friend's ID
  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:3006/api/users/${friendId}`); // Use friendId instead of userId
      setUser(res.data.user)
    } catch (error) {
      console.log(error);
    }
  };
  getUser();
}, [currentUser, conversation]);
if (!user) {
  return <div>Loading...</div>;
}
const {onlineUsers} = useSocketContext();
const isOnline = onlineUsers.includes(conversation._id)

  return (
    
    <div className="conversation" style={{display:"flex"}}>
      <div className={`avatar ${isOnline ? "online" : ""}`}>
      <img
        className="conversationImg"
        src={user.profilePicture}
        alt=""
      />
      </div>
      <span className="conversationName">{user.username}</span>
    </div>
    
  )
}

export default Conversation