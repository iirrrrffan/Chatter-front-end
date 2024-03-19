
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Regi from './pages/regi/Regi';
import { createContext } from 'react';


export const userLogin=createContext()

function App() {
  return (
    <div className="App">
    <Routes>
<Route path='/' element={<Login/>} />
<Route path='/sign' element={<Regi/>}/>
<Route path='/home' element={<Home/>}/>

    </Routes>
    </div>
  );
}

export default App;
