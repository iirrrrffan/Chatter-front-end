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
     
      <button type="submit">Save</button>
    </form>
  );
};

export default EditProfile;
