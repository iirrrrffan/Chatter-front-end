
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Regi from './pages/regi/Regi';
import { createContext } from 'react';
import Messanger from './pages/messanger/Messanger';
import Profile from './pages/profile/Profile';
import ChatOnline from './components/chatOnline/ChatOnline';
import CloseFriend from './components/closeFriend/CloseFriend.jsx';
import Online from './components/online/Online.jsx';
import Share from './components/share/Share.jsx';
import Conversation from './components/conversation/Conversation.jsx';
import EditProfile from './components/editProfile/EditProfile.jsx';




export const userLogin=createContext()

function App() {
  return (
    <div className="App bg-black w-full h-auto flex flex-col ">
    <Routes>
<Route path='/' element={<Login/>} />
<Route path='/sign' element={<Regi/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/messanger' element={<Messanger/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/chat' element={<ChatOnline/>}/> 
<Route path='/close' element={<CloseFriend/>}/>
<Route path='/online' element={<Online/>}/>
<Route path='/share' element={<Share/>}/>
<Route path='/people' element={<Conversation/>}/>
<Route path='/editprofile' element={<EditProfile/>}/>
    </Routes>
    </div>
  );
}

export default App;