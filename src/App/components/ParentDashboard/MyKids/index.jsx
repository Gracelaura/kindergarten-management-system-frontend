import { EyeIcon, EyeSlashIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import ParentContext from "../../ParentContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MyKids() {
const {parent} = useContext(ParentContext)
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const navigate=useNavigate()


  function handleClick(){
    navigate('/parents_dashboard/my_kids/:id')
  }

console.log(parent)
  
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Students</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of the Kid List in your account including their name, Admission number and Class.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add Kid
          </button>
        </div>
      </div>
      {loading ? <p className="mt-5 text-5xl text-center">Loading Children....</p> :  <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="shadow-sm ring-1 ring-black ring-opacity-5">
              <table className="min-w-full border-separate" style={{ borderSpacing: 0 }}>
                <thead className="bg-gray-50">
                  <tr>
                  <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      Admission number
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      First Name
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      Second Name
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      Surname
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                    >
                      Class
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                    >
                      
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {students.map((person, personIdx) => (
                    <tr key={person.email}>
                      <td
                        className={classNames(
                          personIdx !== students.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                        )}
                      >
                        {person.name}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== students.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell'
                        )}
                      >
                        {person.class}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== students.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                        )}
                      >
                        {person.parentContact}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== students.length - 1 ? 'border-b border-gray-200' : '',
                          'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8'
                        )}
                      >
                       <button onClick={handleClick}><span className="text-gray-00 hover:text-red-900 border border-gray-600 mx-5 rounded-[16px] p-3">
                          <EyeIcon className="inline text-pink-900 h-5 mx-2"/>
                          View<span className="sr-only">, {person.name}</span>
                        </span></button> 
                        {/* <span className="text-gray-00 hover:text-red-900 border border-gray-600 mx-5 rounded-[16px] p-3">
                          <PencilIcon className="inline text-indigo-900 h-5 mx-2"/>
                          Edit<span className="sr-only">, {person.name}</span>
                        </span>
                        <span className="text-gray-00 hover:text-red-900 border border-gray-600 mx-5 rounded-[16px] p-3">
                          <TrashIcon className="inline text-red-600 h-5 mx-2"/>
                          Delete<span className="sr-only">, {person.name}</span>
                        </span> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      }
     
    </div>
  )
}
