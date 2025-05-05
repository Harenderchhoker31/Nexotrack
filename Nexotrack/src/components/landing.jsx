import React from 'react'
import { NavLink } from 'react-router-dom';
import Home from './home'
import Footer from './Footer';

const Landing = () => {
    const linkClass = " hover:text-blue-400 transition-colors duration-500 hover:underline underline-offset-4  px-2 py-1 ";
  return (
    <div>
      <div className='sticky top-0 font-serif'>
      <nav className='flex justify-between items-center px-5 py-4 bg-[black] text-white'>
        <h1 className='text-3xl font-black'>
          Nexo
          <span className='text-blue-500'>Track</span>
        </h1>
        <div className='flex gap-5 text-base'>
            <NavLink className="bg-white text-blue-700 font-semibold border border-[#000000] px-4 py-2 rounded-lg transition-colors duration-500 hover:bg-black hover:text-white hover:border-[white]">
              Get Started
            </NavLink>
            <NavLink
              to="/login"
              className="text-lg bg-blue-500 px-4 py-2 border border-[#000000] transition-colors duration-500 rounded-xl hover:bg-black hover:text-[White] hover:border-[white]"
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
