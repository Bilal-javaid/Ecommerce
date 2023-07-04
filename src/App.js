import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from "./pages/Home";
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from "./pages/Navbar";
import Services from "./pages/Services";
import './index.css';
// import {BrowserRouter as Router,Swtich,Route,Routes,Link} from "react-router-dom";
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
const App = () =>{
  return (
    <> 
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
    </>
  );
}
export default App;
