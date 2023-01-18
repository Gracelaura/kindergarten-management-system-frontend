import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleAttendance() {
  const [allAttendance, setAllAttendance] = useState([]);
  const { date } = useParams();
  const token = localStorage.getItem("teacherToken");
  const id = localStorage.getItem("teacher");
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios.get(`/teachers/${id}`, config).then((res) => {
      const arr = [];
      for (let data of res.data.classroom.attendances) {
        if (data.date == date) {
          arr.push(data);
        } else {
          console.log("not possible");
        }
      }

      setAllAttendance(arr);
    });
  }, []);
  return (
    <ul className="sm:mt-8 p-4 w-4/5 m-auto">
      <p className="text-2xl font-extrabold text-center">
        List of student register for date {date}{" "}
      </p>
      {allAttendance.length < 1 ? (
        <div>no attendance for this date</div>
      ) : (
        allAttendance.map((item, i) => {
          return (
            <li
              key={i}
              className="border m-2 rounded-md p-5 flex justify-around">
              <span>{i + 1}</span>
              <span>{item.student_name}</span>
              <span>{item.status}</span>
            </li>
          );
        })
      )}
    </ul>
  );
}

export default SingleAttendance;
