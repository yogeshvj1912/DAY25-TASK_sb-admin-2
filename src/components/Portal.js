import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Portal() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Outlet></Outlet>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Portal;
