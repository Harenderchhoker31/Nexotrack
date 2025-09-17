import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { toast } from 'react-toastify'

const Navbar = () => {
  const { currentUser, logout } = useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  const linkClass = "hover:text-blue-400 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-gray-800"
  
  const handleLogout = async () => {
    try {
      await logout()
      toast.success('Logged out successfully!')
    } catch (error) {
      toast.error('Failed to log out')
    }
  }

  return (
    <div className='sticky top-0 z-50 backdrop-blur-md bg-black/90 border-b border-gray-800'>
      <nav className='flex justify-between items-center px-6 py-4 text-white max-w-7xl mx-auto'>
        <h1 className='text-3xl font-black'>
          Nexo
          <span className='text-blue-500'>Track</span>
        </h1>
        
        <div className='hidden md:flex gap-2 text-sm font-medium'>
          <NavLink to='/Dashboard' className={linkClass}>Dashboard</NavLink>
          <NavLink to='/learn' className={linkClass}>Learn</NavLink>
          <NavLink to='/trending' className={linkClass}>Trending</NavLink>
          <NavLink to='/converter' className={linkClass}>Converter</NavLink>
          <NavLink to='/contactus' className={linkClass}>Contact</NavLink>
        </div>
        
        <div className='flex items-center gap-4 relative' ref={dropdownRef}>
          <div className='flex items-center gap-3'>
            <div 
              className='h-10 w-10 rounded-full bg-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors'
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
              </svg>
            </div>
            <div className='hidden sm:block'>
              <p className='text-sm font-medium'>{currentUser?.email || 'Guest'}</p>
            </div>
          </div>
          
          {isDropdownOpen && (
            <div className='absolute right-0 top-12 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2 w-48'>
              <div className='px-4 py-2 border-b border-gray-700'>
                <p className='text-sm text-gray-300'>Signed in as</p>
                <p className='text-sm font-medium truncate'>{currentUser?.email}</p>
              </div>
              <button 
                onClick={handleLogout}
                className='w-full text-left px-4 py-2 text-sm hover:bg-gray-800 text-red-400 hover:text-red-300 transition-colors'
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
