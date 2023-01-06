import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { TeacherContext } from '../Context/teacher-context'
function Dashboard() {
const {token} = useContext(TeacherContext)
if (token) {
  return (
    <div>
        <div>
            <Sidebar />
        </div>
        <div>
        <Outlet/>
        </div>
       
    </div>

  )
}else {
  return (
  <div><h1>User Unauthorized</h1></div>
  )
}
}

export default Dashboard