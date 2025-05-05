import React from 'react';
import twitterIcon from '../images/twitter.png';
import instagramIcon from '../images/instagram.png';
import linkedinIcon from '../images/message.png';
import youtubeIcon from '../images/youtube.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white py-16 border-t border-white/10 shadow-inner shadow-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-sm text-white/80">
          
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-4">Nexo<span className="text-blue-500">Track</span></h2>
            <p className="max-w-md leading-relaxed text-white/70">
              Disclaimer: The information provided on this website is for informational purposes only and does not constitute financial advice. Crypto markets are volatile and involve risk. Do your own research. © 2025 CryptoTrack. All rights reserved.
            </p>
          </div>

          <div className="flex gap-20">
            <div>
              <h3 className="text-white text-base font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-1">
                <li className="hover:text-white transition">Home</li>
                <li className="hover:text-white transition">Dashboard</li>
                <li className="hover:text-white transition">Trending</li>
                <li className="hover:text-white transition">Converter</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-base font-semibold mb-3">Market</h3>
              <ul className="space-y-1">
                <li className="hover:text-white transition">Bitcoin</li>
                <li className="hover:text-white transition">Ethereum</li>
                <li className="hover:text-white transition">Altcoins</li>
                <li className="hover:text-white transition">Prices</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-base font-semibold mb-3">Resources</h3>
              <ul className="space-y-1">
                <li className="hover:text-white transition">News</li>
                <li className="hover:text-white transition">Charts</li>
                <li className="hover:text-white transition">Guides</li>
                <li className="hover:text-white transition">Support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-base font-semibold mb-3">Legal</h3>
              <ul className="space-y-1">
                <li className="hover:text-white transition">Privacy Policy</li>
                <li className="hover:text-white transition">Terms</li>
                <li className="hover:text-white transition">Disclaimer</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <img src={twitterIcon} alt="Twitter" className="w-7 h-7 hover:scale-110 transition-transform" />
          <img src={instagramIcon} alt="Instagram" className="w-7 h-7 hover:scale-110 transition-transform" />
          <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7 hover:scale-110 transition-transform rounded bg-white" />
          <img src={youtubeIcon} alt="YouTube" className="w-7 h-7 hover:scale-110 transition-transform" />
        </div>

        <p className="text-center text-xs text-white/40">© 2025 CryptoTracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
