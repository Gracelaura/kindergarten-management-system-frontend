import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Dashboard() {

const token = localStorage.getItem("teacherToken")

if(token){
  return (
    <div className='flex sm:flex-row bg-pink-500'>
        <div className='w-1/6 bg-slate-200 sm:h-screen'>
            <Sidebar />
        </div>
        <div className='w-5/6 m-3 bg-slate-200'>
        <Outlet/>
        </div>
       
    </div>
  )
}else{}
  
}

export default Dashboard