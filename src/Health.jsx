import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Health() {
  return (
    <>
    <Header/>
    <div className="container  m-20">
   

  <h1 className="text-3xl font-bold flex items-center justify-center gap-2 mb-6">
    System Health
  </h1>


  <div className="bg-white  rounded-2xl shadow border border-gray-200 p-6 w-full max-w-3xl">
    <div className="flex justify-between items-center mb-4">
      <div>
        <h2 className="text-lg font-semibold">Application Status</h2>
        <p className="text-gray-500 text-sm">Real-time system metrics.</p>
      </div>

      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex items-center gap-1">
        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
        Operational
      </span>
    </div>

  
    <div className="border-t border-gray-200">
      <div className="flex justify-between py-3 text-gray-700">
        <span className="font-medium">API Status</span>
        <span>200 OK</span>
      </div>

      <div className="flex justify-between py-3 text-gray-700 bg-gray-50">
        <span className="font-medium">Version</span>
        <span>1.0</span>
      </div>

      <div className="flex justify-between py-3 text-gray-700">
        <span className="font-medium">Uptime</span>
        <span>2115.83 seconds</span>
      </div>

      <div className="flex justify-between py-3 text-gray-700 bg-gray-50">
        <span className="font-medium">Server Time</span>
        <span>2025-11-25T11:16:49.489Z</span>
      </div>
    </div>
  </div>


    </div>
    <Footer/>
    </>
  )
}

export default Health