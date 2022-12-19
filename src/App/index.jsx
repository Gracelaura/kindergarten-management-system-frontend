import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import KidsList from './components/Dashboard/KidsList'
import Attendance from './components/Dashboard/Attendance'
import Discipline from './components/Dashboard/Discipline'
import Classes from './components/Dashboard/Classes'
import Parents from './components/Dashboard/Parents'
import Profile from './components/Dashboard/Profile'
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="dashboard" element={<Dashboard />} >
    <Route path="kids_list" element={<KidsList/>} />
    <Route path="attendance" element={<Attendance/>} />
    <Route path="discipline" element={<Discipline/>} />
    <Route path="classes" element={<Classes/>} />
    <Route path="parents" element={<Parents/>} />
    <Route path="profile" element={<Profile/>} />
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App