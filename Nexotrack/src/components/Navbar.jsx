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
            <NavLink to="/Home" className={linkClass}>Home</NavLink>
            <NavLink to='/Dashboard' className={linkClass}>Dashboard</NavLink>

            <a href="#" className={linkClass}>Learn</a>
            <a href="#" className={linkClass}>Trending</a>
            <a href="#" className={linkClass}>Converter</a>
            <a href="#" className={linkClass}>Contact Us</a>
        </div>
        <div className='flex gap-4'>
            <select className='rounded-xl px-2 py-1'>
                <option>USD</option>
                <option>INR</option>
            </select>
            <Link
              to="/login"
              className="text-lg bg-blue-500 px-4 py-2 border border-[#000000] transition-colors duration-500 rounded-xl hover:bg-black hover:text-[White] hover:border-[white]"
            >
              Log In
            </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
