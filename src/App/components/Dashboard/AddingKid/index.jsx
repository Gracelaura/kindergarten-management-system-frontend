import React, {useState} from "react";
import { Link } from "react-router-dom";


function AddKid() {
  const teacherData = localStorage.getItem("teacher_data")
  
  let data = JSON.parse(teacherData)
  const token = localStorage.getItem("teacherToken");
  const [addKid, setAddKid] = useState({
    first_name: "",
    second_name:"",
    surname:"",
    age: "",
    description: "",
    admission_number: "",
    classroom_id: data.teacher.classroom.id
})

const kid = localStorage.getItem("kids")
const state = localStorage.getItem("kidState")

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3000/students",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(addKid)
    }).then((res)=> res.json())
      .then((res) =>{state([...kid, res])
      
      })

  }



  return (
    <div className="w-3/4 m-auto">
      <div className="pt-8">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Adding New Student Information
          </h3>
          <p className="mt-1 text-sm text-gray-500"> Studnet information </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="First name"
                  autoComplete="given-name"
                  className="block w-1/2 h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e)=> setAddKid({...addKid, first_name: e.target.value})}
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="Second name"
                className="block text-sm font-medium text-gray-700"
              >
                Second Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="second_name"
                  id="second_name"
                  autoComplete="family-name"
                  placeholder="Second name"
                  className="block w-1/2 h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e)=> setAddKid({...addKid, second_name: e.target.value})}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700"
              >
                Surname
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  autoComplete="family-name"
                  placeholder="Surname"
                  className="block w-1/2 h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e)=> setAddKid({...addKid, surname: e.target.value})}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Description of the student
              </label>
              <div className="mt-1">
                <textarea
                  id="text"
                  name="text"
                  type="text"
                  placeholder="Write description Here"
                  autoComplete="description"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e)=> setAddKid({...addKid, description: e.target.value})}
                />
              </div>
            </div>

            {/* <div className="sm:col-span-3">
              <label
                htmlFor="class"
                className="block text-sm font-medium text-gray-700"
              >
                Class
              </label>
              <div className="mt-1">
                <select
                  id="class"
                  name="class"
                  autoComplete="class"
                  className="block w-1/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div> */}

            <div className="sm:col-span-3">
              <label
                htmlFor="Age"
                className="block text-sm font-medium text-gray-700"
              >
                Age
              </label>
              <div className="mt-1">
                <select
                  id="age"
                  name="age of kid"
                  autoComplete="Age of kid "
                  className="block w-1/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e)=> setAddKid({...addKid, age: e.target.value})}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </div>
            </div>
            
            <div className="sm:col-span-3">
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700"
              >
                Admission Number
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="admission_number"
                  id="admission_number"
                  autoComplete="family-name"
                  placeholder="Admission Number"
                  className="block w-1/2 h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e)=> setAddKid({...addKid, admission_number: e.target.value})}
                />
              </div>
            </div>

            <div className="sm:col-span-4 w-2/3 rounded flex pl-0 items-center">
              <button className="w-1/4 h-10 rounded border bg-gray-400" type="submit" >SAVE</button>
            </div>

            <div className="sm:col-span-1 w-2/3 rounded flex pl-0 items-center">
              <Link to="..">
              <button className="w-full h-10 rounded border bg-gray-400">BACK</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddKid;
