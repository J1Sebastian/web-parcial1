import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CafeList from './components/CafeList/CafeList';
import Login from './components/Login/Login';

function App() {
  return (
    <> 
      {/* Hacer un header con un titulo y una imagen */}

      <div className="App">
        <h4>El aroma magico</h4>
        <img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/arte-_TPEejAsyFIpngtGLiUdzkYx7o5Jr4V.jpg.webp" className="App-logo" alt="logo" />
      </div>

      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/cafes" element={<CafeList />} />
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
