import React from 'react'
import "./message.css"
const Message = ({own}) => {
  return (
    <div className={own ? "message own" : "message"}>
    <div className="messageTop">
      <img
        className="messageImg"
        src="https://i.pinimg.com/564x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg"
        alt=""
      />
      <p className="messageText">Khan made his film debut with a small role in Salaam Bombay!, </p>
    </div>
    <div className="messageBottom">1 hour ago</div>
  </div>

  )
}

export default Message