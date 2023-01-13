import React from 'react'
import  icon from "./student.svg";
import {  Link, useNavigate } from 'react-router-dom'
function ViewDiscipline({setView}) {
  return (
    <div className='modal'>
   
    <div className="kid-card">
      
        <div className="avatar">
        <img src={icon} alt="Screenshot-2023-01-11-at-23-59-17" border="0"/>
        </div>
        <h2 className='header-name'>Muriithi</h2>
        <div className="text-card">
        <label>Title:</label>
        <h3 className='h3'> Noise Making</h3>
        <label>Details:</label>
        <p className='details'>Date: 11042023</p>
        <span> Student refused to remain quite in class and was sent to detention</span>
        </div>
        <div className='buttonContainer'>
       
        <button className="button-11" type="submit" onClick={()=> setView(false)}>Back</button>
       
        </div>
    </div>


    </div>
  )
}

export default ViewDiscipline