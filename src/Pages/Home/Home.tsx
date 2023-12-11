import React from "react";
import Banner from "./Banner/Banner";
import OurServices from "./OurServices/OurServices";
import School from "./School/School";
import Offers from "./Offers/Offers";
// import Footer from "../../Component/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <OurServices />
      <School />
      <Offers />
    </div>
  );
};

export default Home;
