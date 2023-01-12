import React from 'react'
import { useState, useEffect } from "react";
import avatar1 from './images/avatar1.png';


import "./Profile.css"


function Profile() {
  // const [teacherDetails, setTeacherDetails] = useState({});
 
//   useEffect(() => {


// }, []);
const teacherInfo= localStorage.getItem("teacher_data");

const teacherDetails = JSON.parse(teacherInfo);
// console.log('teacherDetails', teacherDetails)
// setTeacherDetails(teacherDetails);

  return (
    <div className="hero" >
      {/* <div className='container1'>
        <h2>Teacher's Profile</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4PsQCVFAt-oxVMzrHp66Rc7YCvfqXwNKcw&usqp=CAU" alt="Avatar" className="avatar" />
      </div> */}
      <div className='container2 flex justify-center items-center'>
      
      <form className='bg-[#F9FAFE] p-6 mt-6 rounded-lg shadow-md flex flex-col w-3/5'>
      {/* {teacherDetails.first_name} {teacherDetails.last_name} */}
      <p className='text-gray-500'>Full Name: </p>
     <input className="h-10 rounded-md bg-white text-black italic"
       value={teacherDetails.teacher.first_name +' ' + teacherDetails.teacher.last_name} 
     />
      <p className='text-gray-500'>Career Name:</p>
     <input className="h-10 rounded-md bg-white text-black italic "
       value={teacherDetails.teacher.career_name}
     />
     <p className='text-gray-500'>Email:</p>
      <input className="h-10 rounded-md bg-white text-black italic"
       value={teacherDetails.teacher.email}
     />
      <p className='text-gray-500'>Phone Number:</p>
      <input className="h-10 rounded-md bg-gray text-black italic"
       value={teacherDetails.teacher.phone_number}
     />
           <p className='text-gray-500'>Gender:</p>
     <input className="h-8 rounded-md bg-white text-black italic"
       value={teacherDetails.teacher.gender}
     />
      <button class="bg-[#B124A3] text-white py-2 px-4 mt-2 rounded-lg" href="#">Back</button>
     </form>
      {/* </div> */}
      </div>
  </div>
  );
}

export default Profile;