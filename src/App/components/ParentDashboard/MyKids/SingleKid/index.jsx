import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import ParentContext from '../../../ParentContext'
function SingleKid() {
const [kid,setKid] = useState({})
const [modal,setModal] = useState(false)
 const token = localStorage.getItem("jwt")
const config = {
  headers:{
  "content-type": "application/json",
   Authorization: `Bearer ${token}` 
  }
}

const {id} = useParams()

useEffect(()=>{
  axios.get(`/students/${id}`,config)
  .then(data=>setKid(data.data))

},[])
  return (
    <div>
      {modal ?
        <div className='m-auto h-20 border bg-red-500 flex justify-center items-center w-1/2'>
          
        hello discipline
      </div>:null
      }


    <div className='grid grid-cols-3 gap-3 justify-center items-center'>
      <div className='h-28 bg-pink-100 font-serif flex flex-col justify-center items-center rounded-sm'>
        <h1>Names</h1>
        <h1>{`${kid.first_name} ${kid.second_name} ${kid.surname}`}</h1>
      </div>
      <div className='h-28 bg-pink-100 font-serif flex flex-col justify-center items-center rounded-sm'>
        <h1>Admission Number</h1>
        <h1 className='text-4xl text-blue-900'>{kid.admission_number}</h1>
      </div>
      <div className='h-28 bg-pink-100 font-serif flex flex-col justify-center items-center rounded-sm'>
        <h1 className='text-center text-pink-900'>Discipline cases</h1>
        <p onClick={()=>setModal(true)} className='text-center text-pink-900 outline outline-1 hover:bg-pink-600 hover:text-white px-5 rounded-sm'>view</p>
      </div>
    </div>
    <div className=' m-6 bg-pink-50 p-8'>
      <h1 className='text-pink-600 font-bold'>Students Description</h1>
    <p className=''>{kid.description}</p>
    </div>
    </div>
  )
}

export default SingleKid