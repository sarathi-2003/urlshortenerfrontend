import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import ForgotPassword from './Components/Auth/ForgotPassword';
import URLShortener from './Components/URLShortener';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<URLShortener />}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/url-shortener" element={<URLShortener />} />
       
      </Routes>
    </Router>
  );
}

export default App;
