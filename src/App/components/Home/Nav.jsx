import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Home/assets/pre-logo.png";


const Navbar = () => {
  const [nav, setNav] = useState(true);
const navigate = useNavigate()
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex  flex-row justify-between items-center h-24  mx-auto px-8 text-white">
      <div>
      <div className="md:flex" >
     
        <img className="w-20 h-20 " src={Logo} alt="" />
        <div><h1 className="text-3xl font-bold text-[#B124A3]">KinderJoy.</h1></div>
        
      </div>
      <div>
        <h2 class="w-full text-xs font-medium title-font text-[#B124A3] tracking-widest title-font mb-1">
          Kindergarten Management Portal
        </h2>
      </div>
</div>
      

      <ul className="hidden md:flex bg-[#B124A3] rounded-md">
        <li onClick={()=>navigate("/")}  className="p-4 cursor-pointer">Home</li>
        <li onClick={()=>navigate("/parent_login")} className="p-4 cursor-pointer">Parent Login</li>
        <li onClick={()=>navigate("/parent_signup")}  className="p-4 cursor-pointer">Parent Register</li>
        <li onClick={()=>navigate("/login")} className="p-4 cursor-pointer">Teacher Login</li>
        <li onClick={()=>navigate("/signup")} className="p-4 cursor-pointer">Teacher Signup</li>
      </ul>
    </div>
  );
};

export default Navbar;
