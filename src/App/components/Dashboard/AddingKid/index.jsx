import React from "react";

function AddKid() {
  return (
    <div className="w-3/4 m-auto">
      <div className="pt-8">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Adding New Student Information
          </h3>
          <p className="mt-1 text-sm text-gray-500"> Studnet information </p>
        </div>
        <form>
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
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="Surname"
                className="block text-sm font-medium text-gray-700"
              >
                Surname
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="Surname"
                  id="Surname"
                  autoComplete="family-name"
                  placeholder="Surname"
                  className="block w-1/2 h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Last name"
                  className="block w-1/2 h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Class
              </label>
              <div className="mt-1">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-1/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4 w-2/3 rounded flex pl-0 items-center">
              <button className="w-1/4 h-10 rounded border bg-gray-400">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddKid;
