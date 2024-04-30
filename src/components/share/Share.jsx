import React, { useEffect, useRef, useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import CollectionsIcon from '@mui/icons-material/Collections';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import "./share.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Share = () => {
const [user,setUser] = useState(null)
const [profilePicture, setProfilePicture] = useState([]);
const [text, setText] = useState("");
const [image, setImage] = useState(null);
const fileInputRef = useRef(null);
const [previewImage, setPreviewImage] = useState(null);
const [file, setFile] = useState(null);
const navigate = useNavigate()

    useEffect(() => {
        const storedUser = window.localStorage.getItem("user");
        console.log(storedUser,"uuu")
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }, []);
      
    if (!user?._id) {
        console.log('User is not defined');
        return;
      }
      const handleAddPost = async (e) => {
        e.preventDefault();
        if (!text || !image) {
          console.log("error");
          return;
        }
        const formData = new FormData();
        formData.append("userId", user._id);
        formData.append("text", text);
        formData.append("image", image);
        console.log(formData)
        try {
          const response = await fetch("http://localhost:3006/api/posts/addPost", {
            method: "POST",
            body: formData,
          });
          console.log(response,"jjjjjj");
          if (response.ok) {
            const data = await response.json();
            console.log(data);
           navigate("/profile")
          } else {
            console.log("error uploading");
          }
        } catch (error) {
          
        }
      };

      const handleImageClick = (e) => {
        e.preventDefault();
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      };
    
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setImage(file);
          setPreviewImage(URL.createObjectURL(file));
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
        type='text'
          placeholder="write"
          className="shareInput"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <hr className="shareHr" />
      {previewImage && (
  <div className="shareImgContainer">
    <img className="shareImg" src={previewImage} alt="SelectedImage" />
    <CancelIcon className="shareCancelImg" onClick={() => setPreviewImage(null)} />
  </div>
)}

      <form className="shareBottom" >
        <div className="shareOptions">
          <label htmlFor="file" className="shareOption">
            <CollectionsIcon  className="shareIcon" onClick={handleImageClick} />
            <span className="shareOptionText">Add Image</span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              ref={fileInputRef}
              onChange={handleImageChange}
              
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
        <button className="shareButton" type="submit" onClick={handleAddPost}>
          Share
        </button>
      </form>
    </div>
  </div>
  )
}

export default Share