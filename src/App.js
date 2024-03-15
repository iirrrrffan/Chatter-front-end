
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Regi from './pages/regi/Regi';

function App() {
  return (
    <div className="App">
    <Routes>
<Route path='/' element={<Home/>} />
<Route path='/sign' element={<Regi/>}/>
<Route path='/login' element={<Login/>}/>

    </Routes>
    </div>
  );
}

export default App;
