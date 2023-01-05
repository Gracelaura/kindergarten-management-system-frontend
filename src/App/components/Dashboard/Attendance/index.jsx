import React from "react";
import { Link } from "react-router-dom";

function Attendance() {

const displayStudents = ()=>{
  console.log("clicked");
}


  return (
    <div className="grid grid-cols-2 justify-around">
        <button  className="bg-purple-800 w-28 rounded-md float-right" onClick={displayStudents}>take attendance</button>
        <div>
          <ul>
          <li className="border rounded-md p-5">this is attendance for date 08/01/2023<span className="rounded-md border bg-blue-700 p-1"><Link to="08_01_2023">view</Link></span></li>
          <li className="border rounded-md p-5">this is attendance for date 09/01/2023<span className="rounded-md border bg-blue-700 p-1">view</span></li>
          <li className="border rounded-md p-5">this is attendance for date 10/01/2023<span className="rounded-md border bg-blue-700 p-1">view</span></li>
          <li className="border rounded-md p-5">this is attendance for date 11/01/2023<span className="rounded-md border bg-blue-700 p-1">view</span></li>
          </ul>

        </div>
    </div>
  );
}

export default Attendance;
