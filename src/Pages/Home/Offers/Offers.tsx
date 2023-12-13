import React from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";

const Offers: React.FC = () => {
  return (
    <div className="my-10 lg:my-20 mx-2 md:mx-10">
      <div className="my-10 lg:my-20">
        <div className="mx-auto text-primary ">
          <p className="font-medium">Best Offers</p>
          <MdOutlineHorizontalRule className="text-center w-20 h-8" />
        </div>
        <h2 className="font-semibold">Best offers this month</h2>
        <div className="mt-4 flex gap-4 items-center md:justify-between">
          <p>Detailed Description of these offers here.</p>
          <div className="mt-2 md:mt-0">
            <button className="btn rounded-3xl text-primary bg-[#FFF1F1]">
              View All
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-between mx-auto items-center">
        <div className="card card-side bg-base-100 shadow-xl mt-4 lg:mt-0 border-2 border-primary">
          <div className="bg-primary text-white rounded-s-xl w-60 py-10 px-5">
            <h4 className="font-medium">
              Get 500 <br /> Discount
            </h4>
            <p>
              on minimum <br /> shopping of Rs. 999.
            </p>
            <button className="btn rounded-full text-primary mt-4">
              Redeem Now
            </button>
          </div>
          <div className="card-body bg-base-100 rounded-e-xl w-60 h-40 lg:h-56"></div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl mt-4 lg:mt-0 border-2 border-primary">
          <div className="bg-primary text-white rounded-s-xl w-60 py-10 px-5">
            <h4 className="font-medium">Get 500 Flat Discount</h4>
            <p>
              on minimum <br /> shopping of Rs. 999.
            </p>
            <button className="btn rounded-full text-primary mt-2">
              Redeem Now
            </button>
          </div>
          <div className="card-body bg-base-100 rounded-e-xl w-60 h-40 lg:h-56"></div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
