import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from './images/avatar.svg';
import "./Profile.css";

function Profile() {
  const navigate = useNavigate()
  const teacherInfo= localStorage.getItem("teacher_data");

  const teacherDetails = JSON.parse(teacherInfo);

  return (
    <div>
      <div className='container2 flex justify-center items-center'> 
        <form className='bg-[#F9FAFE] p-6 mt-6 rounded-lg shadow-md flex flex-col w-3/5'>
          <h1 class='text-center text-2xl' >Teacher's Profile</h1>
          <img src={avatar} alt="Avatar" className="avatar object-contain" />
            <p className='text-gray-500'>Full Name: </p>
            <input className="h-10 rounded-md bg-white text-black italic text-xl"
              value={teacherDetails.teacher.first_name +' ' + teacherDetails.teacher.last_name} 
            />
            <p className='text-gray-500'>Career Name:</p>
            <input className="h-10 rounded-md bg-white text-black italic text-xl "
              value={teacherDetails.teacher.career_name}
            />
            <p className='text-gray-500'>Email:</p>
            <input className="h-10 rounded-md bg-white text-black italic text-xl"
              value={teacherDetails.teacher.email}
            />
            <p className='text-gray-500'>Phone Number:</p>
            <input className="h-10 rounded-md bg-gray text-black italic text-xl"
              value={teacherDetails.teacher.phone_number}
            />
            <p className='text-gray-500 '>Gender:</p>
            <input className="h-8 rounded-md bg-white text-black italic text-xl"
              value={teacherDetails.teacher.gender}
            />
          <button onClick={()=>navigate("/dashboard")} class="bg-[#B124A3] text-white py-1 px-4 mt-2 rounded-lg ">Back</button>
        </form>
      </div>
  </div>
  );
}
export default Profile;