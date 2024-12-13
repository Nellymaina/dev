import './App.css';
import Navbar from './components/nav'
import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/home';
import Certification1 from "./components/SE"
import Blog from './components/artificial';
import Munchies from './components/munchiesshub'
function App() {
  
  return (
    <BrowserRouter basename="/dev">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} className="text-white" />
      <Route path='SECertification' element={<Certification1 />}/>
      <Route path="AICEcertification" element={<Blog />}/>
      <Route path="/portfolio" element={<Munchies />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
