// import React from 'react';
import { MdLocationSearching } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="">
      <div className="grid bg-primary grid-cols-4 md:grid-cols-5 lg:grid-cols-11 items-center justify-evenly px-4 text-white">
        <p>Kerekodi</p>
        <p>Banaswadi</p>
        <p>Kormangala</p>
        <p>MG Road</p>
        <p>JP Nagar</p>
        <p>Jayanagar</p>
        <p>Vijayanagar</p>
        <p>Yahlanka</p>
        <p>Yeshwanthpur</p>
        <p>Rajajinagar</p>
        <p>Rajarajeshwari Nagar</p>
      </div>

      <div className="lg:flex mx-auto justify-between items-center mt-8 lg:mx-10">
        <div className="lg:w-1/2">
          <h1 className="">
            Learn Driving: Book <span className="font-bold">Top Driving</span>{" "}
            <span className="text-primary">Schools</span> <br /> Near You
          </h1>
          <p className="my-10">
            Empower yourself with safe and confident driving skills today. Book
            expert Instructors and top-rated driving schools near you.{" "}
          </p>
          <div>
            <input
              type="search"
              placeholder="Search Location, Driving School or Services..."
              className="input input-bordered relative w-full max-w-md rounded-3xl"
            />
            <div
              className="flex items-center gap-2 mt-4 lg:mt-0 md:absolute md:bottom-[575px] lg:bottom-8
            md:left-80 lg:left-96"
            >
              <FaSearch className="text-primary" />
              <button className="flex items-center text-white gap-2 p-3 rounded-3xl bg-primary">
                <MdLocationSearching className=""></MdLocationSearching>
                Near Me
              </button>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-6 justify-center md:justify-between lg:justify-start">
            <button className="btn bg-primary text-white">
              Book Driving School
            </button>
            <button className="btn">Hire Instructors</button>
          </div>
        </div>
        <div className="">
          <img
            src="/public/Main-banner.png"
            alt=""
            className="w-full lg:max-w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
