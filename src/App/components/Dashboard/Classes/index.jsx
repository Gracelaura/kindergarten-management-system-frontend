import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Modal from "../../Modal/Modal";
import "./Classes.css";

function Classes() {
  const [classroom, setClassroom] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [update, setUpdate] = useState(false);
  const [availableClasses, setAvailableClasses] = useState([]);
  const token = localStorage.getItem("teacherToken");
  const teacher_id = localStorage.getItem("teacher");
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get(`/teachers/${parseInt(teacher_id)}`, config)
      .then((data) => setClassroom(data.data.classroom));
  }, [update]);
  function asignClass(id) {
    const data = {
      teacher_id: parseInt(teacher_id),
    };
    fetch(`/classrooms/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify({
        teacher_id: parseInt(teacher_id)
      }
      )
    }).then(res=>res.json())
      .then((res) => {
        console.log(res.data);
        setUpdate((update) => !update);
      })
      .catch((e) => console.log(e.message));
  }

  useEffect(() => {
    axios
      .get("/classrooms", {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setAvailableClasses(res.data));
  }, []);
  console.log(availableClasses);

  const list = availableClasses.map((c) => {
    return (
      <div className="flex flex-col rounded-md h-28 shadow-lg text-center">
        <span>{c.name}</span>
        <span>current teacher:{c.teacher.career_name}</span>
        <button
          onClick={() => asignClass(c.id)}
          className="outline outline-1  hover:bg-[#b124A3] rounded-md hover:text-white m-3 text-[#b124A3]">
          Assign to me
        </button>
      </div>
    );
  });

  function handleClick(id) {
    fetch(`/classrooms/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setModalData(res.students));
  }

  if (classroom === null) {
    return (
      <div>
        <h1 className="text-center">Select a class you will be teaching</h1>
        <h1 className="mt-3 text-center text-2xl">Available classes</h1>
        <div className="grid sm:grid-cols-3">{list}</div>
      </div>
    );
  } else {
    return (
      <div className="classes-page">
        <h1>Classes</h1>
        <div className="sub-div">
          <div className="class-card">
            <div className="logo-div">
              <h2 className="header">KD</h2>
            </div>
            <h2 className="header-2">{classroom.name}</h2>
            <p></p>
            <button
              className="button-5"
              type="submit"
              onClick={() => {
                setModal(true);
                handleClick(classroom.id);
              }}>
              See Students
            </button>
          </div>
        </div>
        {modal && <Modal setModal={setModal} modalData={modalData} />}
      </div>
    );
  }
}

export default Classes;
