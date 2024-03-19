import React, { useRef  } from 'react';
import "./regi.css";
import { Link, useNavigate} from 'react-router-dom';

import axios from "axios"

const Regi = () => {


const router = useNavigate();
  const usernameRef=useRef(null);
  const emailRef=useRef(null);
  const passwordRef=useRef(null);

  const handleSignUp= async(e)=>{
    e.preventDefault();
    
    const inputUsername=usernameRef.current.value;
    const inputEmail=emailRef.current.value;
    const inputPassword=passwordRef.current.value;
    try {
      const data={
    
        username:inputUsername,
        email:inputEmail,
        password:inputPassword
      }
      const response= await axios.post('http://localhost:3006/api/auth/register',data)
      if(response.status===201){
        router('/home')
      }
      console.log(response);
    
    } catch (error){
    console.log(error,"signupppp");
    }

  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Chatter</h3>
          <span className="loginDesc">
            Connect with friends and make happy life on Chatter.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" >
            <input
              placeholder="Username"
              ref={usernameRef}
              className="loginInput"
            />
            <input
              placeholder="Email"
              ref={emailRef}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              ref={passwordRef}
              className="loginInput"
              type="password"
              minLength="6"
            />
          
            <button className="loginButton" type="submit" onClick={handleSignUp}>
              Sign Up
            </button>
            <Link to={"/"}>
            <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Regi