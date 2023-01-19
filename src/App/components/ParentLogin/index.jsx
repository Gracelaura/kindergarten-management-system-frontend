import React from "react";
import "./ParentLogin.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Nav from "../Home/Nav";
import kid from "./kids.svg";
import logo from "./logo.svg";

function ParentLogin() {
  const navigate = useNavigate();
  const [done, setDone] = useState(false);
  // Make sure to install useForm using npm to avoid errors
  const {
    register,
    handleSubmit,
  } = useForm();
  const [modal, setModal] = useState(false);

  function handleNotification() {
    setModal(true);
    handleClose();
  }

  function handleClose() {
    setTimeout(() => {
      setModal(false);
      navigate("/parent_dashboard");
    }, 2000);
  }

  function onSubmit(data) {
    setDone(true)
    fetch("/parent_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        res.json().then((res) => {
          localStorage.setItem("jwt", res.jwt);
          localStorage.setItem("parent", `${res.parent.id}`);
          localStorage.setItem("parent_data", JSON.stringify(res.parent))
          setDone(false)
          return handleNotification();
        });
      } else {
        res.json().then((error) => alert(error.errors));
      }
    });
  }
  return (
    <div className="main w-screen h-screen bg-[#B124A3]">
      <Nav />
      <hr className="border border-1"></hr>{" "}
      {modal ? (
        <div className=" bg-pink-200 text-center h-auto  m-auto ">
          Login Successful
        </div>
      ) : null}
      <div className=" flex items-center justify-center ">
        {/* phone_number: "743564786",
        password: "765476", */}

        <div className="main-container bg-white">
          <div className="card-one sm:block hidden">
            <div className="sub-card ">
              <img src={kid} alt="parents with kids"></img>
            </div>
            <h2 className="text text-pink-500">Kinderjoy Parent</h2>
            <h2 className="text2">
              Don't have an account?{" "}
              <Link to="/parent_signup" style={{ color: "#B124A3" }}>
                Sign Up Here
              </Link>
            </h2>
          </div>
          <div className="bg-white  rounded-r-3xl">
            <div className="flex items-center justify-center mt-12 mb-4">
              <img src={logo} alt="logo" />
            </div>
            <div className="flex justify-center">
              <p className="text-2xl font-semibold">Parent Login</p>
            </div>
            <div className="flex justify-center mt-2 mb-7">
              <p className="text-[#9FA2B4]">Enter your credentials below</p>
            </div>

            <form
              className="grid grid-cols-1 gap-3 m-10"
              onSubmit={handleSubmit(onSubmit)}>
              <label className="">PHONENUMBER</label>
              <input
                id="phone_number"
                className="border rounded-md p-3"
                type="number"
                name="phone_number"
                placeholder="Phone number"
                {...register("phone_number", {
                  required: true,
                })}
              />
              <label className="">PASSWORD</label>
              <input
                id="password"
                className="border rounded-md p-3"
                type="password"
                name="password"
                placeholder="Enter your password..."
                {...register("password", {
                  required: true,
                })}
              />
              <button
                className="px-3 p-2 flex bg-[#B124A3] justify-center text-white rounded-md"
                type="submit">
                   {done ?<svg
                  class="animate-spin h-5 w-5 outline outline-3 mr-1 rounded-full"
                  viewBox="0 0 24 24"></svg>:null}
             <span>Login</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentLogin;
