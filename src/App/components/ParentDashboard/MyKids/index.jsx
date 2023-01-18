import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import ParentContext from "../../ParentContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MyKids() {
  const [adm, setAdm] = useState(0);
  const [done, setDone] = useState(false);
  
  const token = localStorage.getItem("jwt");
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [modal, setModal] = useState(false);
  const parent_id = localStorage.getItem("parent");
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    axios
      .get(`/parents/${parent_id}`, config)
      .then((res) => setStudents(res.data.students));
  }, [update]);

  async function addKid(e) {
    e.preventDefault();
    const { data } = await axios.get("/students", config);
    let kid = data.find((data) => data.admission_number == adm);

    const requestData = {
      parent_id: parseInt(parent_id),
      student_id: kid.id,
    };

    const { newR } = await axios.post(
      "/parent_students",
      requestData,
      config
    );
    setDone(false)
    setUpdate((update) => !update);
    setModal(false);
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-pink-500">My kids</h1>
          <p className="mt-2 text-sm text-gray-700">
            Click View row to view more details.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none grid grid-cols-1 p-2">
          {modal ? (
            <form className="grid grid-cols-1 m-2" onSubmit={addKid}>
              <input
                onChange={(e) => setAdm(e.target.value)}
                type="number"
                className="border h-8 p-3 m-2"
                placeholder="enter your kids admission and hit submit"
              />
              <button
              onClick={()=>setDone(true)}
                type="submit"
                className="text-white m-2 rounded-md flex p-3 justify-center bg-[#B124A3]"
                value="submit">
                {done ?<svg
                  class="animate-spin h-5 w-5 outline outline-3 mr-1 rounded-full"
                  viewBox="0 0 24 24"></svg>:null}
                 <span>Submit</span>
              </button>
            </form>
          ) : null}
          <button
            onClick={() => setModal(true)}
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
            connect my kid
          </button>
        </div>
      </div>
      {loading ? (
        <p className="mt-5 text-5xl text-center">Loading Children....</p>
      ) : (
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                <table
                  className="min-w-full border-separate"
                  style={{ borderSpacing: 0 }}>
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                        Admission number
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                        First Name
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                        Second Name
                      </th>

                      <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                        Surname
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {students.map((person, personIdx) => (
                      <tr key={personIdx}>
                        <td
                          className={classNames(
                            personIdx !== students.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap py-4 pl-4 pr-3 text-center font-medium text-gray-900 sm:pl-6 lg:pl-8"
                          )}>
                          {person.admission_number}
                        </td>
                        <td
                          className={classNames(
                            personIdx !== students.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap px-3 py-4 text-center text-gray-500 hidden lg:table-cell"
                          )}>
                          {person.first_name}
                        </td>
                        <td
                          className={classNames(
                            personIdx !== students.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap px-3 py-4 text-center text-gray-500"
                          )}>
                          {person.second_name}
                        </td>
                        <td
                          className={classNames(
                            personIdx !== students.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "relative whitespace-nowrap py-4 pr-4 pl-3 text-center text-sm font-medium sm:pr-6 lg:pr-8"
                          )}>
                          {person.surname}
                        </td>
                        <td>
                          <Link
                            className="text-pink-600 hover:bg-pink-600 px-4 outline outline-1 rounded-md h-14 hover:text-white"
                            to={`${person.id}`}>
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
