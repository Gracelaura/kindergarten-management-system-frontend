import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Attendance() {
  const [attend, setAttend] = useState([]);
  const [dates, setDates] = useState(null);
  const [modal, setModal] = useState(false);
  const [kid, setKid] = useState([]);
  const token = localStorage.getItem("teacherToken")
  const config = {
    headers:{
    "content-type": "application/json",
     Authorization: `Bearer ${token}` 
    }
  }
  useEffect(() => {
    axios
      .get("http://localhost:3000/attendances",config)
      .then((res) => setAttend(res.data));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/students",config).then((res) => setKid(res.data));
  }, []);

  function takeAttendance() {
    setModal((modal) => true);
  }

  function dd(n){
    if(n < 10 ) {
        return `0${n}`
    }else{
        return n
    }
}

async function handlePresent(e,k) {
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth()+1
  let myDate = `${date.getFullYear()}-${dd(month)}-${dd(day)}`
  let myData = {
    classroom_id: 1,
    student_id: k.id,
    student_name: k.first_name,
    status: e.target.innerText,
    date: myDate
  }
  const {data} = await axios.post("http://localhost:3000/attendances",config,myData)
e.target.parentElement.style.display = "none"
console.log(data)
 return data
}
function handleAbsent(e,k) {
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth()+1
  let myDate = `${date.getFullYear()}-${dd(month)}-${dd(day)}`
  let myData = {
    classroom_id: 1,
    student_id: k.id,
    student_name: k.first_name,
    status: e.target.innerText,
    date: myDate
  }
  axios.post("http://localhost:3000/attendances",config,myData).then(res=>console.log(res))
  return e.target.parentElement.style.display = "none"
  }

  let register = kid.map((k,i) => {
    return (
      <li key={i} className="border m-2 grid grid-cols-3 rounded-md p-5">
        <span>{`${k.first_name} ${k.second_name}`}</span>
        <button onClick={(e)=>handlePresent(e,k)} className="outline outline-1 text-sky-600 hover:text-white hover:bg-sky-600 px-1 h-10 m-2 rounded-md">
          Present
        </button>
        <button  onClick={(e)=>handleAbsent(e,k)} className="outline outline-1 text-red-500 hover:text-white hover:bg-red-600 px-1 h-10 m-2 rounded-md">
          Absent
        </button>
      </li>
    );
  });

  return (
    <div className="w-4/5 m-auto bg-slate-50 ">
      <button
        onClick={takeAttendance}
        className="rounded-md shadow-md h-10 outline outline-1 text-pink-500 mt-4 mr-4 px-2 sm:float-right hover:text-white hover:bg-pink-500">
        Take Attendance
      </button>
      <p className="text-2xl font-serif mt-7 text-center">
        Select a day to view its attendance
      </p>
      <div className="flex justify-center">
        <input
          className="border rounded-md h-10 w-2/5"
          type="date"
          onChange={(e) => setDates(e.target.value)}
        />
        <button className="text-pink-500 outline outline-1 hover:text-white hover:bg-pink-500 px-6 ml-2 rounded-md">
          submit
        </button>
      </div>

      {modal ? <ul className="sm:mt-8 p-4">{register}</ul> : null}

        {dates ? (
          <li className="border m-2 rounded-md p-5">
            This is attendance for date {dates} --click view for more details
            <Link
              to={`${dates}`}
              className="rounded-md  float-right border outline outline-1 px-6 hover:text-white hover:bg-pink-500 text-pink-500 p-1">
              view
            </Link>
          </li>
        ) : null}
      
    </div>
  );
}

export default Attendance;
