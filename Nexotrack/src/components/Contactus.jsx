import React from 'react';
import Contact from '../images/contact.png'
import Navbar from './Navbar';
import Footer from './Footer';

const Contactus = () => {
  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center px-4 py-10">
      
      <div className="flex  items-center justify-between gap-10 max-w-6xl w-full">
        

        <div className="flex-1 text-left">
          <h2 className="text-4xl font-extrabold mb-4 text-white">Get in touch with our team</h2>
          <p className="text-gray-400 mb-6">
            Have questions or need assistance? Our team is here to help!
            Fill out the form and we'll get back to you as soon as possible.
          </p>
          <img
            src={Contact}
            alt="Customer Service"
            className="w-100 mt-4 drop-shadow-lg "
            
          />
        </div>

        <form
          className="flex-1 bg-gray-800 p-8 rounded-xl  w-full max-w-lg"
          onSubmit={() => {
            alert('Message sent!');
          }}
        >
          <h3 className="text-2xl font-semibold mb-6">Send Us an Email</h3>

          <div className="mb-4">
            <label className="text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md"
              required
            />
          </div>

          <div className="mb-6">
            <label className=" text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contactus;

// calculaotr