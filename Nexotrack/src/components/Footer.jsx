import React from 'react';
import twitterIcon from '../images/twitter.png';
import instagramIcon from '../images/instagram.png';
import linkedinIcon from '../images/message.png';
import youtubeIcon from '../images/youtube.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 h-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">NexoTrack</h2>
            <p className="text-sm text-gray-400 max-w-sm">
            Disclaimer: The information provided on this website is for informational purposes only and does not constitute financial advice. NexoTrack markets are highly volatile and subject to significant risk. Always conduct your own research before making any investment decisions. © 2025 CryptoTrack. All rights reserved.
            </p>
          </div>

         
          <div className="flex gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1 text-gray-400">
                <li>Home</li>
                <li>Dashboard</li>
                <li>Trending</li>
                <li>Converter</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Market</h3>
              <ul className="space-y-1 text-gray-400">
                <li>Bitcoin</li>
                <li>Ethereum</li>
                <li>Altcoins</li>
                <li>Prices</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul className="space-y-1 text-gray-400">
                <li>News</li>
                <li>Charts</li>
                <li>Guides</li>
                <li>Support</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-1 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms</li>
                <li>Disclaimer</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-5 mb-4">
        <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
        <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
        <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 bg-white" />
        <img src={youtubeIcon} alt="YouTube" className="w-8 h-8" />
        </div>


        <p className="text-center text-xs text-gray-500">
          © 2025 CryptoTracker. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
