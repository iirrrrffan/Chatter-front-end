
import React, { useEffect, useState } from 'react';
import "./profile.css";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const navigation = useNavigate()
  const [user,setUser]=useState(null);

useEffect(()=>{
 const storedUser = window.localStorage.getItem("user")
 if(storedUser){
  setUser(JSON.parse(storedUser));
 }
 
 if(storedUser){
  navigation("/profile")
 }else{
  navigation("/")
 }
},[])


  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src="https://i.pinimg.com/564x/10/06/8e/10068e23be71b95ed0a1a4d25a57f4d2.jpg"
              alt=""
            />
            <img
              className="profileUserImg"
              src="https://i.pinimg.com/564x/45/c4/6c/45c46ce18a62cd986e90ebf0c8b75557.jpg"
              alt=""
              
            />
          </div>
          <div className="profileInfo">
            <h2 className="profileInfoName">Edit profile information </h2>
            <div>
            <input className='input' placeholder='name'/>
            </div>
            <div  className='email'>
              <h1>Email</h1>
              <h1>irfanali@gmail.com</h1>
            </div>
            <div>
             <button className='btn'>Save</button>
            </div>
          </div>
        </div>
        <div className="profileRightBottom">
        </div>
      </div>
    </div>
  </>
  );
}

export default Profile;
