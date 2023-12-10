import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
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
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <img src="/navlogo.png" alt="Upride" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal gap-32 px-1">
            <div className="flex items-center gap-3 border-s ps-2">
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
          </div>
        </div>
        <div className="navbar-end flex lg:gap-4 items-center border-s">
          <div className="hidden lg:block">
            <img src="/bell.png" alt="" className="w-4" />
          </div>
          <div className="flex gap-2 items-center justify-end">
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
