import React, { useState, Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../Home/assets/pre-logo.png";
import { Transition, Menu } from "@headlessui/react";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const navigate = useNavigate();
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex  flex-row justify-between items-center h-24  mx-auto px-8 text-white">
      <div>
        <div className="md:flex">
          <img className="w-15 h-10 " src={Logo} alt="" />
          <div>
            <h1 className="text-3xl font-bold text-[#B124A3]">KinderJoy.</h1>
          </div>
        </div>
        <div>
          <h2 class="w-full text-xs font-medium title-font text-[#B124A3] tracking-widest title-font mb-1">
            Kindergarten Management Portal
          </h2>
        </div>
      </div>
      <button className="sm:block md:block lg:hidden">
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="">
              <span className="sr-only">Open user menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                class="w-6 h-6 outline outline-1 text-[#B124A3] md  "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#B124A3] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-cyan-600">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? ""
                        : "",
                      "block px-4 py-2 text-sm text-white"
                    )}
                  >
                    Home
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/parent_login"
                    className={classNames(
                      active
                        ? ""
                        : "",
                      "block px-4 py-2 text-sm text-white"
                    )}
                  >
                    Parent Login
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/parent_signup"
                    className={classNames(
                      active
                        ? ""
                        : "",
                      "block px-4 py-2 text-sm text-white"
                    )}
                  >
                    Parent Register
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/login"
                    className={classNames(
                      active
                        ? ""
                        : "",
                      "block px-4 py-2 text-sm text-white"
                    )}
                  >
                    Teacher Login
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/signup"
                    className={classNames(
                      active
                        ? ""
                        : "",
                      "block px-4 py-2 text-sm text-white"
                    )}
                  >
                    Teacher Signup
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </button>

      <ul className="lg:block lg:flex bg-[#B124A3] rounded-md sm:hidden md:hidden hidden ">
        <li onClick={() => navigate("/")} className="p-4 cursor-pointer">
          Home
        </li>
        <li
          onClick={() => navigate("/parent_login")}
          className="p-4 cursor-pointer"
        >
          Parent Login
        </li>
        <li
          onClick={() => navigate("/parent_signup")}
          className="p-4 cursor-pointer"
        >
          Parent Register
        </li>
        <li onClick={() => navigate("/login")} className="p-4 cursor-pointer">
          Teacher Login
        </li>
        <li onClick={() => navigate("/signup")} className="p-4 cursor-pointer">
          Teacher Signup
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
