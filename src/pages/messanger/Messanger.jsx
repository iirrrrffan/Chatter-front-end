import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'
import "./Messanger.css"
import ChatOnline from '../../components/chatOnline/ChatOnline'

const Messanger = () => {
  return (
    
    <>
    <Topbar/>
    
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
            <div>
              <Conversation/>
            </div>
        </div>
      </div>
      <div className="chatBox">
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
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline/>
        </div>
      </div>
    </div>
  </>
  )
}

export default Messanger