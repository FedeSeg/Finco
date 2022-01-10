import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login';
import Movements from './components/movements/Movements';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movements" element={<Movements />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
