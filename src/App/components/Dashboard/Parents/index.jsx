import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { EyeIcon} from "@heroicons/react/24/solid";


export default function Parents() {
  const [parents, setParents] = useState([]);
  
  const navigate=useNavigate()

  const  url = 'http://127.0.0.1:3000/parents'

  useEffect(() => {
    
    fetch(url)
     .then((response) => response.json())
     .then((data) => {
        console.log(data)
        setParents(data);
        
      });
  }, [])
  
  function handleClick(){
    navigate('/parents_dashboard/my_kids/:id')
  }


  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Parents</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the parents in your account including their name and phone number.
          </p>
        </div>
       
      </div>
      
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      First Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Last Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Phone Number
                    </th>
                    
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {parents.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.first_name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.last_name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.phone_number}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        
                      </td>
                      <button onClick={handleClick}><span className="text-gray-00 hover:text-red-900 border border-gray-600 mx-8 rounded-[16px] px-3 h-10">
                          <EyeIcon className="inline text-pink-900 h-5 mx-2"/>
                          View<span className="sr-only">, {person.name}</span>
                        </span></button> 
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}