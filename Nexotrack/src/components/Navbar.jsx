import React from 'react'
import {Link , NavLink} from 'react-router-dom'

const Navbar = () => {
  const linkClass = " hover:text-blue-400 transition-colors duration-500 hover:underline underline-offset-4  px-2 py-1 ";
  return (
    <div className='sticky top-0 font-serif'>
      <nav className='flex justify-between items-center px-5 py-4 bg-[black] text-white'>
        <h1 className='text-3xl font-black'>
          Nexo
          <span className='text-blue-500'>Track</span>
        </h1>
        <div className='flex gap-5 text-base'>
            <NavLink to='/Dashboard' className={linkClass}>Dashboard</NavLink>

            <NavLink to='/learn' className={linkClass}>Learn</NavLink>
            <NavLink to='/trending' className={linkClass}>Trending</NavLink>
            <NavLink to='/converter' className={linkClass}>Converter</NavLink>
            <NavLink to='/contactus' className={linkClass}>Contact Us</NavLink>
        </div>
        <div className='flex gap-4'>
          <NavLink to='/login' className={linkClass}>Log Out</NavLink>
          <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" className='h-10 w-10 rounded-4xl' alt="" />
              
             
        </div>
      </nav>
    </div>
  )
}

export default Navbar
