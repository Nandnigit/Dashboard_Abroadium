import React from 'react';
import SlidingCard from './Card'
import Slidercomponent from './Slider'
import './Home.css'



const Dashboard = () => {
    
  return (
    <div className=" min-h-screen bg-gray-900 py-10 text-white" id='bghome'>
      <main className=" p-4 md:p-10">
        <section>
          <h2 className="text-2xl mb-5">Resumes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-800 p-5 rounded">
                <div className=' text-center text-xl font-semibold'>Resumes</div>
              <img src="https://clearanceresume.ai/static/media/1.75ff0ba8c05a1fb690b3.png" alt="Resume 1" />
            </div>
            <div className="bg-gray-800 p-5 rounded">
            <div className=' text-center text-xl font-semibold'>Introduction</div>
              <img src="https://clearanceresume.ai/static/media/1.75ff0ba8c05a1fb690b3.png" alt="Resume 2" />
            </div>
            <div className="bg-gray-800 p-5 rounded">
            <div className=' text-center text-xl font-semibold'>Certification</div>
              <img src="https://clearanceresume.ai/static/media/1.75ff0ba8c05a1fb690b3.png" alt="Resume 3" />
            </div>
          </div>
        </section>
        
      </main>


      <div className=' py-3'>
        <div className=' px-4 md:px-10 flex flex-wrap gap-3'>
            <div className='  border-2 w-[300px] px-3 py-4 rounded-xl '>
                <div className=' flex flex-col gap-3 rounded-xl  bg-gray-800 px-3 py-4'>
                    <div className=' flex justify-between '>
                        <div className=' border-2 px-4 py-1 rounded-full'>20 May</div>
                        <div className=' bg-white px-2 py-2 rounded-full text-black'><i class="fa-solid fa-arrow-down"></i></div>
                    </div>
                    <div>Amazon</div>
                    <div className=' font-bold text-2xl'>Senior UI/UX Designer</div>
                    <div className=' flex gap-3'>
                        <div className=' border-2 rounded-md px-1 py-1'>Part Time</div>
                        <div className=' border-2 rounded-md px-1 py-1'>Senior Level</div>
                    </div>
                    <div className=' flex gap-3' >
                        <div className=' border-2 rounded-md px-1 py-1'>Distant</div>
                        <div className=' border-2 rounded-md px-1 py-1'>Project Work</div>
                    </div>
                </div>
                <div className=' flex justify-between '>
                    <div> $250/hr </div>
                    <div className=' border-2 px-2 py-2 bg-white text-black rounded-2xl'><button>Details</button></div>
                </div>
            </div>
            <div className='  border-2 w-[300px] px-3 py-4 rounded-xl '>
                <div className=' flex flex-col gap-3 rounded-xl  bg-gray-800 px-3 py-4'>
                    <div className=' flex justify-between '>
                        <div className=' border-2 px-4 py-1 rounded-full'>20 May</div>
                        <div className=' bg-white px-2 py-2 rounded-full text-black'><i class="fa-solid fa-arrow-down"></i></div>
                    </div>
                    <div>Amazon</div>
                    <div className=' font-bold text-2xl'>Senior UI/UX Designer</div>
                    <div className=' flex gap-3'>
                        <div className=' border-2 rounded-md px-1 py-1'>Part Time</div>
                        <div className=' border-2 rounded-md px-1 py-1'>Senior Level</div>
                    </div>
                    <div className=' flex gap-3' >
                        <div className=' border-2 rounded-md px-1 py-1'>Distant</div>
                        <div className=' border-2 rounded-md px-1 py-1'>Project Work</div>
                    </div>
                </div>
                <div className=' flex justify-between '>
                    <div> $250/hr </div>
                    <div className=' border-2 px-2 py-2 bg-white text-black rounded-2xl' ><button>Details</button></div>
                </div>
            </div>
            <div className='  border-2 w-[300px] px-3 py-4 rounded-xl '>
                <div className=' flex flex-col gap-3 rounded-xl  bg-gray-800 px-3 py-4'>
                    <div className=' flex justify-between '>
                        <div className=' border-2 px-4 py-1 rounded-full'>20 May</div>
                        <div className=' bg-white px-2 py-2 rounded-full text-black'><i class="fa-solid fa-arrow-down"></i></div>
                    </div>
                    <div>Amazon</div>
                    <div className=' font-bold text-2xl'>Senior UI/UX Designer</div>
                    <div className=' flex gap-3'>
                        <div className=' border-2 rounded-md px-1 py-1'>Part Time</div>
                        <div className=' border-2 rounded-md px-1 py-1'>Senior Level</div>
                    </div>
                    <div className=' flex gap-3' >
                        <div className=' border-2 rounded-md px-1 py-1'>Distant</div>
                        <div className=' border-2 rounded-md px-1 py-1'>Project Work</div>
                    </div>
                </div>
                <div className=' flex justify-between '>
                    <div> $250/hr </div>
                    <div className=' border-2 px-2 py-2 bg-white text-black rounded-2xl'><button>Details</button></div>
                </div>
            </div>
        </div>
      </div>
      
      <div className=' px-3 py-5'>
        <div className=' flex gap-5 flex-wrap justify-center'>
            <div className=' flex flex-col gap-4 '>
                <div className=' border-2 px-2 py-2 text-2xl font-bold'>LINKEDIN - LINK - VERIFIED - LAST VERIFY DATE - COIN</div>
                <div className=' border-2 px-2 py-2 text-2xl font-bold'>Google - LINK - VERIFIED - LAST VERIFY DATE - COIN</div>
            </div>
            <div className=' border-2 flex flex-col px-6 py-6 items-center'>
                <div>LinkedIn</div>
                <div>Google</div>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default Dashboard;
