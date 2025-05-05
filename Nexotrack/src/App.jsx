import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Footer from './components/Footer'
import Login from './components/login'
import Landing from './components/landing'


function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
