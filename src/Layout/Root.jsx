import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect } from "react";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="bg-linear-to-br from-[#faf5ff] via-[#f3e8ff] to-[#eef2ff] dark:from-[#1a1230] dark:via-[#1f163d] dark:to-[#151028]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
