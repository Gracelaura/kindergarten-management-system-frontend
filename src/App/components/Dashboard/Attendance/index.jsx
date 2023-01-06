import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Attendance() {
  const [attend, setAttend] = useState();
  const [dates, setDates] = useState(null);
  const [modal,setModal] = useState(false)
  const displayStudents = () => {
    console.log("clicked");
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/attendances")
      .then((res) => setAttend(res.data));
  }, []);

function takeAttendance() {
setModal(modal=> true)
}
  return (
    <div className="w-4/5 m-auto bg-slate-50">
      <button onClick={takeAttendance} className="rounded-md shadow-md h-10 outline outline-1 text-pink-500 mt-4 mr-4 px-2 sm:float-right hover:text-white hover:bg-pink-500">Take Attendance</button>
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

{modal ? <ul className="sm:mt-8 p-4" >
  <li className="border m-2 grid grid-cols-3 rounded-md p-5">
          <span> Nicholas njeru</span>
          <button className="outline outline-1 text-sky-600 hover:text-white hover:bg-sky-600 px-1 h-10 m-2 rounded-md">Present</button>
          <button className="outline outline-1 text-red-500 hover:text-white hover:bg-red-600 px-1 h-10 m-2 rounded-md">Absent</button>
         </li>
</ul>: null
}



      <ul className="sm:mt-8 p-4">
        { dates ?
           <li className="border m-2 rounded-md p-5">
           This is attendance for date {dates}      --click view for more details
           <Link
             to={`${dates}`}
             className="rounded-md  float-right border outline outline-1 px-6 hover:text-white hover:bg-pink-500 text-pink-500 p-1">
             view
           </Link>
         </li>: null
        }
         </ul>
    </div>
  );
}

export default Attendance;
