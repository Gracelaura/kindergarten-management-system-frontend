import React from 'react'
import { useState, useEffect } from "react";
import avatar1 from './images/avatar1.png';


import "./Profile.css"


function Profile() {
  const [teacherDetails, setTeacherDetails] = useState({});
 
  useEffect(() => {

  const teacherInfo= localStorage.getItem("teacherInfo");

  const teacherDetails = JSON.parse(teacherInfo);
  // console.log('teacherDetails', teacherDetails)
  setTeacherDetails(teacherDetails);
}, []);

  return (
    <div className="hero" >
      <div className='container1'>
        <h2>Teacher's Profile</h2>
        {/* https://img.freepik.com/free-photo/mother-with-daughter_144627-13199.jpg?w=740&t=st=1673381036~exp=1673381636~hmac=be0eb86900ef6d793a8d3b0e3f6df54fdb7ad78048676e284ae975c66d6f1f4e */}
        <img src={avatar1} alt="Avatar" className="avatar" />
      </div>
      <div className='container2'>
      <p>Full Name: {teacherDetails.first_name} {teacherDetails.last_name}</p>
      <p>Career Name: {teacherDetails.career_name}</p>
      <p>Email: {teacherDetails.email}</p>
      <div className='container3'>
      <p>Phone Number: {teacherDetails.phone_number}</p>
      <p>Gender: {teacherDetails.gender}</p>
      {/* <h1>Other Profiles</h1> */}
      </div>
      </div>
  </div>
  );
}

export default Profile;