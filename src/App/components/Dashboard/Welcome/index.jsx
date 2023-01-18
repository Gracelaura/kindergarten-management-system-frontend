import React from "react";
import icon from "./icon.svg"
import img from "./img1.svg"
function Welcome() {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-center m-2 text-5xl text-[#B124A3]">Teacher Dashboard</h1>
      <div className="h-48 m-auto w-4/5 bg-[#B124A3] rounded-md flex flex-row justify-between">
        <div className="m-auto p-5 h-full w-1/2 text-white">
            <div>kindergarten management portal</div>
            <h1 className="text-5xl">Welcome Teacher</h1>
            <p>Hello Admin</p>
        </div>
        <div className="bg-white rounded-full h-24 w-24 m-auto flex justify-center items-center">
            <img  src={icon} alt="icon"/>
        </div>
      </div>
      <div className="grid grid-cols-1 pt-14">
        <div className="flex justify-center">
            <img src={img} alt="image1"/>
        </div>
        
      </div>
     
    </div>
  );
}

export default Welcome;
