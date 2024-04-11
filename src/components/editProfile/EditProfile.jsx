import React from 'react';
import "./editProfile.css"

const EditProfile = () => {

  return (
    <form className="form-container">
      <div>
        <label htmlFor="name">User Name:</label>
        <input
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="profilePic">Profile Picture:</label>
        <input
          type="file"
          id="profilePic"
          name="profilePic"
        />
      </div>
      <div>
        <label htmlFor="coverPhoto">Cover Photo:</label>
        <input
          type="file"
          id="coverPhoto"
          name="coverPhoto"
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditProfile;
