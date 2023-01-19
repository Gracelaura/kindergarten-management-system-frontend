import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import ParentContext from '../../../ParentContext'
function SingleKid() {
const [kid,setKid] = useState({})
const [modal,setModal] = useState(false)
const [disciplines,setDisciplines] = useState([])
 const token = localStorage.getItem("jwt")
const config = {
  headers:{
  "content-type": "application/json",
   Authorization: `Bearer ${token}` 
  }
}

const {id} = useParams()


useEffect(()=>{
axios.get("/disciplines",config).then(res=>setDisciplines(res.data))

},[])
const myCases = disciplines.filter(c=>c.student_id == id)
console.log(myCases)
useEffect(()=>{
  axios.get(`/students/${id}`,config)
  .then(data=>setKid(data.data))

},[])

console.log(kid)
  return (
    <div>
    

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
        <p  className='text-center text-pink-900 outline outline-1 hover:bg-pink-600 hover:text-white px-5 rounded-sm'>{myCases.length}</p>
      </div>
    </div>
    <div className=' m-6 bg-pink-50 p-8'>
      <h1 className='text-pink-600 font-bold'>Students Description</h1>
    <p className=''>{kid.description}</p>
    </div>

    <div className='container mx-auto px-4 sm:px-8'>
   <table class="items-center table-fixed">
  <thead>
    <tr>
      <th></th>
      <th className='text-pink-600'>Title</th>
      <th className='text-pink-600'>Description</th>
    </tr>
  </thead>
  <tbody className='p-5'>
    { myCases.map((c,i)=>{
      return (<tr className=''>
        <td>{i+1}</td>
      <td className='mr-2 text-red-500'>{c.title}==></td>
      <td  className='ml-2' >{c.description}</td>
      
    </tr>)
    })
      
    }
    
   
  
  </tbody>
</table>
   </div>
    </div>
    
  )
}

export default SingleKid