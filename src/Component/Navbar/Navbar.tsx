import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar py-6 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="flex items-center gap-3 border-s">
                <img src="/dotIcon.png" className="" alt="" />
                <p>
                  <span className="text-accent">Contact us :</span>{" "}
                  <span className="font-medium">+91 9211420786</span>
                </p>
              </div>
              <div className="border-s items-center ps-2 font-medium">
                <p>Download App</p>
              </div>
              <div className="border-s justify-center flex-1 ps-2 font-medium">
                <p>Are you a Driving School?</p>
              </div>
            </ul>
          </div>
          <Link to={"/"}>
            <img src="/navlogo.png" alt="Upride" className="w-32" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="grid grid-cols-3 px-1">
            <div className="flex items-center mx-auto lg:px-4 justify-center gap-4 border-x-2">
              <img src="/dotIcon.png" className="" alt="" />
              <p>
                <span className="text-accent">Contact us :</span>{" "}
                <span className="font-medium">+91 9211420786</span>
              </p>
            </div>
            <div className="mx-auto font-medium">
              <p>Download App</p>
            </div>
            <div className="border-x-2 justify-center lg:px-10 mx-auto font-medium">
              <p>Are you a Driving School?</p>
            </div>
          </div>
        </div>
        <div className="navbar-end justify-center mx-auto flex items-center ">
          <div className="hidden lg:block">
            <img src="/bell.png" alt="" className="w-4" />
          </div>
          <div className="flex gap-2 items-center lg:px-4 justify-end">
            <img src="/user.png" alt="" />
            <p>Hello Rahul! </p>
            <img src="/hand.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
