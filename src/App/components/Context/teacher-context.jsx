import React, { Component, createContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import Signup from '../Signup';
export const TeacherContext = createContext()
export const TeacherContextProvider = (props) => {

   const navigate = useNavigate()

  const [onLogin, setLogin] = useState([])
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
             res.json().then((teacher) =>localStorage.setItem("logintoken", teacher.jwt), setLogin(teacher), navigate("/dashboard"))
           }else{
             res.json().then((error)=> alert(error.errors))
           }
         })
       }
      //  This function is called in the Signup Component
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
       console.log(onLogin)
       const token = localStorage.getItem("logintoken")
       console.log(token)
      


       const contextValue = {onSubmit, onSubmition, token}
  return<TeacherContext.Provider value={contextValue}>{props.children}</TeacherContext.Provider>
  
}
