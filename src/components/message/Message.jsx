import React from 'react'
import "./message.css"
import {formate,format} from "timeago.js"

const Message = ({Message,own}) => {
  return (
    <div className={own ? "message own" : "message"}>
    <div className="messageTop">
      <img
        className="messageImg"
        src='https://i.pinimg.com/474x/4a/88/91/4a8891e05c016137daca400e23175f58.jpg'
        alt=""
      />
      <p className="messageText">{Message.text} </p>
    </div>
    <div className="messageBottom">{format(Message.createdAt)}</div> 
  </div>

  )
}

export default Message