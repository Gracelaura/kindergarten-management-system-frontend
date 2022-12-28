import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ParentSignup({ onLogin}) {
  const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
 function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: name,
        email,
        phonenumber,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
          console.log(errors);
        });
      }
    });
  }
  return (
<div className="signupform">
    
    <form onSubmit={handleSubmit} className="registerform">
      <h1>Parent Registration</h1>
      <fieldset>
        <legend>SIGN UP HERE</legend>
        <label>Parent's Full Name</label>
      <input
        onChange={(e) => setFullName(e.target.value)}
        id="full_name"
        className="signupinput"
        type="text"
        value={name}
        placeholder="Enter your full names..."
      /><br></br>
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        className="registerinput"
        type="email"
        value={email}
        placeholder="Enter your email..."
      /><br></br>
       <label>Phone Number</label>
      <input
        onChange={(e) => setPhoneNumber(e.target.value)}
        id="number"
        className="registerinput"
        type="float"
        placeholder="Enter your phone number..."
      /><br></br>
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        className="registerinput"
        type="password"
        value={password}
        placeholder="Enter your password..."
      />
      <label>Confirm Password</label>
      <input
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        id="text"
        className="registerinput"
        type="password"
        value={passwordConfirmation}
        placeholder="Confirm password..."
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