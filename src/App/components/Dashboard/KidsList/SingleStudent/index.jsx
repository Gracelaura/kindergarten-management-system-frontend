import axios from "axios";
import React, { useEffect, useState } from "react";
import "./singlestudent.css";
import icon from "./student.svg";
import { useParams, Link } from "react-router-dom";

function SingleStudent() {
  const [student, setStudent] = useState({});
  const token = localStorage.getItem("teacherToken");
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/students/${id}`, config).then((data) => setStudent(data.data));
  }, []);

  console.log(student);
  return (
    <div className="modal">
      <div className="kid-card">
        <div className="avatar">
          <img src={icon} alt="Screenshot-2023-01-11-at-23-59-17" border="0" />
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
          <Link to="/dashboard/addcase">
            <button
              className="button-10"
              type="submit"
              onClick={() => localStorage.setItem("studentId", student.id)}>
              Add Discipline Case
            </button>
          </Link>
          <Link to="..">
            <button className="button-11" type="submit">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleStudent;
