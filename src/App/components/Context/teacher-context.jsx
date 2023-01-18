import React, { Component, createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Signup from "../Signup";
export const TeacherContext = createContext();
export const TeacherContextProvider = (props) => {
  const navigate = useNavigate();
  const [done, setDone] = useState(false);
  const [onLogin, setLogin] = useState({});
  const [teacher, setTeacher] = useState({});
  const [modal, setModal] = useState(false);
  function handleNotification() {
    setModal(true);
    handleClose();
  }

  function handleClose() {
    setTimeout(() => {
      setModal(false);
      navigate("/dashboard");
    }, 3000);
  }

  function onSubmit(data) {
    console.log(data);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        res.json().then((teacher) => {
          localStorage.clear();
          localStorage.setItem("teacherToken", teacher.jwt);
          localStorage.setItem("teacher", `${teacher.teacher.id}`)
          localStorage.setItem("teacher_data", JSON.stringify(teacher));
          setLogin((onLogin) => teacher);
         handleNotification()
          console.log(teacher)
        });
      } else {
        res.json().then((error) => alert(error.errors));
      }
    });
  }
  //  This function is called in the Signup Component
  function onSubmition(data) {
    fetch("/teachers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
         
          setTeacher(data);
          localStorage.clear();
          console.log(data)
          localStorage.setItem("teacherToken", data[1].token);
          localStorage.setItem("teacher", data[0].id);
          localStorage.setItem("teacher_data", JSON.stringify(data));
          handleNotification();
        });
      } else {
        res.json().then((error) => alert(error.errors));
      }
    });
  }
  const token = localStorage.getItem("teacherToken");
  const teacher_id = localStorage.getItem("teacher");
  const contextValue = { onSubmit, onSubmition, teacher_id, modal, token,done,setDone };
  return (
    <TeacherContext.Provider value={contextValue}>
      {props.children}
    </TeacherContext.Provider>
  );
};
