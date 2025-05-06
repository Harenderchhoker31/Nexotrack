import React from 'react';
import logo from '../images/ripple-xrp-seeklogo.png'

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[black]  to-[#011838]  text-white">
      <div className="container mx-auto px-6 py-20 flex items-center justify-between">
        

        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl  font-extrabold ">
            The Leading <br />
            Crypto Portfolio Tracker <br />
            & Tax Calculator
          </h1>
          <p className="text-gray-300 text-lg">
            Seamlessly import data from 300+ exchanges, blockchains, and wallets.
            Easily track your crypto transactions and generate accurate tax reports.
          </p>
          <div className="flex">
            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-black hover:text-white">
              Get Started
            </button>
          </div>
        </div>

 
        <div className="flex justify-center">
          <img
            src={logo} 
            alt="Crypto Portfolio"
            className="w-118"
          />
        </div>
      </div>


      <div className="border-y mb-10 border-gray-600 py-10 bg-black text-center text-gray-300">
        <div className="flex justify-center gap-40 max-w-5xl mx-auto text-lg">
          <div>
            <p className="text-white text-2xl font-bold">2012</p>
            <p>founded</p>
          </div>
          <div>
            <p className="text-white text-2xl font-bold">1,966,000</p>
            <p>individual users</p>
          </div>
          <div>
            <p className="text-white text-2xl font-bold">25,000</p>
            <p>corporate clients</p>
          </div>
          <div>
            <p className="text-white text-2xl font-bold">$41.5 Billion</p>
            <p>total portfolio value</p>
          </div>
        </div>
      </div>
    </div>
  );
}
