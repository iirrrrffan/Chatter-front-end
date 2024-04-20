
import React, { useContext, useEffect, useRef, useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'
import "./Messanger.css"
import axios from 'axios'
import Sidebar from '../../components/sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import {io} from "socket.io-client"

const Messanger = () => {
  const navigation = useNavigate()
  const [users,setUsers]=useState(null);
  const [conversation,setConversation]=useState([])
  const [currentChat,setCurrentChat]=useState(null)
  const [messages,setMessages]=useState([])
  const [newMessage,setNewMessage]=useState("")
  const scrollRef = useRef();
const socket = useRef(io("http://localhost:8900"));

const {user} = useContext(AuthContext)

useEffect(()=>{
  socket.current.emit("addUser",user._id);
  socket.current.on("getUsers",users=>{
    console.log("jb",users);
  })
},[user])


useEffect(()=>{
  const getConversaton = async ()=>{
    try{
     const res = await axios.get(`http://localhost:3006/api/conversation/${user._id}`)
     setConversation(res.data)
     console.log(res);
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

useEffect(() => {
  const getMessages = async () => {
    try {
      const res = await axios.get(`http://localhost:3006/api/messages/${currentChat._id}`);
      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  if (currentChat) {
    getMessages();
  }
}, [currentChat, user._id]);
 
 
 

 const handleSubmit = async(e)=>{
  e.preventDefault();
  const message = {
    sender : user._id,
    text : newMessage,
    conversationId : currentChat._id,
  };
  try{
 const res = await axios.post("http://localhost:3006/api/messages",message)
 setMessages([...messages,res.data]);
setNewMessage("");
  }catch(error){
    console.log(error);
  }
 }

 useEffect(()=>{
 scrollRef.current?.scrollIntoView({behavior:"smooth"})
 },[messages])


  return (
    
    <>
    <Topbar/>
    <div style={{display:"flex"}}>
      <div> <Sidebar/></div>
   
   
    <div className="messenger">
      <div className="chatMenu" style={{width:"30%", flex:"none"}}>
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
         
           {conversation.map(c=>(
            <div onClick={()=>setCurrentChat(c)}>
            <Conversation conversation={c} currentUser={user} key={c._id}/>
            </div>
           ))}
        </div>
      </div>
      <div className="chatBox" style={{ width:"940px"}}>
        <div className="chatBoxWrapper">
         {currentChat ? (
        
            <>
              <div className="chatBoxTop">
               {messages.map((m,index)=>(
                <div ref={scrollRef}>
               <Message Message={m} own={m.sender === user._id} key={index}/>
               </div>
               ))}
                 

              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something..."
                  onChange={(e)=>setNewMessage(e.target.value)}
                  value={newMessage}
                ></textarea>
                <button className="chatSubmitButton" onClick={handleSubmit} >
                  Send
                </button>
              </div>
            </> ):( <span className='noConversationText '>Open a conversation to start a chat</span>)}
        </div>
      </div>
    </div>
    </div>
  </>
  )
}

export default Messanger
