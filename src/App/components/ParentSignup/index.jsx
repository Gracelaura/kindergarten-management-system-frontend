import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import "./parentsignup.css";
function ParentSignup({ onLogin}) {
  const [parent, setParent] = useState([])
  const {register, handleSubmit} = useForm()
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

 
  
  
  
  

   function onSubmit(data) {
   console.log(data)
    setErrors([]);
    fetch("http://127.0.0.1:3000/parents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res)=>{
      if(res.ok){
        res.json().then((data) => setParent(data), navigate("/parents_dashboard"), localStorage.setItem("jwt", data.jwt))
      }else{
        res.json().then((error)=> alert(error.errors))
      }
    })
  }
  
  const token = localStorage.getItem("jwt")
  console.log(token)
  console.log(parent)

  
  return (
  <div className="container">
  <div className="main-container">
      <div className="card-one">
        <div className="sub-card">
          <img src="https://i.ibb.co/rkY319L/Screenshot-2023-01-01-at-01-08-52.png" alt="image"></img>
        </div>
        <h2 className="text">Kinderjoy Parent</h2>
        <h2 className="text2">Already have an account? <Link to="/parent_login" style={{ color: "#B124A3"}}>
          Login Here
        </Link>
</h2>
      </div>
      <div className="card-two">
        <h3>New Parent Registration</h3>
        <form className="form" onSubmit={handleSubmit(onSubmit)} >
        <input
        id="first_name"
        className="input"
        type="text"
        name="first_name"
        placeholder="Enter your first name..."
        {...register('first_name') }
      />
      <input
        id="last_name"
        className="input"
        type="text"
        name="last_name"
        placeholder="Enter your last name..."
        {...register('last_name') }
      />
      <input
        id="phone_number"
        className="input"
        type="number"
        name="phone_number"
        placeholder="Enter your phone number..."
        {...register('phone_number') }
      />
      <input
        id="password"
        className="input"
        type="password"
        name="password"
        placeholder="Enter your password..."
        {...register('password')}
      />
      <button className="button-1" type="submit">Register</button>
    </form>
      </div>
    </div>
    </div>
    
    
  
  )
}

export default ParentSignup