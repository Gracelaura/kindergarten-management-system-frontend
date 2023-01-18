import axios from "axios";
import React, { useEffect, useState } from "react";
import "./singlestudent.css";
import icon from "./student.svg";
import { useParams, Link } from "react-router-dom";

function SingleStudent() {
  const [student, setStudent] = useState({});
  const [discipline, setDiscipline] = useState(true);
  const [dCase, setDcase] = useState({});
  const token = localStorage.getItem("teacherToken");
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const { id } = useParams();

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setDcase({ ...dCase, [name]: value });
  }

  useEffect(() => {
    axios.get(`/students/${id}`, config).then((data) => setStudent(data.data));
  }, []);

  function handlePost(id) {
    console.log(id);
    axios
      .post("/disciplines", config, {
        title: dCase.title,
        date: dCase.date,
        description: dCase.description,
        student_id: id,
      })
      .then((res) => console.log(res.data));
  }

  function handleDisciplineCase(id) {
    setDiscipline((discipline) => !discipline);
    handlePost(id);
  }

  if (false) {
    return (
      <div className="modal">
        <div className="kid-card">
          <div className="avatar">
            <img
              src={icon}
              alt="Screenshot-2023-01-11-at-23-59-17"
              border="0"
            />
          </div>
          <h2 className="header-name">{student.first_name}</h2>
          <div className="text-card">
            <label>Name:</label>
            <h3 className="h3">
              {student.first_name} {student.second_name} {student.surname}
            </h3>
            <label>Details:</label>
            <p className="details">Age: {student.age}</p>
            <p>Admission No. {student.admission_number}</p>
            <span style={{ display: "inline" }}>
              Description: {student.description}
            </span>
          </div>
          <div className="buttonContainer">
            <Link to="..">
              <button className="button-11" type="submit">
                Back
              </button>
            </Link>
            <button
              onClick={handleDisciplineCase(student.id)}
              className="button-11"
              type="submit">
              add discipline case
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="m-auto flex items-center justify-center">
        <div className="grid grid-cols-1">
          <h1 className="text-2xl text-pink-500">Add discipline case</h1>
          <label>Title</label>
          <input
            onChange={(e) => handleChange(e)}
            className="h-10 m-2 bg-slate-100 border border-red-500 rounded-md"
            type="text"
            name="title"
            placeholder="enter discipline title"
          />
          <label>Date</label>
          <input
            onChange={(e) => handleChange(e)}
            className="h-10 m-2 bg-slate-100 border border-red-500 rounded-md"
            type="date"
            name="date"
            placeholder="enter discipline title"
          />
          <label>Description</label>
          <textarea
            onChange={(e) => handleChange(e)}
            className=" m-2 bg-slate-100 border border-red-500 rounded-md"
            type="text"
            name="description"
            placeholder="enter discipline title"></textarea>
          <button
            onClick={handlePost}
            className="outline outline-1 h-10 rounded-md hover:bg-pink-600 hover:text-white mt-2 text-pink-600">
            Submit
          </button>
          <button
            onClick={() => setDiscipline(false)}
            className="outline outline-1 h-10 rounded-md hover:bg-pink-600 hover:text-white mt-2 text-pink-600">
            back
          </button>
        </div>
      </div>
    );
  }
}

export default SingleStudent;
