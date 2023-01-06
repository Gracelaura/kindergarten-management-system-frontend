import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { TeacherContext } from '../Context/teacher-context';
function Login() {
  const {onSubmit} = useContext(TeacherContext)
  

  const {register, handleSubmit} = useForm()
  return (
    <div><div className="container">
    <div className="main-container">
        <div className="card-one">
          <div className="sub-card">
            <img src="https://i.ibb.co/QQrkZHb/Screenshot-2023-01-02-at-23-23-28.png" alt="image"></img>
          </div>
          <h2 className="text">Kinderjoy Teacher</h2>
          <h2 className="text2">Don't have an account? <Link to="/signup" style={{ color: "#B124A3"}}>
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
          <label className='label'>Enter Email</label>
        <input
          id="email"
          className="input2"
          type="text"
          name="email"
          placeholder="Enter your email..."
          {...register('email')}
        />
        <label className='label'>Enter Password</label>
        <input
          id="password"
          className="input2"
          type="password"
          name="password"
          placeholder="Enter your password..."
          {...register('password')}
        />
        <button className="button-2" type="submit">Login</button>
      </form>
        </div>
      </div>
      </div>
      
      </div>
  )
}

export default Login