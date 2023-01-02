import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./parentsignup.css";
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

  
  
  
  

   function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("http://127.0.0.1:3000/parents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parentLogin),
    }).then((res)=>{
      if(res.ok){
        res.json().then((data) => setParent(data),navigate("/parents_dashboard"))
      }else{
        res.json().then((error)=> alert(error.errors))
      }
    })
  }
  localStorage.setItem("jwt", parent.jwt)
  const token = localStorage.getItem("jwt")
  console.log(token)
  console.log(parent)

  
  return (
  <div className="container">
  <div className="main-container">
      <div className="card-one">
        <div className="sub-card">
          <img src="https://i.ibb.co/rkY319L/Screenshot-2023-01-01-at-01-08-52.png" alt="image"></img>
        </div>
        <h2 className="text">Kinderjoy Parent</h2>
        <h2 className="text2">Already have an account? <Link to="/login" style={{ color: "#B124A3"}}>
          Login Here
        </Link>
</h2>
      </div>
      <div className="card-two">
        <h3>New Parent Registration</h3>
        <form className="form" onSubmit={handleSubmit} >
        <input
        id="first_name"
        className="input"
        type="text"
        name="first_name"
        placeholder="Enter your first name..."
        onChange={handleChange}
      />
      <input
        id="last_name"
        className="input"
        type="text"
        name="last_name"
        placeholder="Enter your last name..."
        onChange={handleChange}
      />
      <input
        id="phone_number"
        className="input"
        type="number"
        name="phone_number"
        placeholder="Enter your phone number..."
        onChange={handleChange}
      />
      <input
        id="password"
        className="input"
        type="password"
        name="password"
        placeholder="Enter your password..."
        onChange={handleChange}
      />
      <input
        id="role"
        className="input"
        type="text"
        name="role"
        placeholder="Enter your role..."
        onChange={handleChange}
      />
      <button className="button-1" type="submit">Register</button>
    </form>
      </div>
    </div>
    </div>
    
    
  
  )
}

export default ParentSignup