import React from 'react'
import { NavLink } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';

const Landing = () => {
  return (
    <div>
      <div className='sticky top-0'>
        <nav className='flex justify-between items-center px-6 py-4 bg-gray-900 text-white border-b border-gray-600'>
          <h1 className='text-3xl font-black text-blue-400'>
            NexoTrack
          </h1>
          <div className='flex gap-4'>
            <NavLink
              to='/signup'
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105">
              Get Started
            </NavLink>
            <NavLink
              to="/login"
              className="text-white border border-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
            >Log In</NavLink>
          </div>
        </nav>
      </div>
      <Home/>
      <Footer/>
    </div>
  )
}

export default Landing
