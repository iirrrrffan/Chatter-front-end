import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo">Chatter</h3>
        <span className="loginDesc">
          Login ........
        </span>
      </div>
      <div className="loginRight">
        <form className="loginBox" >
          <input
            placeholder="Email"
            type="email"
            required
            className="loginInput"
           
          />
          <input
            placeholder="Password"
            type="password"
            required
            minLength="6"
            className="loginInput"
           
          />
          <button className="loginButton" type="submit" > Login
            {/* {isFetching ? (
              <CircularProgress color="white" size="20px" />
            ) : (
              "Log In"
            )} */}
          </button>
          <Link to={"/sign"}>
          <button className="loginRegisterButton"> Sing in
            {/* {isFetching ? (
              <CircularProgress color="white" size="20px" />
            ) : (
              "Create a New Account"
            )} */}
          </button>
          </Link>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login