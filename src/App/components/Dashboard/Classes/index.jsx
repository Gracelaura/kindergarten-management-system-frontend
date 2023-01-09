import React, { useContext, useEffect, useState } from 'react'
import "./Classes.css"



function Classes(){
  const [classes, setClasses] = useState()
  const token = localStorage.getItem("teacherToken")
  console.log(token)

  function getClasses(){
    fetch("http://127.0.0.1:3000/classrooms",{
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then((res)=> res.json())
      .then((data)=> setClasses(data))
    
  }
  console.log(classes)
  useEffect(()=>{
  getClasses()
},[])
  return (
    <div className="classes-page">
    <h1>Classes</h1>
    {classes && classes.map(klass => (
      <div className="class-card" key={klass.id}>
        <h2>{klass.name}</h2>
        <p>Teacher: {klass.teacher.first_name} {klass.teacher.last_name}</p>
        <button className="button-5" type="submit">See Students</button>
      </div>
    ))}
  </div>
  
  )
}

export default Classes