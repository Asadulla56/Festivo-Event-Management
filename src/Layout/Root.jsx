import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Share/Navbar";
import Footer from "../Components/Share/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Root;
