import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function ParentLogin() {
  const navigate = useNavigate()
  // Make sure to install useForm using npm to avoid errors
  const {register, handleSubmit, formState: {errors}} = useForm()
  const [login, setLogin] = useState([])

  function onSubmit(data){
    console.log(data)
    fetch("http://127.0.0.1:3000/parent_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res)=> res.json())
      .then((res)=> setLogin(res), navigate("/parents_dashboard"))
  }

  console.log(login)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
    <div className="w-1/3 flex flex-col items-center p-6 bg-white rounded-lg shadow-xl">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYgAVMzopkLZhO1T-CjbKUHRbq050yn4vtQ&usqp=CAU" alt="Logo" className="h-32 w-32 rounded-full mb-6" />
      <h1>Parent Login</h1>
      <input
        type="text"
        placeholder="Parent Name"
        required=""
        className="px-3 py-2 mb-3 text-gray-700 rounded-lg shadow-sm focus:outline-none focus:shadow-outline w-full"
      />
      <input
        type="password"
        required=""
        placeholder="Password"
        className="px-3 py-2 mb-3 text-gray-700 rounded-lg shadow-sm focus:outline-none focus:shadow-outline w-full"
      />
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline w-full" onSubmit={handleSubmit(onSubmit)}>
        Log In
      </button>
      <div className="text-center mt-4 text-sm text-gray-600">
        Don't have an account? <a href="/ParentSignup" className="font-bold text-blue-500 hover:text-blue-800">Sign up</a>
      </div>
    </div>
  </div>
  );
}

export default ParentLogin;