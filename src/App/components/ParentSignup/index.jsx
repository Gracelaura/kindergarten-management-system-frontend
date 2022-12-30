import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ParentSignup({ onLogin}) {
  const [parent, setParent] = useState([])
  const [parentLogin, setParentLogin] = useState({
    firstname: "",
    last_name: "",
    phone_number: "",
    password: "",
    role: ""
  })
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleChange(e) {
    setParentLogin({...parentLogin, [e.target.name]: e.target.value})
  }

  function onSignin(){
    navigate("/" )
  }
  

 function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("http://127.0.0.1:3000/parents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parentLogin),
    }).then((res) => res.json())
      .then((res)=> {localStorage.setItem("jwt", res.jwt)
      setParent(res.parent)
      }, navigate("/parents_dashboard"))
  }

  const token = localStorage.getItem("jwt")
  console.log(token)
  console.log(parent)
  return (
<div className="signupform">
    
    <form onSubmit={handleSubmit} className="registerform">
      <h1>Parent Registration</h1>
      <fieldset>
        <legend>SIGN UP HERE</legend>
        <label>Parent's Full Name</label>
      <input
      //  onChange={e => setForm({...form, review:e.target.value})}
        onChange={handleChange}
        // :first_name, :last_name, :phone_number, :password, :role
        id="first_name"
        className="signupinput"
        type="text"
        name="first_name"
        placeholder="Enter your first name..."
      /><br></br>
      <label>Last Name</label>
      <input
        onChange={handleChange}
        id="last_name"
        className="registerinput"
        type="text"
        name="last_name"
        placeholder="Enter your last name..."
      /><br></br>
       <label>Phone Number</label>
      <input
        onChange={handleChange}
        id="phone_number"
        className="registerinput"
        type="number"
        name="phone_number"
        placeholder="Enter your phone number..."
      /><br></br>
      <label>Password</label>
      <input
        onChange={handleChange}
        id="password"
        className="registerinput"
        type="password"
        name="password"
        placeholder="Enter your password..."
      />
      <label>Role</label>
      <input
        onChange={handleChange}
        id="role"
        className="registerinput"
        type="text"
        name="role"
        placeholder="Enter your role"
      /><br></br>
      <button className="loginbutton">Sign Up</button>
      <p>
        Already have an account?
        <Link to="/login" style={{ color: "blue", paddingLeft: "10px" }}>
          Login Here
        </Link>
      </p>
      </fieldset>
    </form>
  </div>
  );
}

export default ParentSignup