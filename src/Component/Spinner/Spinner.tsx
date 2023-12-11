import React from "react";
import "./Spinner.css";
import { GiSteeringWheel } from "react-icons/gi";

const Spinner: React.FC = () => {
  return (
    <div className="spinner">
      <div className="spinner-overlay"></div>
      <div className="spinner-container">
        <GiSteeringWheel className="spinner-car" />
      </div>
    </div>
  );
};

export default Spinner;
