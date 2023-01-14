import React, {useState, useEffect}  from 'react'
import EditStudent from "../../Modal/EditStudent";
import {
  EyeIcon,
  EyeSlashIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import ViewDiscipline from '../../Modal/ViewDiscipline';
import AddCase from '../../Modal/AddCase';
function Discipline() {

const [addcase, setAddCase] =useState(false)
const [view, setView] =useState(false)
const [disciplanes, setDisciplanes] = useState()
const token = localStorage.getItem("teacherToken")
const [edit, setEdit] =useState(false)
const [editId ,setEditId] = useState()
const [studentId, setStudentId] = useState()


function fetchDisciplanes(){
  fetch("http://127.0.0.1:3000/disciplines",{
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      }
  })
    .then((res)=> res.json())
    .then((res)=> setDisciplanes(res))
}

useEffect(() => {
  fetchDisciplanes()
 }, [])

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
{/*   
      <p className="mt-5 text-5xl text-center">Loading Children....</p> */}
    
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
                  First Name
                </div>
                <div
                  scope="col"
                  className="sticky top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">
                   Surname
                </div>
                <div
                  scope="col"
                  className="sticky top-0 z-10 hidden border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                 Admission No.
                </div>
                <div
                  scope="col"
                  className="sticky top-0 z-10 hidden border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                  Action
                </div>
              </div>

              <div className="bg-white w-full">
               {disciplanes && disciplanes.map((item) => (
                  <div
                    key={item.student_id}
                    className="w-full grid grid-cols-5 gap-4">
                    <div
                      className=
                           "border-b border-gray-200 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                      >
                     {item.title}
                    </div>
                    <div
                      className=
                        
                           "border-b border-gray-200 whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell"
                      >
                      {item.student.first_name}
                    </div>
                    <div
                      className=
                          "border-b border-gray-200 whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        {item.student.surname}
                    </div>
                    <div
                      className=
                       
                           "border-b border-gray-200 whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        {item.student.admission_number}
                    </div>
                    <div className="grid grid-cols-2">
                      <Link >
                        <button className="border m-2 rounded-xl px-2 h-9" onClick={() => {setView(true)
                               setStudentId(item.id) 
                               localStorage.setItem("studentId", item.student.id)     }}>
                          <EyeIcon className="inline text-pink-900 h-4" />
                          View
                          <span className="sr-only"></span>
                        </button>
                      </Link>

                      <button className="border m-2 px-1 rounded-xl" onClick={()=> {setEdit(true)
                              setEditId(item.id)   }}>
                        <PencilIcon className="inline text-red-600 h-4 m-1" />
                        Edit
                        <span className="sr-only"></span>
                      </button>
                    </div>
                  </div>
               ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  {edit && <EditStudent setEdit={setEdit} editId={editId} setDisciplanes={setDisciplanes}/>}
  {view && <ViewDiscipline setView={setView} setAddCase={setAddCase} studentId={studentId}/>}
  {addcase && <AddCase setView={setView} setAddCase={setAddCase} setDisciplanes={setDisciplanes}/>}
  </div>
);
}


export default Discipline