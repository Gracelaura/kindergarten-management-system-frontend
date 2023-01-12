import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleStudent() {
  const [student,setStudent] = useState({})
  const token = localStorage.getItem("teacherToken")
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
const {id} = useParams()

useEffect(() =>{
  axios.get(`http://localhost:3000/students/${id}`,config).then(data => setStudent(data.data))
},[])


console.log(student)
  return (
    <div className='grid h-full col-span-1 w-full'>
      <div className='h-4/5 w-2/3 p-auto m-auto flex flex-col items-center justify-around'>
        <div>
          <input type="text" value={student.admission_number}/>
        </div>
        <div>
          <input type="text" value={student.first_name}/>
        </div>
        <div>
          <input type="text" value={student.second_name}/>
        </div>
        <div>
          <input type="text" value={student.surname}/>
        </div>
        <div>
          <input type="text" value="average student"/>
  </div>
   </div> 
    </div>
  )
}

export default SingleStudent