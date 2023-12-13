import React from "react";
import { FaStar, FaRupeeSign } from "react-icons/fa";
import "./SchoolsCard.css";

interface Schools {
  id: string;
  title: string;
  location: string;
  image: string;
  ratings: number;
  price: number;
}
const SchoolsCard: React.FC<Schools> = ({
  title,
  location,
  image,
  ratings,
  price,
}) => {
  return (
    <div>
      <div className="card card-compact mx-auto w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{location}</p>
          <div className="flex justify-between">
            <div>
              <p className="flex items-center justify-center py-2 px-4 gap-2 rounded-3xl shadow-xl">
                <FaStar className="text-yellow-400" />
                {ratings}
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <p className="text-gradient font-semibold flex items-center">
                <FaRupeeSign className="text-[#ff006e]" />
                {price}/
              </p>
              <p>Starting From</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolsCard;
