
import './App.scss';
import Register from './components/pages/Register'
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
  return (
   
          <Router>
            <Routes>
           
            <Route  path="/login" element={<Login/>}/>
            <Route  path="/register" element={<Register/>}/>
            <Route exact path="/" element={<Home/>}/>
            </Routes>
          </Router>
         
      

   
  );
}

export default App;
