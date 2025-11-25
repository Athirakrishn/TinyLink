import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './DashBoard'
import StatsPage from './StatsPage'
import Redirect from './Redirect'
import Health from './Health'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/code/:code" element={<StatsPage />} />
      <Route path="/healthz" element={<Health />} />
      <Route path="/:code" element={<Redirect />} />
    </Routes>
  )
}

export default App