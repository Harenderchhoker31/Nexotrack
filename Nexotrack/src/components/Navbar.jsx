import React from 'react'

const Navbar = () => {
  const linkClass = "text-white hover:text-[#3399fe] transition-colors duration-500 hover:underline underline-offset-4  px-2 py-1 ";
  return (
    <div>
      <nav className='flex justify-between items-center px-12 py-5 bg-[#001c38] text-white'>
        <h1 className='text-3xl font-black'>
          <span>Nexo</span>
          <span className='text-[#3399fe]'>Track</span>
        </h1>
        <div className='flex gap-5 text-base'>
            <a href="#" className={linkClass}>Home</a>
            <a href="#" className={linkClass}>Learn</a>
            <a href="#" className={linkClass}>Trending</a>
            <a href="#" className={linkClass}>Converter</a>
            <a href="#" className={linkClass}>Contact Us</a>
        </div>
        <div className='flex gap-4'>
            <select className='border rounded-xl px-2 py-1'>
                <option>USD</option>
                <option>INR</option>
            </select>
            <button className='text-lg bg-[#3399fe] px-4 py-2 border border-[#3399fe] transition-colors duration-500 rounded-xl hover:bg-[#001c38] hover:text-[#3399fe] hover:border-[#3399fe] hover:px-5'
            >Log In</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
