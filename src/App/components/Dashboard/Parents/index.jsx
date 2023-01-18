import React from "react";
import { useEffect, useState } from "react";
import { resolvePath, useNavigate } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/solid";
import axios from "axios";

export default function Parents() {
  const [parents, setParents] = useState([]);
  const token = localStorage.getItem("teacherToken");
  const navigate = useNavigate();
  const teacher_id = localStorage.getItem("teacher");
  const url2 = `/teachers/${parseInt(teacher_id)}`;
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(url2, config)
      .then((data) => setParents(data.data.classroom.parents));
  }, []);

  console.log(parents);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-pink-500">Parents</h1>
          <p className="mt-2 text-sm text-lime-900">
            A list of all the parents in your account including their name and
            phone number andnpm start others.
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
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      First Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Last Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Phone Number
                    </th>

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6">
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
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.last_name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.phone_number}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
