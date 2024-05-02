import {useRef, useState} from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


const Login = () => {
  const router =useNavigate()
  const EmailRef=useRef(null);
  const passwordRef=useRef(null)
  const [error, setError] = useState(null);

  const handleLogin = async(e)=>{
    e.preventDefault();
    const inputEmail=EmailRef.current.value;
    const inputPassword=passwordRef.current.value;

    if (!inputEmail || !inputPassword) {
      setError("Please fill out all fields.");
      return;
    }

    try{
      const data={
        email:inputEmail,
        password:inputPassword
      }
      console.log(data)
  
      const response = await axios.post('https://api.chatterchating.site/api/auth/login',data)
      console.log(response)
      if(response.status===200){
        localStorage.setItem("user",JSON.stringify(response.data))
        router('/home')
      }
      
    }catch(error){
      console.log(error,"login error");
    }
  }

  
  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo">Chatter</h3>
        <span className="loginDesc">
         ........................
        </span>
      </div>
      <div className="loginRight">
        <form className="loginBox" >
          <input
            placeholder="Email"
            type="email"
            ref={EmailRef}
            required
            className="loginInput"
           
          />
          <input
            placeholder="Password"
            type="password"
            required
            ref={passwordRef}
            minLength="6"
            className="loginInput"
           
          />
           {error && <p className="error">{error}</p>}
          <button className="loginButton" onClick={handleLogin} > Login
          
          </button>
          <Link to={"/sign"}>
          <button className="loginRegisterButton"> Sing Up
          
          </button>
          </Link>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login