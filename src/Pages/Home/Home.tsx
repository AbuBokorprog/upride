import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Banner from "./Banner/Banner";
import OurServices from "./OurServices/OurServices";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <OurServices />
    </div>
  );
};

export default Home;
