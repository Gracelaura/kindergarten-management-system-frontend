import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function ParentDashboard() {
  const token = localStorage.getItem("jwt")
  if(token) {
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
  }else{
    return(
    <div>
      <h1>Unauthorized</h1>
    </div>
    )
  }
}

export default ParentDashboard