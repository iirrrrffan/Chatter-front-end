import React, { useEffect, useState } from 'react';
import "./home.css";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import { useNavigate } from 'react-router-dom';

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
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
