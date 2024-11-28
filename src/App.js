import './App.css';
import Navbar from './components/nav'
import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/home';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>

    
    </BrowserRouter>
  );
}

export default App;
