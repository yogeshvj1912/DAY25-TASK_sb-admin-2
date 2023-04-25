import {
  faChartArea,
  faCog,
  faFolder,
  faLaughWink,
  faTable,
  faTachometerAltFast,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  const [isVisible, setVisible] = useState(false);
  const [isVisible1, setVisible1] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  return (
    <>
      {/* <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          to={"/dashboard"}
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <FontAwesomeIcon icon={faLaughWink} size="2x" />
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <FontAwesomeIcon icon={faTachometerAltFast} />
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <button
            onClick={() => setVisible(!isVisible)}
            className={isVisible ? "nav-link" : "nav-link collapsed"}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded={isVisible}
            aria-controls="collapseTwo"
            style={{ border: "none", background: "none" }}
          >
            <FontAwesomeIcon icon={faCog} />
            <span>Components</span>
          </button>
          <div
            id="collapseTwo"
            className={isVisible ? "collapse show" : "collapse"}
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <Link className="collapse-item" to="components/buttons">
                Buttons
              </Link>
              <Link className="collapse-item" to="components/cards">
                Cards
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <button
            onClick={() => setVisible1(!isVisible1)}
            className={isVisible1 ? "nav-link" : "nav-link collapsed"}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded={isVisible1}
            aria-controls="collapseTwo"
            style={{ border: "none", background: "none" }}
          >
            <FontAwesomeIcon icon={faWrench} />
            <span>Utilities</span>
          </button>
          <div
            id="collapseUtilities"
            className={isVisible1 ? "collapse show" : "collapse"}
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <Link className="collapse-item" to="/utilities/colors">
                Colors
              </Link>
              <Link className="collapse-item" to="utilities/borders">
                Borders
              </Link>
              <Link className="collapse-item" to="utilities/animations">
                Animations
              </Link>
              <Link className="collapse-item" to="utilities/others">
                Other
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Addons</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <button
            onClick={() => setVisible2(!isVisible2)}
            className={isVisible2 ? "nav-link" : "nav-link collapsed"}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded={isVisible2}
            aria-controls="collapseTwo"
            style={{ border: "none", background: "none" }}
          >
            <FontAwesomeIcon icon={faFolder} />
            <span>Pages</span>
          </button>
          <div
            id="collapsePages"
            className={isVisible2 ? "collapse show" : "collapse"}
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <Link className="collapse-item" to="pages/login">
                Login
              </Link>
              <Link className="collapse-item" to="pages/register">
                Register
              </Link>
              <Link className="collapse-item" to="pages/forgot-password">
                Forgot Password
              </Link>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <Link className="collapse-item" to="pages/error-404">
                404 Page
              </Link>
              <Link className="collapse-item" to="pages/blank">
                Blank Page
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/charts">
            <FontAwesomeIcon icon={faChartArea} />
            <span>Charts</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/tables">
            <FontAwesomeIcon icon={faTable} />
            <span>Tables</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        {/* <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div> */}
      </ul>
      {/* <!-- End of Sidebar --> */}
    </>
  );
}

export default Sidebar;
