import React from "react";
import Header from "../Components/Shared/atoms/header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/atoms/Footer";

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 min-h-[calc(100vh-80px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
