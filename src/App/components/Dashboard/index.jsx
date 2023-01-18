import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios"

function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("teacherToken");
 

  if (token) {
    return (
      <div className="flex sm:flex-row h-screen">
        <div className="w-1/7 sm:h-full">
          <Sidebar />
        </div>
        <div className="w-5/6 m-3 ">
          <Outlet />
        </div>
      </div>
    );
  } else {
    return (
      <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div class="relative">
            <div class="absolute">
              <div class="">
                <h1 class="my-2 text-gray-800 font-bold text-2xl">
                  Looks like you're lost
                </h1>
                <p class="my-2 text-gray-800">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <button
                  onClick={() => navigate("/")}
                  class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-[#B124A3] text-white hover:bg-[#B124A3] focus:outline-none focus:ring-2 focus:ring-[#B124A3] focus:ring-opacity-50">
                  Return to Home!
                </button>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          {/* login sign up */}
          <div>
            <img src="https://media.tenor.com/6rGhXJSw7A8AAAAi/funder-the-sea-octopus.gif" />
          </div>

          {/* login sign up */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
