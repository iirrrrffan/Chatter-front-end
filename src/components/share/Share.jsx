import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import MeetingRoomSharpIcon from '@mui/icons-material/MeetingRoomSharp';
import EmojiEmotionsSharpIcon from '@mui/icons-material/EmojiEmotionsSharp';
import "./share.css"

const Share = () => {
  return (
    <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
        <img
          className="shareProfileImg"
          src="https://i.pinimg.com/564x/1d/f1/43/1df143603c7a9f51f3e8348f0ede6277.jpg"
          alt=""
        />
        <input
          placeholder={"What's in your mind ?"}
          className="shareInput"
         
        />
      </div>
      <hr className="shareHr" />
      
        <div className="shareImgContainer">
          <img className="shareImg" src="https://i.pinimg.com/564x/1d/f1/43/1df143603c7a9f51f3e8348f0ede6277.jpg" alt="" />
          <CancelIcon className="shareCancelImg" />
        </div>
      
      <form className="shareBottom" >
        <div className="shareOptions">
          <label htmlFor="file" className="shareOption">
            <PermMediaIcon htmlColor="tomato" className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              
            />
          </label>
          <div className="shareOption">
            <LabelIcon htmlColor="blue" className="shareIcon" />
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOption">
            <MeetingRoomSharpIcon htmlColor="green" className="shareIcon" />
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOption">
            <EmojiEmotionsSharpIcon htmlColor="goldenrod" className="shareIcon" />
            <span className="shareOptionText">Feelings</span>
          </div>
        </div>
        <button className="shareButton" type="submit">
          Share
        </button>
      </form>
    </div>
  </div>
  )
}

export default Share