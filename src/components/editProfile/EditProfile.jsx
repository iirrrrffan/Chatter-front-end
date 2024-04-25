import React, { useEffect, useRef, useState } from 'react';
import "./editProfile.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);
  const [previewCoverPicture, setPreviewCoverPicture] = useState(null);


  const  navigate=useNavigate();

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setUserId(user._id); 
    console.log(user._id,'sdfghj')
    setUsername(user.username || '');
    setEmail(user.email || '');

    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:3006/api/users/${user._id}`);
        if (response.status === 200) {
          const userData = response.data.user;
          setUsername(userData.username);
          setEmail(userData.email);
          setProfilePic(userData.profilePic);
          setCoverPicture(userData.coverPicture);
        }
      } catch (error) {
        console.log('Error fetching user profile:', error);
      }
    };

    fetchProfile();
  }, []); 

  const profilePicInputRef = useRef(null);
  const coverPicInputRef = useRef(null);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleCoverPicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverPicture(file);
      setPreviewCoverPicture(URL.createObjectURL(file)); 
    }
  };
console.log(coverPicture,profilePic,'cover pic ');
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("profilePicture", profilePic);
      formData.append("coverPicture", coverPicture);

      const response = await axios.put(`http://localhost:3006/api/users/${userId}`, formData);
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate('/profile')
      }
    } catch (error) {
      console.log('Error editing profile:', error);
    }   
  };

  return (
    <form className="form-container">
      <div>
        <label htmlFor="name">Username:</label>
        <input
          type="text"
          id="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="profilePic">Profile Picture:</label>
        <input
          type="file"
          id="fileInput"
          name='profilePic'
          ref={profilePicInputRef}
          onChange={handleProfilePicChange}
        />
        {previewImage && <img src={previewImage} alt="Preview" />}
      </div>
      <div>
        <label htmlFor="coverPicture">Cover Picture:</label>
        <input
          type="file"
          ref={coverPicInputRef}
          name='coverPicture'
          onChange={handleCoverPicChange}
        />
        {previewCoverPicture && <img src={previewCoverPicture} alt="Preview" />}
      </div>
      <button
       type="button" 
       onClick={handleSubmit}
      >
        Save
      </button>
    </form>
  );
};

export default EditProfile;
