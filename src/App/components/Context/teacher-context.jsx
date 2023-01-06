import React, { createContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
export const TeacherContext = createContext()
export const TeacherContextProvider = (props) => {
   const navigate = useNavigate()
   const [teacher, setTeacher] = useState([])
    function onSubmit(data) {
        console.log(data)
   
         fetch("http://127.0.0.1:3000/login", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(data),
         }).then((res)=>{
           if(res.ok){
             res.json().then((data) => setTeacher(data), navigate("/dashboard"), localStorage.setItem("jwt", data.jwt))
           }else{
             res.json().then((error)=> alert(error.errors))
           }
         })
       }

       function onSubmition(data) {
        console.log(data)
         fetch("http://127.0.0.1:3000/teachers", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(data),
         }).then((res)=>{
           if(res.ok){
             res.json().then((data) =>localStorage.setItem("jwt" ,data[1].token), navigate("/dashboard"), setTeacher(data))
           }else{
             res.json().then((error)=> alert(error.errors))
           }
         })
       }
       const token = localStorage.getItem("jwt")
       console.log(token)
       console.log(teacher)


       const contextValue = {onSubmit, onSubmition, token}
  return<TeacherContext.Provider value={contextValue}>{props.children}</TeacherContext.Provider>
  
}
