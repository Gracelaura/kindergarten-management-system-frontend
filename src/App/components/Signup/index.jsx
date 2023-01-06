import React, { useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { TeacherContext } from "../Context/teacher-context";
import "./signup.css"
function Signup({ onLogin }) {
 const {register, handleSubmit} = useForm()
 const {onSubmition} = useContext(TeacherContext)
 
 return(
  <div>
    <div className="container">
    <div className="main-container">
        <div className="card-one">
          <div className="sub-card">
            <img src="https://i.ibb.co/QQrkZHb/Screenshot-2023-01-02-at-23-23-28.png" alt="image"></img>
          </div>
          <h2 className="text">Kinderjoy Teacher</h2>
          <h2 className="text2">Have an account? <Link to="/login" style={{ color: "#B124A3"}}>
          Sign Up Here
        </Link>
</h2>
          
        </div>
        <div className="card-two">
          <div className="img-div2">
            <img src="https://i.ibb.co/qDhqYnx/Screenshot-2023-01-02-at-23-26-59.png" alt="" />
            <h2 className='h2-text'>Kinderjoy School</h2>
          </div>
          <form className='login-form' onSubmit={handleSubmit(onSubmition)}>
        <input
          id="first_name"
          className="input3"
          type="text"
          name="first_name"
          placeholder="Enter your first name..."
          {...register('first_name')}
        />
        <input
          id="career_name"
          className="input3"
          type="text"
          name="career_name"
          placeholder="Enter your career name..."
          {...register('career_name')}
        />
        <input
          id="last_name"
          className="input3"
          type="test"
          name="last_name"
          placeholder="Enter your last name..."
          {...register('last_name')}
        />
        <input
          id="email"
          className="input3"
          type="text"
          name="email"
          placeholder="Enter your email..."
          {...register('email')}
        />
        <input
          id="phone_number"
          className="input3"
          type="number"
          name="phone_number"
          placeholder="Enter your phone number..."
          {...register('phone_number')}
        />
         <input
          id="password"
          className="input3"
          type="password"
          name="phone_number"
          placeholder="Enter your password..."
          {...register('password')}
        />
         <input
          id="gender"
          className="input3"
          type="text"
          name="gender"
          placeholder="Enter your gender..."
          {...register('gender')}
        />
        <button className="button-3" type="submit">Register</button>
      </form>
        </div>
      </div>
      </div>
      
      
  </div>
    );
}

export default Signup