import {
  EyeIcon,
  EyeSlashIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MyKids() {
  const [loading, setLoading] = useState(false);
  const [teacher, setTeacher] = useState([]);
  const token = localStorage.getItem("teacherToken");
  
  
  

  useEffect(() => {
    fetch("/profile",{
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json())
      .then((res)=> setTeacher(res[0].classroom.students))
  }, []);
  const data = JSON.parse(localStorage.getItem("teacher_data"));
  localStorage.setItem("kids", teacher )
  localStorage.setItem("kidState", setTeacher)
   
  function handleDelete(id){
      setTeacher((value) => value.filter((item) => id !== item.id))
      fetch(`/students/${id}`,{
        method: "DELETE",
        headers:{
          Authorization: `Bearer ${token}`,
        }
      })
  }

  

  return (
    <div className="px-4 sm:px-6 lg:px-8 m-5">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-pink-600">Students</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the studentList in your account including their name,
            title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none ">
          {/* <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
            Add Student
          </button> */}
          <Link to="/dashboard/add_kid">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
              Add Kid
            </button>
          </Link>
        </div>
      </div>
      {loading ? (
        <p className="mt-5 text-5xl text-center">Loading Children....</p>
      ) : (
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                <div className="grid grid-cols-5 gap-4">
                  <div
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                    Admission No
                  </div>
                  <div
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                    First Name
                  </div>
                  <div
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">
                    Second Name
                  </div>
                  <div
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                    Surname
                  </div>
                  <div
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                    Action
                  </div>
                </div>

                <div className="bg-white w-full">
                  {teacher.map((person, personIdx) => (
                    <div
                      key={person.id}
                      className="w-full grid grid-cols-5 gap-4">
                      <div
                        className={classNames(
                          personIdx !== teacher.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                        )}>
                        {person.admission_number}
                      </div>
                      <div
                        className={classNames(
                          personIdx !== teacher.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell"
                        )}>
                        {person.first_name}
                      </div>
                      <div
                        className={classNames(
                          personIdx !== teacher.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        )}>
                        {person.second_name}
                      </div>
                      <div
                        className={classNames(
                          personIdx !== teacher.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        )}>
                        {person.surname}
                      </div>
                      <div className="grid grid-cols-2">
                        <Link to={`${person.id}`}>
                          <button className="border m-2 rounded-xl px-2 h-9">
                            <EyeIcon className="inline text-pink-900 h-5" />
                            View
                            <span className="sr-only">, {person.name}</span>
                          </button>
                        </Link>

                        <button className="border m-2 px-1 rounded-xl" onClick={()=>handleDelete(person.id)}>
                          <TrashIcon className="inline text-red-600 h-3" />
                          Delete
                          <span className="sr-only">, {person.name}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    
  );
}
