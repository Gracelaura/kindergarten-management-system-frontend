import React from 'react'
import { useState, useEffect } from "react";

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
    <div className="container" class='flex flex-col items-center'>
      <div>
        <h1>Teacher's Profile</h1>
        <img src="https://img.freepik.com/free-photo/mother-with-daughter_144627-13199.jpg?w=740&t=st=1673381036~exp=1673381636~hmac=be0eb86900ef6d793a8d3b0e3f6df54fdb7ad78048676e284ae975c66d6f1f4e" alt="Avatar" className="avatar" />
      </div>
      <div>
      <p>Full Name: {teacherDetails.first_name} {teacherDetails.last_name}</p>
      <p>Career Name: {teacherDetails.career_name}</p>
      <p>Email: {teacherDetails.email}</p>
      <p>Phone Number: {teacherDetails.phone_number}</p>
      <p>Gender: {teacherDetails.gender}</p>
      </div>
  </div>
  );
}

export default Profile;