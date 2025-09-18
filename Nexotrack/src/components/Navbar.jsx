import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { toast } from 'react-toastify'

const Navbar = () => {
  const { currentUser, logout } = useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  const linkClass = "hover:text-gray-300 transition-all duration-300 px-4 py-2 rounded-md hover:bg-gray-700 font-medium"
  
  const handleLogout = async () => {
    try {
      await logout()
      toast.success('Logged out successfully!')
      navigate('/')
    } catch (error) {
      toast.error('Failed to log out')
    }
  }

  return (
    <div className='sticky top-0 z-50 bg-gray-900 border-b border-gray-600 shadow-lg'>
      <nav className='flex justify-between items-center px-8 py-5 text-white max-w-7xl mx-auto'>
        <h1 className='text-4xl font-black tracking-tight text-blue-400'>
          NexoTrack
        </h1>
        
        <div className='hidden md:flex gap-1 text-sm font-medium'>
          <NavLink to='/dashboard' className={linkClass}>Dashboard</NavLink>
          <NavLink to='/learn' className={linkClass}>Learn</NavLink>
          <NavLink to='/trending' className={linkClass}>Trending</NavLink>
          <NavLink to='/converter' className={linkClass}>Converter</NavLink>
          <NavLink to='/contact-us' className={linkClass}>Contact</NavLink>
        </div>
        
        <div className='flex items-center gap-4 relative' ref={dropdownRef}>
          <div className='flex items-center gap-3'>
            <div 
              className='h-11 w-11 rounded-full bg-gray-600 flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-all duration-300 shadow-md'
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
            <div className='absolute right-0 top-14 bg-gray-800 border border-gray-600 shadow-2xl py-3 w-52 rounded-lg'>
              <div className='px-4 py-2 border-b border-gray-600'>
                <p className='text-sm text-gray-300'>Signed in as</p>
                <p className='text-sm font-medium truncate text-white'>{currentUser?.email}</p>
              </div>
              <button 
                onClick={handleLogout}
                className='w-full text-left px-4 py-2 text-sm hover:bg-gray-700 text-white transition-colors'
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
