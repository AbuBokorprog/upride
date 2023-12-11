import { useEffect, useState } from "react";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Spinner from "../Component/Spinner/Spinner";

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Main;
