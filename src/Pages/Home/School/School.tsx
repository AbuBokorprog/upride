import React, { useEffect, useState } from "react";
import { MdLocationSearching } from "react-icons/md";
import SchoolsCard from "./SchoolsCard";

interface Schools {
  id: string;
  title: string;
  location: string;
  image: string;
  ratings: number;
  price: number;
}

const School: React.FC = () => {
  const [schools, setSchools] = useState<Schools[]>();

  useEffect(() => {
    fetch("/school.json")
      .then((res) => res.json())
      .then((data) => {
        setSchools(data);
      });
  }, []);

  return (
    <div className="my-10 lg:my-20 mx-2 md:mx-10">
      <div className="my-10 lg:my-20">
        <h2>Recommended Driving Schools</h2>
        <div className="mt-4 md:flex gap-4 items-center md:justify-between">
          <p>
            These are upride Verified most recommended Driving Schools in
            Bengaluru
          </p>
          <div className="flex gap-4 mt-2 md:mt-0 justify-between md:justify-start items-center">
            <button className="btn bg-primary rounded-3xl text-white">
              <MdLocationSearching className="md:w-5 md:h-5"></MdLocationSearching>
              Near Me
            </button>
            <button className="btn">View All</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto">
        {schools?.map((school: Schools) => (
          <SchoolsCard key={school.id} {...school}></SchoolsCard>
        ))}
      </div>
    </div>
  );
};

export default School;
