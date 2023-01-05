import React from "react";
import axios from "axios"
import { useParams } from "react-router-dom";

function SingleAttendance() {
    const { date} = useParams()
const listAttendance = async()=>{
    console.log("attendance")
    console.log(date)
    const url = "http://127.0.0.1:3000/attendances"
    const config = {
        headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0ZWFjaGVyX2lkIjoyNn0.tgIaCKyOwiBNLCsskiDzJ6nCwW0A-dairsv_bqNBZN8"
        }
      }
   const response = await axios.get(url,config)
   console.log(response.data)


}
  return (
    <div>
      <p>SingleAttendance</p>
      <button onClick={listAttendance}>view</button>
    </div>
  );
}

export default SingleAttendance;
