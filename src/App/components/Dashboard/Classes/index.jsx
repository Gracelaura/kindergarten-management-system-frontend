import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Modal from "../../Modal/Modal";
import "./Classes.css";

function Classes() {
  const [classroom, setClassroom] = useState({});
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();
  const token = localStorage.getItem("teacherToken");
  const teacher_id = localStorage.getItem("teacher");

  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/teachers/${parseInt(teacher_id)}`,{ headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    }})
      .then((data) => setClassroom(data.data.classroom));
  },[])
  function handleClick(id){
    fetch(`http://127.0.0.1:3000/classrooms/${id}`,{
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then((res) => res.json())
      .then((res) => setModalData(res.students))
  }

  return (
    <div className="classes-page">
      <h1>Classes</h1>
      <div className="sub-div">
        <div className="class-card">
          <div className="logo-div">
            <h2 className="header">KD</h2>
          </div>
          <h2 className="header-2">{classroom.name}</h2>
          <p>
          </p>
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

export default Classes;
