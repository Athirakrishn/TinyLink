import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Redirect() {
  const navigate=useNavigate()
  return (
   <>
      <div className="md:flex min-h-screen justify-center items-center text-center w-full flex-col   ">
  <img src="https://www.chainreaction.ae/wp-content/themes/chainreaction_new2021/assets/404.gif" alt="" className=" md:w-140 text-center justify-center items-center "/>  
 <h1 className='md:mx-70 text-xl'>OH NO!</h1>
 <h1 className='md:mx-70 text-4xl font-bold'>Look Like You are Lost</h1>
 <h1 className='md:mx-70 text-xl semi-bold my-4' >The page you are looking for is not available</h1>
<div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          onClick={() => navigate("/")}
          className="bg-slate-800 text-white px-6 py-3 rounded-xl font-medium shadow hover:bg-indigo-700 transition"
        >
          Go Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium shadow hover:bg-gray-100 transition"
        >
          Go Back
        </button>
      </div>   </div>
   </>
  )
}

export default Redirect