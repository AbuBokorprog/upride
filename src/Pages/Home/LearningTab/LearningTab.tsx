import React, { useEffect, useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import "./LearningTab.css";
import LearningAll from "./LearningAll";

interface LearningAllTab {
  id: number;
  title: string;
  description: string;
  image: string;
  trending?: string;
}

const LearningTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };
  const [learningAll, setLearningAll] = useState<LearningAllTab[]>();

  useEffect(() => {
    fetch("/learning")
      .then((res) => res.json())
      .then((data) => setLearningAll(data));
  }, []);

  {
    learningAll?.map((l: LearningAllTab) => (
      <LearningAll key={l.id} {...l}></LearningAll>
    ));
  }

  return (
    <div className="my-10 lg:my-20 mx-2 md:mx-10">
      <h2 className="text-center my-10 lg:my-20">
        Personalized Learning Programs
      </h2>
      <div className="my-5 lg:my-20 md:flex justify-center items-center gap-6">
        <div>
          <img src="/public/thums-banner.png" alt="" className="w-96" />
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
        <div className="tab-buttons tabs-bordered">
          {[1, 2, 3].map((tabNumber) => (
            <button
              key={tabNumber}
              className={`tab-button ${
                activeTab === tabNumber ? "text-primary" : ""
              }`}
              onClick={() => handleTabClick(tabNumber)}
            >
              Tab {tabNumber}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {[1, 2, 3].map((tabNumber) => (
            <div
              key={tabNumber}
              className={`tab-panel ${activeTab === tabNumber ? "active" : ""}`}
            >
              Content for Tab {tabNumber}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningTab;
