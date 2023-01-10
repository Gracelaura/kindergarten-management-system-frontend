import React from 'react'
import { useState } from "react";

import "./Profile.css"


function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    career: "",
    phone: "",
    email: "",
    gender: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with formData
    console.log(formData);
  };
  return (
    <div className="container" class='flex flex-col items-center'>
      <h1>Teacher's Profile</h1>
    <img src="https://img.freepik.com/free-photo/mother-with-daughter_144627-13199.jpg?w=740&t=st=1673381036~exp=1673381636~hmac=be0eb86900ef6d793a8d3b0e3f6df54fdb7ad78048676e284ae975c66d6f1f4e" alt="Avatar" className="avatar" />
    
    <form className="grid grid-cols-3 gap-4 m-3" onSubmit={handleSubmit}>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="text-lg mb-2">
          Name
        </label>
        <input
          className="h-28 rounded-md bg-pink-200 text-pink-600 text-center text-4xl"
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="career" className="text-lg mb-2">
          Career Name
        </label>
        <input
          className="h-20 rounded-md bg-pink-200 text-pink-600 text-center text-4xl"
          type="text"
          name="career"
          id="career"
          value={formData.career}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="phone" className="text-lg mb-2">
          Phone Number
        </label>
        <input
          className="h-20 rounded-md bg-pink-200 text-pink-600 text-center text-2xl"
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="text-lg mb-2">
          Email
        </label>
        <input
          className="h-28 rounded-md bg-pink-200 text-pink-600 text-center text-4xl"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-lg mb-2">Gender</label>
        <div>
          <input
            className="mr-2"
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={handleInputChange}
            checked={formData.gender === "male"}
          />
          </div>
          </div>
          </form>
  </div>
  );
}

export default Profile;