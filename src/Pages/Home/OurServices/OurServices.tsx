import React from "react";
import { BiSolidCarWash } from "react-icons/bi";
import { IoCarSportOutline } from "react-icons/io5";
import { LiaUserAstronautSolid } from "react-icons/lia";
import { FaUserCog } from "react-icons/fa";

const OurServices: React.FC = () => {
  return (
    <div className="my-10 lg:my-20 mx-auto">
      <div className="text-center my-10 lg:my-20">
        <p className="text-primary uppercase text-xl">Our Services</p>
        <h2 className="font-semibold">How can we help you?</h2>
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
            <FaUserCog className="w-28 h-28" />
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
        <div className="my-10 lg:px-0 2xl:px-32 lg:flex mx-auto items-center px-4 2xl:gap-20 lg:mx-20 justify-between">
          <div className="lg:w-1/2">
            <h2 className="my-4 font-semibold">
              Top Rated Driving Schools Nearby
            </h2>
            <p className="my-4 ">
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
            <img src="/banner.png" alt="" />
          </div>
        </div>
      </div>
      <div className="my-20">
        <h3 className="text-center font-medium md:mx-20">
          Why Choose <span className="font-bold">Upride</span> as your choice
          <br /> for a comprehensive driving learning experience?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto my-10">
          <div className="text-center">
            <h3 className="bg-primary mx-24 rounded-xl text-white">1000+</h3>
            <h4>Trained</h4>
            <p>
              <small>through Upride</small>
            </p>
          </div>
          <div className="text-center">
            <h3 className="bg-[#2EC2B8] mx-28 rounded-xl text-white">99%</h3>
            <h4>Rating</h4>
            <p>
              <small>through Upride</small>
            </p>
          </div>
          <div className="text-center">
            <h3 className="bg-[#FFDC6B] rounded-xl mx-[120px] text-white">
              60
            </h3>
            <h4>Minutes</h4>
            <p>
              <small>through Upride</small>
            </p>
          </div>
          <div className="text-center">
            <h3 className="bg-primary mx-28 rounded-xl text-white">150+</h3>
            <h4>Reviews</h4>
            <p>
              <small>through Upride</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
