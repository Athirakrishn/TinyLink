import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
<div style={{ position: "fixed", top: 0, left: 0, width: "100%" ,backgroundColor:"rgb(255, 255, 255)"}}>
      <nav className="w-full flex items-center justify-between px-6 py-4 shadow ">
  <div className="flex items-center gap-2">
  <p className="appname hover:text-gray-700 text-3xl text-indigo-700">TINY LINK</p>
  </div>
  
  
  
  <ul className="hidden md:flex items-center gap-8 text-gray-600 text-lg">
  <li className="hover:text-indigo-700 cursor-pointer"><Link to={'/'}>Home</Link></li>
  <li className="hover:text-indigo-700 cursor-pointer"><Link to={'/healthz'}>Health</Link></li>
  <li className="hover:text-indigo-700 cursor-pointer">Solutions</li>
  <li className="hover:text-indigo-700 cursor-pointer">Pricing</li>
  
  
  </ul>
  <button className="flex items-center gap-2 border rounded px-4 py-2 text-gray-700 hover:border-blue-600 hover:text-indigo-800 transition">
  Login
  </button>
  </nav>
</div>
  )
}

export default Header