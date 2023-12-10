import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Banner from "./Banner/Banner";
import OurServices from "./OurServices/OurServices";
// import Footer from "../../Component/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <OurServices />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
