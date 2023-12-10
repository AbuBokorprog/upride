import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Banner from "./Banner/Banner";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <h1 className="text-primary">Home</h1>
    </div>
  );
};

export default Home;
