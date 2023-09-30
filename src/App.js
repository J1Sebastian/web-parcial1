import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CafeList from './components/CafeList/CafeList';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { Container } from "react-bootstrap";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Container className="cs-app-container">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cafes" element={<CafeList />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Container>

    </>
  );
}

export default App;
