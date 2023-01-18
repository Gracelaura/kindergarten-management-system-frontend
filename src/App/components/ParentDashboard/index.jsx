import React, { useEffect } from "react";
import axios from "axios";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ParentContext from "../ParentContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Home/assets/pre-logo.png";
import {
  Bars3Icon,
  // CalendarIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";

const navigation = [
  {
    name: "Dashboard",
    href: "/parent_dashboard",
    icon: HomeIcon,
    // current: true,
  },
  {
    name: "My Kids",
    href: "/parent_dashboard/my_kids",
    icon: ListBulletIcon,
    current: false,
  },
  {
    name: "Profile",
    href: "/parent_dashboard/profile",
    icon: UserGroupIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ParentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [parent, setParent] = useState({});
  // context
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");
  const parentId = localStorage.getItem("parent");
  const id = parseInt(parentId);

  function handleLogout() {
    localStorage.clear();
    navigate("/parent_login");
  }

  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const url = `http://localhost:3000/parents/${id}`

  useEffect(() => {
    axios.get(url, config).then((data) => {
      localStorage.setItem("parent_data", JSON.stringify(data));
      setParent(data.data);
      console.log(data);
    });
  }, []);
  if (token) {
    return (
      <ParentContext.Provider value={{ parent: parent }}>
        <div className="flex h-screen">
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setSidebarOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full">
                  <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0">
                      <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                          type="button"
                          className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          onClick={() => setSidebarOpen(false)}>
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                      <div className="flex flex-shrink-0 items-center px-4">
                        <img
                          className="h-8 w-auto"
                          src={Logo}
                          alt="Your Company"
                        />
                      </div>
                      <nav aria-label="Sidebar" className="mt-5">
                        <div className="space-y-1 px-2">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                              )}>
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? "text-gray-500"
                                    : "text-gray-400 group-hover:text-gray-500",
                                  "mr-4 h-6 w-6"
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
                <div className="w-14 flex-shrink-0" aria-hidden="true">
                  {/* Force sidebar to shrink to fit close icon */}
                </div>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          <div className="hidden lg:flex lg:flex-shrink-0">
            <div className="flex w-64 flex-col">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
                <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                  <div className="flex flex-shrink-0 items-center px-4">
                  <img
                    className="h-20 w-auto"
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
                  <nav className="mt-5 flex justify-between h-full flex-col" aria-label="Sidebar">
                    <div className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-200 text-gray-900 focus:text-pink-500 "
                              : "text-gray-600  focus:text-pink-500 hover:text-gray-900",
                            "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                          )}>
                          <item.icon
                            className={classNames(
                              item.current
                                ? " focus:text-pink-500"
                                : "text-gray-400  group-hover:text-gray-500 ",
                              "mr-3 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div
                      className="mt-5 flex justify-start pl-12"
                      aria-label="Sidebar ">
                      <button
                        onClick={() => handleLogout()}
                        className="border p-2 px-4 rounded">
                        Logout
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
            <div className="lg:hidden">
              <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
                <div>
                <img
                  className="h-8 w-auto"
                  src={Logo}
                  alt="Your Company"
                />
              </div>
                <div>
                  <button
                    type="button"
                    className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                    onClick={() => setSidebarOpen(true)}>
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative z-0 flex flex-1 overflow-hidden">
              <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
                {/* Start main area*/}
                <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                  <Outlet />
                </div>
                {/* End main area */}
              </main>
            </div>
          </div>
        </div>
      </ParentContext.Provider>
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
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="logo"/>
            </div>
          </div>
        </div>
        <div>
          {/* login sign up */}
          <div>
            <img src="https://media.tenor.com/6rGhXJSw7A8AAAAi/funder-the-sea-octopus.gif" alt="gif"/>
          </div>

          {/* login sign up */}
        </div>
      </div>
    );
  }
}
