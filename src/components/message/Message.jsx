import React from 'react'
import "./message.css"
import {formate,format} from "timeago.js"

const Message = ({Message,own}) => {
  return (
    <div className={own ? "message own" : "message"}>
    <div className="messageTop">
      <img
        className="messageImg"
        src="https://i.pinimg.com/564x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg"
        alt=""
      />
      <p className="messageText">{Message.text} </p>
    </div>
    <div className="messageBottom">{format(Message.createdAt)}</div> 
  </div>

  )
}

export default Message