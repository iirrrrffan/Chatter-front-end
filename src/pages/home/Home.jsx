import React, { useEffect, useState } from 'react';
import "./home.css";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import chatter from "../../img/3d person - talk stock illustration_ Illustration of small - 21464086.jpg"
import Rightbar from '../../components/rightbar/Rightbar';

const Home = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = window.localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedUser) {
      navigation("/home");
    } else {
      navigation("/");
    }
  }, []);

  return (
    <div className="homePage1">
      <Topbar />
      <div className='homeContainer1'>
        <Sidebar />
      <img 
      src={chatter} alt='chatter' className='homeimg'
      />
           <Rightbar />
      </div>
    </div>
  );
}

export default Home;
