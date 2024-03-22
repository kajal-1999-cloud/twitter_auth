import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {
  return (
    <div className="App">
<Router>
  
<Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/signup" element={<Signup/>}/>
      </Routes>
    
</Router>
    </div>
  );
}

export default App;
