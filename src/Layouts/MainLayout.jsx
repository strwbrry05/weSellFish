import React from "react";
import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
