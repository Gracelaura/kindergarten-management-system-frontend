import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Modal/modal.css";
import Nav from "../Home/Nav.jsx";
import icon from "./icon.svg";
import { TeacherContext } from "../Context/teacher-context";
function Login() {
  const { onSubmit, modal } = useContext(TeacherContext);

  const { register, handleSubmit } = useForm();
  return (
    <div className="w-screen h-screen bg-[#B124A3]">
      <Nav />
      {/* */}
      {modal ? (
        <div className="modal items-center flex fixed italic bg-[#B124A3] rounded-md ">
          <div className="h-48 w-48 bg-slate-50">
            Login sucessfull{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>
          <div></div>
        </div>
      ) : null}
      <hr className="border border-1"></hr>
      <div className="flex justify-center">
        <div className="main-container bg-white">
          <div className="card-one">
            <div className="sub-card">
              <img src={icon} alt="image"></img>
            </div>
            <h2 className="text">Kinderjoy Admin</h2>
          </div>
          <div className="bg-white w-full m-3">
            <div className="m-10 flex flex-col items-center">
              <img
                className="h-20 w-20"
                src="https://i.ibb.co/qDhqYnx/Screenshot-2023-01-02-at-23-26-59.png"
                alt=""
              />
              <h2 className="text-2xl m-2">Teacher Login</h2>
              <h2 className="text-sm text-slate-400 m-2">
                Enter your email and password below
              </h2>
            </div>

            <form
              className="grid grid-cols-1 gap-3 m-10"
              onSubmit={handleSubmit(onSubmit)}>
              <label className="">Enter Email</label>
              <input
                id="email"
                className="border rounded-md p-3"
                type="text"
                name="email"
                placeholder="Enter your email..."
                {...register("email")}
              />
              <label className="">Enter Password</label>
              <input
                id="password"
                className="border rounded-md  p-3"
                type="password"
                name="password"
                placeholder="Enter your password..."
                {...register("password")}
              />
              <button
                className="px-5 p-3 bg-[#B124A3] text-white rounded-md"
                type="submit">
                Login
              </button>
            </form>

            <h2 className="text-center text-gray-500">
              Don't have an account?{" "}
              <Link to="/signup" style={{ color: "#B124A3" }}>
                Sign Up Here
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
