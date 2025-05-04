import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>     
    </div>
  )
}

export default App
