import React, { useContext, useEffect, useState } from 'react'
import Modal from '../../Modal/Modal'
import "./Classes.css"



function Classes(){
  const [classes, setClasses] = useState()
  const [modal, setModal] = useState(false)
  const [modalData, setModalData] = useState()
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

  function handleClick(id){
    fetch(`http://127.0.0.1:3000/classrooms/${id}`,{
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then((res) => res.json())
      .then((res) => setModalData(res.students))

  }
  console.log(modalData)

  return (
    <div className="classes-page">
    <h1>Classes</h1>
    {classes && classes.map(klass => (
      <div className="class-card" key={klass.id}>
        <h2>{klass.name}</h2>
        <p>Teacher: {klass.teacher.first_name} {klass.teacher.last_name}</p>
        <button className="button-5" type="submit" onClick={()=> {setModal(true)
           handleClick(klass.id)}} >See Students</button>
      </div>
    ))}
    {modal &&
    <Modal setModal={setModal} modalData={modalData}/>
}
  </div>
  
  )
}

export default Classes