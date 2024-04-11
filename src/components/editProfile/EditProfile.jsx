import React, { useEffect, useRef, useState } from 'react';
import "./editProfile.css"
import { Axios } from 'axios';

const EditProfile = () => {

  const user = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('user')) || {} : {};
  const userId = user._id;

  const [username, setUsername] = useState(user.username || '');
  const [email, setEmail] = useState(user.email || '');
  const [profilePic, setProfilePic] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [coverPicture,setCoverPicture] = useState(null);
  const [previewCoverPicture,setPreviewCoverPicture] = useState(null);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setPreviewImage(URL.createObjectURL(file)); 
      setCoverPicture(file);
      setPreviewCoverPicture(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await Axios.get(`http://localhost:3006/api/users/${userId}`);
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
  }, [userId]);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("profilePic", profilePic);
      formData.append("coverPicture", coverPicture);

      const response = await Axios.put(`http://localhost:3006/api/users/${userId}`, formData);
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (error) {
      console.log('Error editing profile:', error);
    }
  };

  return (
    <form className="form-container">
      <div>
        <label htmlFor="name">User Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="profilePic">Profile Picture:</label>
        <input
          type="file"
          id="fileInput"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
          name="profilePic"
        />
      </div>
      <div>
        <label htmlFor="coverPhoto">Cover Photo:</label>
        <input
           type="file"
           id="fileInput"
           ref={fileInputRef}
           className="hidden"
           onChange={handleFileChange}
          name="coverPhoto"
        />
      </div>
      <button
       type="submit"
       onClick={handleSubmit}
      >Save</button>

    </form>
  );
};

export default EditProfile;
