import React, { useState } from 'react';
import logo from './logo.png';
import './Home.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <nav className="fixed min-w-full " id='bgnavbar' >
      <div className="  px-4 ">
        <div className="flex  h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="">
                <img src={logo} alt='logo' className=' w-full h-14'/>
            </a>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="/" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Gold Tier</a>
            <input type='search' className=' px-2 py-2 w-72 rounded-full bg-slate-500 text-slate-300' placeholder=' Enter ' />
                          <a href="/" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Home</a>
              <a href="/" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Jobs</a>
              <a href="/" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">AI Ranks</a>
              
              <a href="/" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"><i className="fa-solid fa-message text-purple-500"></i></a>
              
              <a href="/" target='_blank' className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"><i className="fa-solid fa-envelope p-2 text-purple-500"></i>200 Coins</a>
              <a href="/" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"><i className="fa-solid fa-bell text-purple-500"></i></a>
              
              
              <a href="/" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"><i className="fa-solid fa-user text-purple-500"></i></a>
              
            </div>
             <div className="flex sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-gray-700 focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div> 
            
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Resume</a>
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">CV</a>
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Cover Letter</a>
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Advice</a>
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Login</a>
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
    
    </>
  );
};

export default Navbar;
