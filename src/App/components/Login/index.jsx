import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Modal/modal.css";
import Nav from "../Home/Nav.jsx";
import icon from "./icon.svg";
import { TeacherContext } from "../Context/teacher-context";
function Login() {
  const { onSubmit, modal,setDone,done } = useContext(TeacherContext);

  
  const { register, handleSubmit } = useForm();
  return (
    <div className="w-screen h-screen bg-[#B124A3]">
      <Nav />
      {/* */}
      {modal ? (
       <div class="modal fade z-40  fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
       id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog relative w-auto pointer-events-none">
         <div
           class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
           <div
             class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
             <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Login successful</h5>
             <button type="button"
               class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
               data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body relative p-4">
             You have successfully logged in.
           </div>
           
         </div>
       </div>
     </div>
      ) : null}
      <hr className="border border-1"></hr>
      <div className="flex justify-center">
        <div className="main-container bg-white">
          <div className="card-one sm:block hidden">
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
                required
              />
              <label className="">Enter Password</label>
              <input
                id="password"
                className="border rounded-md  p-3"
                type="password"
                name="password"
                placeholder="Enter your password..."
                {...register("password")}
                required
              />
              <button
                className="px-5 flex justify-center p-3 bg-[#B124A3] text-white rounded-md"
                type="submit">
                {done ? (
                  <svg
                    class="animate-spin h-5 w-5 outline outline-3 mr-1 rounded-full"
                    viewBox="0 0 24 24"></svg>
                ) : null}
                <span>Login</span>
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
