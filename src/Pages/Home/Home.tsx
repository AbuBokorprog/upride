import React from "react";
import Banner from "./Banner/Banner";
import OurServices from "./OurServices/OurServices";
import School from "./School/School";
import Offers from "./Offers/Offers";
import ClientSays from "./ClientSays/ClientSays";
import FAQ from "./FAQ'S/FAQ's";
// import LearningTab from "./LearningTab/LearningTab";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <OurServices />
      <School />
      <Offers />
      {/* <LearningTab /> */}
      <ClientSays />
      <FAQ />
    </div>
  );
};

export default Home;
