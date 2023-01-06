import React,{useEffect, useState} from "react";
import axios from "axios"
import { useParams } from "react-router-dom";

function SingleAttendance() {
  const [dayAttendance,setDayAttendance] = useState([])
    const {date} = useParams()

useEffect(()=>{
  axios.get("http://localhost:3000/attendances")
  .then(res=>setDayAttendance(res.data.filter(data=>data.date === date)))
},[])

  return (
    <ul className="sm:mt-8 p-4 w-4/5 m-auto">
      <p className="text-2xl font-extrabold text-center">List of student register for date {date} </p>
      {
      dayAttendance.map((item,i)=>{
      return <li key={i} className="border m-2 rounded-md p-5 flex justify-around">
        <span>{i+1}</span>
        <span>{item.student_name}</span>
        <span>{item.status}</span>
        </li>
    
    })
      }
    </ul>
  );
}

export default SingleAttendance;