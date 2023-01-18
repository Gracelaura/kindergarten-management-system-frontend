import React, { useEffect, useState } from 'react'
import  icon from "./student.svg";
import "./viewdiscipline.css"
import {  Link, useNavigate } from 'react-router-dom'
function ViewDiscipline({setView, setAddCase, studentId}) {

 const [singleCase, setSingleCase] = useState()  
 const token = localStorage.getItem("teacherToken");
  function closeModal(){
    setView(false)
  }

  function hideViewModal(){
    setAddCase(true)
    closeModal()
  }

  useEffect(()=>{
    fetch(`/disciplines/${studentId}`,{
        headers:{
          Authorization : `Bearer ${token}`
        }
    }).then((res)=> res.json())
      .then((res)=> setSingleCase(res))
  }, [])
    console.log(singleCase)
  return (
    <div className='modal'>
           {singleCase && singleCase.map(item=>(
    <div className="kid-card" key={item.id}>
      
        <div className="avatar">
        <img src={icon} alt="Screenshot-2023-01-11-at-23-59-17" border="0"/>
        </div>
       
          <h2 className='header-name'>{item.student.first_name} {item.student.surname}</h2>
          <div className="text-card">
        <label>Title:</label>
        <h3 className='h3'>{item.title}</h3>
        <label>Details:</label>
        <p className='details'>Date: {item.date}</p>
        <span>{item.description}</span>
        </div>
       
        <div className='buttonContainer'>
       
        <button className="button-10" type="submit" onClick={hideViewModal}>Add Case</button>
        <button className="button-11" type="submit" onClick={closeModal}>Back</button>
        
        </div>
    </div>
))}

    </div>
  )
}

export default ViewDiscipline