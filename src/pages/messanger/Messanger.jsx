import React, { useEffect, useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'
import "./Messanger.css"
import ChatOnline from '../../components/chatOnline/ChatOnline'
import Sidebar from '../../components/sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'

const Messanger = () => {
  const navigation = useNavigate()
  const [user,setUser]=useState(null);

useEffect(()=>{
 const storedUser = window.localStorage.getItem("user")
 if(storedUser){
  setUser(JSON.parse(storedUser));
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
              <Conversation/>
            </div>
        </div>
      </div>
      <div className="chatBox" style={{ width:"940px"}}>
        <div className="chatBoxWrapper">
         
            <>
              <div className="chatBoxTop">
               
                  <div >
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