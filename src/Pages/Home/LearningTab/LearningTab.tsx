import React, { useEffect, useState } from "react";
import "./LearningTab.css";
import LearningAll from "./LearningAll";

interface LearningAllTab {
  id: number;
  title: string;
  description: string;
  image: string;
  isTrending?: string;
}

const LearningTab: React.FC = () => {
  const [learningAll, setLearningAll] = useState<LearningAllTab[]>();

  useEffect(() => {
    fetch("/Learning.json")
      .then((res) => res.json())
      .then((data) => {
        setLearningAll(data);
      });
  }, []);
  return (
    <div className="my-10 lg:my-20 mx-2 md:mx-10">
      <h2 className="text-center my-10 lg:my-20">
        Personalized Learning Programs
      </h2>
      <div className="my-5 lg:my-20 md:flex justify-center items-center gap-6">
        <div>
          <img src="/thums-banner.png" alt="" className="w-96" />
        </div>
        <div className="w-96">
          <h3>
            Easy, reliable, <br /> and flexible.
          </h3>
          <p className="my-4">
            At Upride, we know that every learner is unique, and so are their
            needs when it comes to driving education. Our commitment to
            personalized learning goes beyond the conventional, offering
            tailor-made programs designed to cater to individual preferences .
          </p>
          <button className="text-primary">Learn More</button>
        </div>
      </div>
      <div className="">
        <div role="tablist" className="tabs tabs-bordered">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="All"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
              {learningAll?.map((l: LearningAllTab) => (
                <LearningAll key={l.id} {...l}></LearningAll>
              ))}
            </div>
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Training"
          />
          <div role="tabpanel" className="tab-content p-10">
            N/A
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="RTO&Rules"
          />
          <div role="tabpanel" className="tab-content p-10">
            N/A
          </div>
        </div>
      </div>
      <div className="my-10 px-6 mx-auto lg:my-20 rounded-xl lg:w-1/2 text-center border-color-specific">
        <h3 className="my-4">Prepare for Learner’s License Test</h3>
        <p className="my-2">
          Curated videos for you to easily pass learner’s license test. Watch
          now and pass the test with utmost ease.
        </p>
        <button className="mb-2 btn rounded-3xl text-white bg-gradient-to-r from-[#FF006E] to-[#FFBE0B]">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default LearningTab;
