import React from 'react';
import './SlidingText.css';
import { Link } from 'react-router-dom';

const SlidingText = () => {
  return (
    <div className="overflow-hidden ">
      <div className="animate-slide flex gap-2 shadow-xl rounded-xl px-4 py-2 ">
        <div className=" px-2  py-2 rounded-xl shadow-xl   ">Welcome to Abroadium’s Futuristic & AI Enabled Dashboard</div>
        <div className=" px-2  py-2 rounded-xl shadow-xl  ">We are live with our AI Resume Building Tool</div>
        <div className=" px-2  py-2 rounded-xl shadow-xl  ">Resumes crafted by Industry Experts</div>
        <div className=" px-2  py-2 rounded-xl shadow-xl  ">Verified International Jobs, Companies, Feed & more </div>
        <div className=" px-2  py-2 rounded-xl shadow-xl  ">Your One Stop Career Solutions here </div>
        <Link to='https://blog.abroadium.com/category/candidate-resources/'>
        <div className=" px-2  py-2 rounded-xl shadow-xl   font-bold text-sky-400">Subscribe Here </div>
        </Link>
        
      </div>
      

    </div>
  );
};

export default SlidingText;
