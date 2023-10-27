import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js'
import Login from './pages/Login.js';
import HouseDashboard from './pages/HouseDashboard';
import Register from './pages/Register.js';import Dashboard from './pages/Dashboard.js';

function App() {
  return (
    <div>
 <Router>
  <Routes>
    <Route path='/'element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/housedashboard' element={<HouseDashboard/>}/>

  </Routes>
 </Router>

 </div>
  );
}

export default App;
