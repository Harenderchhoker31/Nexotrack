import React from 'react';
import logo from '../images/ripple-xrp-seeklogo.png'
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-20 flex items-center justify-between">
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-white">
            The Leading <br />
            Crypto Portfolio Tracker <br />
            & Tax Calculator
          </h1>
          <p className="text-gray-300 text-lg">
            Seamlessly import data from 300+ exchanges, blockchains, and wallets.
            Easily track your crypto transactions and generate accurate tax reports.
          </p>
          <div className="flex">
            <NavLink
              to='/signup'
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105">
              Get Started
            </NavLink>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={logo} 
            alt="Crypto Portfolio"
            className="w-96"
          />
        </div>
      </div>

      <div className="border-y border-gray-600 py-10 bg-gray-800 text-center text-white">
        <div className="flex justify-center gap-20 max-w-5xl mx-auto text-lg">
          <div>
            <p className="text-white text-2xl font-bold">2012</p>
            <p className="text-gray-300">founded</p>
          </div>
          <div>
            <p className="text-white text-2xl font-bold">1,966,000</p>
            <p className="text-gray-300">individual users</p>
          </div>
          <div>
            <p className="text-white text-2xl font-bold">25,000</p>
            <p className="text-gray-300">corporate clients</p>
          </div>
          <div>
            <p className="text-white text-2xl font-bold">$41.5 Billion</p>
            <p className="text-gray-300">total portfolio value</p>
          </div>
        </div>
      </div>
    </div>
  );
}
