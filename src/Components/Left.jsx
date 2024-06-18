import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Left() {
  return (
    <>
     <aside className=" hidden md:flex md:flex-col md:py-36 md:w-[23%] md:justify-start  md:p-5" id='bgnavbar'>
        
        <nav className=' '>
          <div className=' flex flex-col'>
          <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600"><i className="fa-solid fa-file p-3 text-purple-500"></i><a href="#feed" className="text-white">Ai Resume Builder</a></Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600"><i className="fa-solid fa-user p-3 text-purple-500"></i><a href="#feed" className="text-white">Feed</a></Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600"><i className="fa-solid fa-paper-plane p-3 text-purple-500"></i><a href="#resources" className="text-white">Resources</a></Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600"><i className="fa-solid fa-upload p-3 text-purple-500"></i><a href="#freemium" className="text-white">Upload Resume</a></Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600"><i className="fa-solid fa-book-open-reader p-3 text-purple-500"></i><a href="#about" className="text-white">About</a></Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600"><i className="fa-solid fa-file p-3 text-purple-500"></i><a href="#education" className="text-white">Education</a></Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600"><i className="fa-solid fa-pen p-3 text-purple-500"></i><a href="#projects" className="text-white">Projects</a></Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600"><i className="fa-solid fa-gear p-3 text-purple-500"></i><a href="#settings" className="text-white">Settings</a></Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600"><i className="fa-solid fa-right-to-bracket p-3 text-purple-500"></i><a href="#logout" className="text-white">Log Out</a></Link>
          </div>
        </nav>
      </aside> 
    </>
  )
}

export default Left
