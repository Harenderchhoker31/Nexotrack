import React from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login'
import Landing from './components/landing'
import Signup from './components/Signup'
import Contactus from './components/Contactus'
import Learn from './components/learn'
import Trending from './components/trending'
import Converter from './components/converter'


function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/Learn' element={<Learn/>}/>
        <Route path='/Trending' element={<Trending/>}/>
        <Route path='/Converter' element={<Converter/>}/>
      </Routes>
    </div>
  )
}

export default App
