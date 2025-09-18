import React from 'react';
import Contact from '../images/contact.png'
import Navbar from './Navbar';
import Footer from './Footer';

const Contactus = () => {
  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-8 py-12">
      
      <div className="flex items-center justify-between gap-16 max-w-7xl w-full">
        

        <div className="flex-1 text-left">
          <h2 className="text-5xl font-black mb-6 tracking-tight text-white">Get in touch with our team</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
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
          className="flex-1 bg-gray-800 border border-gray-600 p-10 w-full max-w-lg shadow-2xl rounded-2xl"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Message sent!');
          }}
        >
          <h3 className="text-3xl font-black mb-8 text-white">Send Us an Email</h3>

          <div className="mb-6">
            <label className="text-lg font-bold mb-3 text-gray-300 block">Your Name</label>
            <input
              type="text"
              className="w-full px-6 py-4 bg-gray-700 text-white border border-gray-600 text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-6">
            <label className="text-lg font-bold mb-3 text-gray-300 block">Email</label>
            <input
              type="email"
              className="w-full px-6 py-4 bg-gray-700 text-white border border-gray-600 text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-8">
            <label className="text-lg font-bold mb-3 text-gray-300 block">Message</label>
            <textarea
              rows="5"
              className="w-full px-6 py-4 bg-gray-700 text-white border border-gray-600 text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none rounded-lg"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-green-500/25 transform hover:scale-105 rounded-lg"
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

