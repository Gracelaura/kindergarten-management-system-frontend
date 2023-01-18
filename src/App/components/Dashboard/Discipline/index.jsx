import React, { useState, useEffect } from "react";
import EditStudent from "../../Modal/EditStudent";
import {
  EyeIcon,
  EyeSlashIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import ViewDiscipline from "../../Modal/ViewDiscipline";
import AddCase from "../../Modal/AddCase";
import axios from "axios";
function Discipline() {
  const [addcase, setAddCase] = useState(false);
  const [view, setView] = useState(false);
  const [disciplanes, setDisciplanes] = useState([]);
  const token = localStorage.getItem("teacherToken");
  const teacher_id = localStorage.getItem("teacher");
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState();
  const [studentId, setStudentId] = useState();
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(`/teachers/${parseInt(teacher_id)}`, config)
      .then((res) => setDisciplanes(res.data.classroom.disciplines))
      .catch((e) => console.log(e.message));
  }, []);

  function handleStudent(arg) {
    axios
      .get(`/students/${arg}`, config)
      .then((res) => console.log(res.data));
  }
  const list = disciplanes.map((d) => <h1>hello</h1>);
  return (
    <div className="px-4 sm:px-6 lg:px-8 m-5">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-pink-600">
            Students discipline cases
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the studentList in your account including their name,
            title, email and role.
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="shadow-sm ring-1 ring-black ring-opacity-5">
              <div className="grid grid-cols-5 gap-4">
                <div
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                  Title
                </div>
                <div
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                  Date
                </div>
                <div
                  scope="col"
                  className="sticky top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">
                  student id
                </div>
                <div
                  scope="col"
                  className="sticky top-0 z-10 hidden border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                  Description
                </div>
                <div
                  scope="col"
                  className="sticky top-0 z-10 hidden border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                  Action
                </div>
              </div>

              <div className="bg-white w-full">
                {disciplanes.map((item, i) => {
                  return (
                    <div key={i} className="w-full grid grid-cols-5 gap-4">
                      <div className="border-b border-gray-200 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                        {item.title}
                      </div>
                      <div className="border-b border-gray-200 whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
                        {item.date}
                      </div>
                      <div className="border-b border-gray-200 whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.student_id}
                      </div>
                      <div className="border-b border-gray-200 whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <textarea className="text-black">
                          {item.description}
                        </textarea>
                      </div>
                      <div className="grid grid-cols-2">
                        <Link>
                          <button
                            className="border m-2 rounded-xl px-2 h-9"
                            onClick={() => {
                              setView(true);
                              setStudentId(item.id);
                              localStorage.setItem(
                                "studentId",
                                item.student.id
                              );
                            }}>
                            <EyeIcon className="inline text-pink-900 h-4" />
                            View
                            <span className="sr-only"></span>
                          </button>
                        </Link>

                        <button
                          className="border m-2 px-1 rounded-xl"
                          onClick={() => {
                            setEdit(true);
                            setEditId(item.id);
                          }}>
                          <PencilIcon className="inline text-red-600 h-4 m-1" />
                          Edit
                          <span className="sr-only"></span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {edit && (
        <EditStudent
          setEdit={setEdit}
          editId={editId}
          setDisciplanes={setDisciplanes}
        />
      )}
      {view && (
        <ViewDiscipline
          setView={setView}
          setAddCase={setAddCase}
          studentId={studentId}
        />
      )}
      {addcase && (
        <AddCase
          setView={setView}
          setAddCase={setAddCase}
          setDisciplanes={setDisciplanes}
        />
      )}
    </div>
  );
}

export default Discipline;
