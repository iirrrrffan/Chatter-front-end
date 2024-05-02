import React, { useEffect, useState } from 'react'
import "./conversation.css"
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Conversation = ({conversation,currentUser}) => {
const [state,setState]=useState()
const [user,setUser]=useState(null)
const userId = useParams()


useEffect(() => {
  const friendId = conversation.members.find(m => m !== currentUser._id); 
  const getUser = async () => {
    try {
      const res = await axios.get(`https://api.chatterchating.site/api/users/userbyId/${friendId}`); 
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

  return (
    
    <div className="conversation" style={{display:"flex"}}>
      <img
        className="conversationImg"
        src={user.profilePicture || "https://i.pinimg.com/474x/4a/88/91/4a8891e05c016137daca400e23175f58.jpg"}
        alt=""
      />
      <span className="conversationName">{user.username}</span>
    </div>
    
  )
}

export default Conversation