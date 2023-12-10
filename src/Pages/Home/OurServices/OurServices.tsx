// import React from 'react';
import { BiSolidCarWash } from "react-icons/bi";
import { IoCarSportOutline } from "react-icons/io5";
import { LiaUserAstronautSolid } from "react-icons/lia";

const OurServices = () => {
  return (
    <div className="my-10 lg:my-20">
      <div className="text-center my-10 lg:my-20">
        <p className="text-primary uppercase text-xl">Our Services</p>
        <h2>How can we help you?</h2>
      </div>
      <div className="mx-4 lg:mx-20 card shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:border-b-2 px-4 lg:px-0 lg:mx-20">
          <div className="text-center my-2 lg:my-0 mx-auto h-52 hover:text-primary hover:border-primary hover:border-b-2">
            <IoCarSportOutline className="w-28 h-28" />
            <p>
              Driving <br />
              Schools
            </p>
          </div>
          <div className="text-center my-2 lg:my-0 mx-auto h-52 hover:text-primary hover:border-b-2 hover:border-primary">
            <img
              src="https://cdn-icons-png.flaticon.com/128/12308/12308020.png"
              alt=""
              className="w-24"
            />
            <p>
              Book Driving <br /> Instructors
            </p>
          </div>
          <div className="text-center my-2 lg:my-0 mx-auto h-52 hover:text-primary hover:border-primary hover:border-b-2">
            <LiaUserAstronautSolid className="w-28 h-28" />
            <p>
              International Driver’s <br />
              License Consultation
            </p>
          </div>
          <div className="text-center my-2 lg:my-0 mx-auto h-52 hover:text-primary hover:border-primary hover:border-b-2">
            <BiSolidCarWash className="w-28 h-28" />
            <p>
              Car/Bike Wash <br />
              Near Me
            </p>
          </div>
        </div>
        <div className="my-10 lg:flex mx-auto items-center px-4 lg:px-0 lg:mx-20 justify-between">
          <div className="lg:w-1/2">
            <h2 className="my-4">Top Rated Driving Schools Nearby</h2>
            <p className="my-4">
              Discover the convenience of finding highly-rated driving schools
              near you with Upride. Whether you're eager to get your driver's
              license or seeking professional training to sharpen your driving
              skills, Upride simplifies your search. Just click on "near me" in
              our search bar and instantly connect with the best driving schools
              near you.
            </p>
            <button className="text-primary">Book Now</button>
          </div>
          <div>
            <img src="/public/banner.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
