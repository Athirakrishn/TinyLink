import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCalendar, faLink, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function StatsPage() {
  const navigate=useNavigate()
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
      <p className="text-3xl font-bold">42</p>
    </div>

    <div className="w-64 bg-white shadow rounded-2xl p-4">
      <div className="flex items-center gap-3 mb-2">
        <FontAwesomeIcon
          icon={faLink}
          className="text-green-500"
        />
        <span className="text-gray-600">Target URL</span>
      </div>
      <p className="text-blue-600 font-medium">https://react.dev</p>
    </div>

    <div className="w-64 bg-white shadow rounded-2xl p-4">
      <div className="flex items-center gap-3 mb-2">
        <FontAwesomeIcon
          icon={faCalendar}
          className="text-purple-500"
        />
        <span className="text-gray-600">Last Clicked</span>
      </div>
      <p className="font-medium">11/25/2025, 1:24:55 PM</p>
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