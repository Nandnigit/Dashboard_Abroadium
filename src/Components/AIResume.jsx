import React from 'react'
import { Link } from 'react-router-dom'

function AIResume() {
  return (
    <>
      
     <div className=' px-5 py-20 w-screen'>
       <div>
        <h1 className=' font-bold text-2xl '>Resume Builder</h1>
        <table className=' border-2 border-black '>
            <tr className=' border-2 border-black' >
            <th className=' border-2 border-black px-2'>Resume</th>
        <th className=' border-2 border-black px-2'>Score</th>
        <th className=' border-2 border-black px-2'>Matched Job</th>
        <th className=' border-2 border-black px-2'>Match</th>
        <th className=' border-2 border-black px-2'>Created</th>
        <th className=' border-2 border-black px-2'>Last Edited</th>
        <th className=' border-2 border-black px-2'>Actions</th>
            </tr>
        
            <tr className=' border-2 border-black'>
            <td className=' border-2 border-black px-2'>Resume1</td>
            <td className=' border-2 border-black px-2'>70%</td>
            <td className=' border-2 border-black px-2'>-</td>
            <td className=' border-2 border-black px-2'>-</td>
            <td className=' border-2 border-black px-2'>18/06/2024</td>
            <td className=' border-2 border-black px-2'>18/06/2024</td>
            <td className=' border-2 border-black px-2'><i className="fa-solid fa-upload px-1"></i><i className="fa-solid fa-pen-to-square px-1"></i><i className="fa-solid fa-trash px-1"></i></td>
            
            </tr>
            
            <tr className=' border-2 border-black'>
            <td className=' border-2 border-black px-2'>Resume1</td>
            <td className=' border-2 border-black px-2'>70%</td>
            <td className=' border-2 border-black px-2'>-</td>
            <td className=' border-2 border-black px-2'>-</td>
            <td className=' border-2 border-black px-2'>18/06/2024</td>
            <td className=' border-2 border-black px-2'>18/06/2024</td>
            <td className=' border-2 border-black px-2'><i className="fa-solid fa-upload px-1"></i><i className="fa-solid fa-pen-to-square px-1"></i><i className="fa-solid fa-trash px-1"></i></td>
            
            </tr>
            
            <tr className=' border-2 border-black'>
            <td className=' border-2 border-black px-2'>Resume1</td>
            <td className=' border-2 border-black px-2'>70%</td>
            <td className=' border-2 border-black px-2'>-</td>
            <td className=' border-2 border-black px-2'>-</td>
            <td className=' border-2 border-black px-2'>18/06/2024</td>
            <td className=' border-2 border-black px-2'>18/06/2024</td>
            <td className=' border-2 border-black px-2'><i className="fa-solid fa-upload px-1"></i><i className="fa-solid fa-pen-to-square px-1"></i><i className="fa-solid fa-trash px-1"></i></td>
            
            </tr>
            
            
        </table>
        <Link to='https://ai-resume-sepia.vercel.app/' target='_blank'>
        <div className=' flex justify-center mt-2'>
        <button className=' px-3 py-3 font-bold rounded-xl bg-slate-300'>Build your Resume Now</button>
        </div>
        </Link>
        
        
       </div>

     </div>

    </>
  )
}

export default AIResume
