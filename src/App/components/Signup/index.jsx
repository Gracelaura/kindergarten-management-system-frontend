import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import icon from "../Login/icon.svg"
import { TeacherContext } from "../Context/teacher-context";
import Nav from "../Home/Nav";
import "./signup.css";
function Signup({ onLogin }) {
  const { register, handleSubmit } = useForm();
  const { onSubmition, modal } = useContext(TeacherContext);

  return (
    <div>
      <div className="w-screen h-screen bg-[#B124A3]">
        <Nav />
        <hr className="border border-1"></hr>
        <div className="flex justify-center">
          <div className="main-container bg-white">
            <div className="card-one sm:block hidden">
              <div className="sub-card">
                <img
                  src={icon}
                  alt="image"></img>
              </div>
              <h2 className="text">Kinderjoy Teacher</h2>
              <h2 className="text2">
                Have an account?{" "}
                <Link to="/login" style={{ color: "#B124A3" }}>
                  Login Here
                </Link>
              </h2>
            </div>
            <div className="bg-white w-full m-3">
              <h2 className="text-2xl text-center m-2 bold">Teacher Registration</h2>

              {modal ? <div className="text-center text-white italic bg-[#B124A3] rounded-md">Signup sucessfull</div> : null}
              <form
                className="grid grid-cols-1 gap-3 m-10"
                onSubmit={handleSubmit(onSubmition)}>
                <input
                  id="first_name"
                  className="border rounded-md p-2"
                  type="text"
                  name="first_name"
                  placeholder="Enter your first name..."
                  {...register("first_name")}
                />
                <input
                  id="career_name"
                  className="border rounded-md p-2"
                  type="text"
                  name="career_name"
                  placeholder="Enter your career name..."
                  {...register("career_name")}
                />
                <input
                  id="last_name"
                  className="border rounded-md p-2"
                  type="test"
                  name="last_name"
                  placeholder="Enter your last name..."
                  {...register("last_name")}
                />
                <input
                  id="email"
                  className="border rounded-md p-2"
                  type="text"
                  name="email"
                  placeholder="Enter your email..."
                  {...register("email")}
                />
                <input
                  id="phone_number"
                  className="border rounded-md p-2"
                  type="number"
                  name="phone_number"
                  placeholder="Enter your phone number..."
                  {...register("phone_number")}
                />
                <input
                  id="password"
                  className="border rounded-md p-2"
                  type="password"
                  name="phone_number"
                  placeholder="Enter your password..."
                  {...register("password")}
                />
                <input
                  id="gender"
                  className="border rounded-md p-2"
                  type="text"
                  name="gender"
                  placeholder="Enter your gender..."
                  {...register("gender")}
                />
                <button
                  className="px-5 p-3 bg-[#B124A3] text-white rounded-md"
                  type="submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
