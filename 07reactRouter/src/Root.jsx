import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./Component/Index";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
