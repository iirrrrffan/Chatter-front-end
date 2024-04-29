
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Regi from './pages/regi/Regi';
import { createContext } from 'react';
import Messanger from './pages/messanger/Messanger';
import Profile from './pages/profile/Profile';
import Conversation from './components/conversation/Conversation.jsx';
import EditProfile from './components/editProfile/EditProfile.jsx';
import List from './pages/list/List.jsx';
import FriendList from './components/friedsLsit/FriendList.jsx';
import UserProfile from './pages/userProfile/UserProfile.jsx';
import FollowingList from './components/followingList/FollowingList.js';
import FollowersList from './components/followersList/FollowersList.jsx';
import Post from './components/post/Post.jsx';
import Share from './components/share/Share.jsx';


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
<Route path='/people' element={<Conversation/>}/>
<Route path='/editprofile' element={<EditProfile/>}/>
<Route path='/list' element={<List/>}/>
<Route path='/friendslist' element={<FriendList/>}/>
<Route path='/userprofile/:_id' element={<UserProfile/>}/>
<Route path='/followingList' element={<FollowingList/>}/>
<Route path='/followersList' element={<FollowersList/>}/>
<Route path='/post/:id' element={<Post/>}/>
<Route path='/share' element={<Share/>}/>
    </Routes>
    </div>
  );
}

export default App;