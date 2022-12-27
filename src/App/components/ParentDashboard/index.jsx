import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function ParentDashboard() {
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default ParentDashboard