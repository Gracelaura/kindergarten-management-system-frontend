import React from 'react'
import "./ParentLogin.css"
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
function ParentLogin() {
  const navigate = useNavigate()
  // Make sure to install useForm using npm to avoid errors
  const {register, handleSubmit, formState: {errors}} = useForm()
  const [login, setLogin] = useState([])
  
  function onSubmit(data){
    fetch("http://127.0.0.1:3000/parent_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res)=>{
      if(res.ok) {
    res.json().then((res) => 
      {
        setLogin(res)
        localStorage.setItem("jwt", res.jwt)
        localStorage.setItem("parent", `${res.parent.id}`)
        navigate("/parents_dashboard")
        console.log(res)
      })
    }else{
      res.json().then((error)=> alert(error.errors))
    }
  })
  }

  const token = localStorage.getItem("jwt")
  const parent = localStorage.getItem("parent")
  return (
    
    <div className="container">
    <div className="main-container">
        <div className="card-one">
          <div className="sub-card">
            <img src="https://i.ibb.co/QQrkZHb/Screenshot-2023-01-02-at-23-23-28.png" alt="image"></img>
          </div>
          <h2 className="text">Kinderjoy Parent</h2>
          <h2 className="text2">Don't have an account? <Link to="/parent_signup" style={{ color: "#B124A3"}}>
          Sign Up Here
        </Link>
</h2>
          
        </div>
        <div className="card-two">
          <div className="img-div">
            <img src="https://i.ibb.co/qDhqYnx/Screenshot-2023-01-02-at-23-26-59.png" alt="" />
            <h2 className='h2-text'>Kinderjoy School</h2>
          </div>
          <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
          <label className='label'>Enter Number</label>
        <input
          id="phone_number"
          className="input2"
          type="number"
          name="phone_number"
          placeholder="Enter your phone number..."
          {...register('phone_number', {
            required: true
          })}
        />
        <label className='label'>Enter Password</label>
        <input
          id="password"
          className="input2"
          type="password"
          name="password"
          placeholder="Enter your password..."
          {...register('password', {
            required: true
          })}
        />
        <button className="button-2" type="submit">Login</button>
      </form>
        </div>
      </div>
      </div>
      
      
  )
}

export default ParentLogin