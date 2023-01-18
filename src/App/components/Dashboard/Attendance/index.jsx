import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Attendance() {
  const [attend, setAttend] = useState([]);
  const [dates, setDates] = useState(null);
  const [modal, setModal] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [data, setData] = useState([]);
  const [modal2, setModal2] = useState(null);
  const [classroom, setClassroom] = useState({});
  const [kid, setKid] = useState([]);
  const token = localStorage.getItem("teacherToken");
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const teacher_id = localStorage.getItem("teacher");
  useEffect(() => {
    axios
      .get(`/teachers/${teacher_id}`, config)
      .then((res) => {
        setClassroom(res.data.classroom);
        setKid(res.data.classroom.students);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/attendances", config)
      .then((res) => setAttend(res.data));
  }, []);

  async function takeAttendance(p) {
    setModal2(false);
    const { data } = await axios.get("/attendances");
    const ans = data.filter((i) => i.date === p);
    if (ans.length === 0) {
      let register = kid.map((k, i) => {
        return (
          <li key={i} className="border m-2 grid grid-cols-3 rounded-md p-5">
            <span>{`${k.first_name} ${k.second_name}`}</span>
            <button
              onClick={(e) => handlePresent(e, k)}
              className="outline outline-1 text-sky-600 hover:text-white hover:bg-sky-600 px-1 h-10 m-2 rounded-md">
              Present
            </button>
            <button
              onClick={(e) => handleAbsent(e, k)}
              className="outline outline-1 text-red-500 hover:text-white hover:bg-red-600 px-1 h-10 m-2 rounded-md">
              Absent
            </button>
          </li>
        );
      });
      setData(register);
    } else {
      setData("attendance already taken");
    }
  }

  function handlePresent(e, k) {
    let myData = {
      classroom_id: classroom.id,
      student_id: k.id,
      student_name: k.first_name,
      status: e.target.innerText,
      date: dates,
    };

    e.target.parentElement.style.display = "none";
    return axios
      .post("/attendances", myData, config)
      .then((res) => console.log(res));
  }
  function handleAbsent(e, k) {
    let myData = {
      classroom_id: classroom.id,
      student_id: k.id,
      student_name: k.first_name,
      status: e.target.innerText,
      date: dates,
    };
    e.target.parentElement.style.display = "none";
    return axios
      .post("/attendances", myData, config)
      .then((res) => console.log(res));
  }

  return (
    <div className="w-4/5 flex items-center flex-col m-auto">
      <button
        onClick={() => {
          setModal2(true);
          setModal3(false);
        }}
        className="rounded-md shadow-md h-10 outline outline-1 text-pink-500 mt-4 mr-4 px-2 sm:float-right hover:text-white hover:bg-pink-500">
        Take Attendance
      </button>
      <button
        onClick={() => {
          setModal3(true);
          setModal2(false);
        }}
        className="rounded-md shadow-md h-10 outline outline-1 text-pink-500 mt-4 mr-4 px-2 sm:float-right hover:text-white hover:bg-pink-500">
        View Attendance
      </button>
      {modal3 ? (
        <div className="flex flex-col p-8">
          <p className="text-2xl font-serif m-2 text-center">
            Select a day to view its attendance
          </p>
          <input
            className="border rounded-md h-10 m-2"
            type="date"
            onChange={(e) => setDates(e.target.value)}
          />
          <button
            onClick={() => setModal(true)}
            className="text-pink-500 outline outline-1 hover:text-white hover:bg-pink-500 px-6 ml-2 m-2 rounded-md">
            submit
          </button>
        </div>
      ) : null}
      {modal2 ? (
        <div className="flex  flex-col p-5 mt-7">
          <p>enter the day you want to fill attendance</p>
          <input
            className="border rounded-md h-10 m-2"
            type="date"
            onChange={(e) => setDates(e.target.value)}
          />
          <button
            onClick={() => takeAttendance(dates)}
            className="text-pink-500 outline outline-1 m-2 hover:text-white hover:bg-pink-500 px-6 ml-2 rounded-md">
            submit
          </button>
        </div>
      ) : null}
      {true ? <ul className="sm:mt-8 p-4">{data}</ul> : null}

      {modal ? (
        <li className="border m-2 rounded-md p-5">
          This is attendance for date {dates} --click view for more details
          <Link
            to={`${dates}`}
            className="rounded-md  float-right border outline outline-1 px-6 hover:text-white hover:bg-pink-500 text-pink-500 p-1">
            view
          </Link>
        </li>
      ) : null}
    </div>
  );
}

export default Attendance;
