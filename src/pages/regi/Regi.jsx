import React from 'react';
import "./regi.css";
import { Link } from 'react-router-dom';

const Regi = () => {
    
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
    
              className="loginInput"
            />
            <input
              placeholder="Email"
          
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              
              className="loginInput"
              type="password"
              minLength="6"
            />
            {/* <input
              placeholder="Password Again"
            
              className="loginInput"
              type="password"
            /> */}
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to={"/login"}>
            <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Regi