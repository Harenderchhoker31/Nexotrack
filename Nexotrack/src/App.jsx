import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Footer from './components/Footer'
import Login from './components/login'
import Landing from './components/landing'
import Signup from './components/Signup'
import Contactus from './components/Contactus'


function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/contactus' element={<Contactus/>}/>
      </Routes>
    </div>
  )
}

export default App
