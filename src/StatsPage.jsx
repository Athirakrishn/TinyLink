import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCalendar, faClock, faLink, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { viewSingleLinksAPI } from './services/allAPI'

function StatsPage() {
  const navigate=useNavigate()
  const {code} = useParams()
  const [viewData,setViewData]=useState({})
 
useEffect(() => {
  if (code) viewStats();
}, [code]); 

 const viewStats = async ( ) => {
   try {
     const result = await viewSingleLinksAPI(code);
     if (result.status == 200) {
   setViewData(result.data)
     } 
   } catch (err) {
     console.log(err);
   }
 };

  return (
    <>
<Header/>
<div className='mt-19 md:h-100 bg-gray-100'>


<div className="p-6 w-full">

  <button
    onClick={() => navigate("/")}
    className="flex items-center gap-2 text-gray-600 hover:text-black mb-4"
  >
    <FontAwesomeIcon icon={faArrowLeft} size={16} />
    Back to Dashboard
  </button>
  <h1 className="text-3xl font-bold mb-6">Link Statistics</h1>
  <div className="flex gap-6 flex-wrap justify-evenly">

 
    <div className="w-64 bg-white shadow rounded-2xl p-4">
      <div className="flex items-center gap-3 mb-2">
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="text-blue-500"
        />
        <span className="text-gray-600">Total Clicks</span>
      </div>
      <p className="text-3xl font-bold">{viewData.totalClicks}</p>
    </div>

    <div className="w-64 bg-white shadow rounded-2xl p-4">
      <div className="flex items-center gap-3 mb-2">
        <FontAwesomeIcon
          icon={faLink}
          className="text-green-500"
        />
        <span className="text-gray-600">Target URL</span>
      </div>
      <p className="text-blue-600 font-medium"> <a 
    href={`${viewData.originalUrl}`} 
    target="_blank" 
    className="text-blue-600 underline"
  >{viewData.shortCode}</a>
  </p>
    </div>

 
    <div className="w-64 bg-white shadow rounded-2xl p-4">
      <div className="flex items-center gap-3 mb-2">
        <FontAwesomeIcon
          icon={faCalendar}
          className="text-purple-500"
        />
        <span className="text-gray-600">Last Clicked</span>
      </div>
      <p className="font-medium">{viewData.lastClicked}</p>
    </div>
    
    <div className="w-64 bg-white shadow rounded-2xl p-4">
      <div className="flex items-center gap-3 mb-2">
        <FontAwesomeIcon
          icon={faClock}
          className="text-pink-900"
        />
        <span className="text-gray-600">Created At</span>
      </div>
      <p className="font-medium">{viewData.createdAt}</p>
    </div>

  </div>
</div>

</div>
<hr />
<Footer/>
    </>
  )
}

export default StatsPage