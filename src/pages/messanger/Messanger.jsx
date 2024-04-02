import React, { useContext, useEffect, useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'
import "./Messanger.css"
import axios from 'axios'
import Sidebar from '../../components/sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Messanger = () => {
  const navigation = useNavigate()
  const [users,setUsers]=useState(null);
  const [conversation,setConversation]=useState([])
const {user} = useContext(AuthContext)

useEffect(()=>{
  const getConversaton = async ()=>{
    try{
     const res = await axios.get(`http://localhost:3006/api/conversation/${user._id}`)
     setConversation(res.data)
    }catch(error){
   console.log(error);
    }
  }
  getConversaton()
},[user._id])

useEffect(()=>{
 const storedUser = window.localStorage.getItem("user")
 if(storedUser){
  setUsers(JSON.parse(storedUser));
 }
 
 if(storedUser){
  navigation("/messanger")
 }else{
  navigation("/")
 }
},[])




  return (
    
    <>
    <Topbar/>
    <div style={{display:"flex"}}>
      <div> <Sidebar/></div>
   
   
    <div className="messenger">
      <div className="chatMenu" style={{width:"30%", flex:"none"}}>
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
            <div>
              
           {conversation.map(c=>(
            <Conversation conversation={c} currentUser={user} key={c._id}/>
           ))}

            </div>
        </div>
      </div>
      <div className="chatBox" style={{ width:"940px"}}>
        <div className="chatBoxWrapper">
         
            <>
              <div className="chatBoxTop">
               
                  <div >
                    <Message  />
                    <Message own={true} />
                    <Message  />
                    <Message own={true} />
                    <Message  />

                  </div>
              
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something..."
                ></textarea>
                <button className="chatSubmitButton" >
                  Send
                </button>
              </div>
            </>
            <span className="noConversationText">
            </span>
        </div>
      </div>
    </div>
    </div>
  </>
  )
}

export default Messanger