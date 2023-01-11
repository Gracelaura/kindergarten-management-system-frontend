import React from "react";
import "./ParentLogin.css";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Nav from "../Home/Nav";

function ParentLogin() {
  const navigate = useNavigate();
  // Make sure to install useForm using npm to avoid errors
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [login, setLogin] = useState([]);
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
    fetch("http://127.0.0.1:3000/parent_login", {
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
          return handleNotification();
        });
      } else {
        res.json().then((error) => alert(error.errors));
      }
    });
  }
  return (
    <div className="w-screen h-screen">
    <Nav />
      {" "}
      {modal ? (
          <div className=" bg-pink-200 text-center h-12 w-full rounded-md m-auto ">
            Login Successful
          </div>
        ) : null}
      <div className="flex fixed items-center justify-center ">
        
     

        {/* phone_number: "743564786",
        password: "765476", */}

        <div className="main-container">
          <div className="card-one sm:block">
            <div className="sub-card">
              <img
                src="https://i.ibb.co/QQrkZHb/Screenshot-2023-01-02-at-23-23-28.png"
                alt="image"></img>
            </div>
            <h2 className="text text-pink-500">Kinderjoy Parent</h2>
            <h2 className="text2">
              Don't have an account?{" "}
              <Link to="/parent_signup" style={{ color: "#B124A3" }}>
                Sign Up Here
              </Link>
            </h2>
          </div>
          <div className="card-two bg-gradient-to-r from-pink-100 to-transparent border">
            <div className="img-div">
              <img
                src="https://i.ibb.co/qDhqYnx/Screenshot-2023-01-02-at-23-26-59.png"
                alt=""
              />
              <h2 className="h2-text">Kinderjoy School</h2>
            </div>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
              <label className="label">Enter Number</label>
              <input
                id="phone_number"
                className="input2 text-pink-600"
                type="number"
                name="phone_number"
                placeholder="Enter your phone number..."
                {...register("phone_number", {
                  required: true,
                })}
              />
              <label className="label">Enter Password</label>
              <input
                id="password"
                className="input2"
                type="password"
                name="password"
                placeholder="Enter your password..."
                {...register("password", {
                  required: true,
                })}
              />
              <div className="flex items-center justify-center">
              <label>show password</label>
              <input type="checkbox"
              />
              </div>
              <button className="button-2" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentLogin;
