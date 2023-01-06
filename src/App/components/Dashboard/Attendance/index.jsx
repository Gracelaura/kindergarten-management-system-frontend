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
  <li className="border m-2 rounded-md p-5">
          <span> Nicholas njeru</span>
         <label>Present <input name="status" type="radio" unchecked/></label>
          <label>Absent<input type="radio" name="status" unchecked/></label>
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
       
        {/* <li className="border m-2 rounded-md p-5">this is attendance for date 09/01/2023<span className="rounded-md  float-right border outline outline-1 px-6 hover:text-white hover:bg-pink-500 text-pink-500 p-1">view</span></li>
          <li className="border m-2 rounded-md p-5">this is attendance for date 10/01/2023<span className="rounded-md  float-right border outline outline-1 px-6 hover:text-white hover:bg-pink-500 text-pink-500 p-1">view</span></li>
          <li className="border m-2 rounded-md p-5">this is attendance for date 11/01/2023<span className="rounded-md  float-right border outline outline-1 px-6 hover:text-white hover:bg-pink-500 text-pink-500 p-1">view</span></li> */}
      </ul>
    </div>
  );
}

export default Attendance;
