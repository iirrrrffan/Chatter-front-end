import React, { useEffect, useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import CollectionsIcon from '@mui/icons-material/Collections';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import "./share.css"
import axios from 'axios';

const Share = () => {
const [user,setUser] = useState(null)
const [profilePicture, setProfilePicture] = useState([]);

    useEffect(() => {
        const storedUser = window.localStorage.getItem("user");
        console.log(storedUser,"uuu")
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }, []);

      const fetchProfile = async () => {
        try {
          if (user?._id) { 
            const response = await axios.get(`http://localhost:3006/api/users/${user._id}`);
           console.log(response);
           setUser(response)
            if (response.status === 200) {
              setProfilePicture(response.data.user.profilePicture);  
              }
          
          }
        } catch (error) {
          console.log('Error fetching user profile:', error);
        }
      };
     

  return (
    <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
        <img
          className="shareProfileImg"
          src={user?.profilePicture}
          alt=""
        />
        <input
          placeholder="write"
          className="shareInput"
         
        />
      </div>
      <hr className="shareHr" />
      
        <div className="shareImgContainer">
          <img className="shareImg"  alt="" />
          <CancelIcon className="shareCancelImg" />
        </div>
  
      <form className="shareBottom" >
        <div className="shareOptions">
          <label htmlFor="file" className="shareOption">
            <CollectionsIcon  className="shareIcon" />
            <span className="shareOptionText">Add Image</span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              
            />
          </label>
          <div className="shareOption">
            <FmdGoodIcon  htmlColor="green" className="shareIcon" />
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOption">
            <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
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