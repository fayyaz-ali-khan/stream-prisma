import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/images/profile.webp";
import { FaHamburger } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { MdSubscriptions } from "react-icons/md";
import ModalSchedule from "./ModalSchedule";

function UserNavbar({ SmallhandleToggle }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg my-2 px-lg-2 p-0">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="nav-btns d-flex">
            <button
              id="res_sidebar"
              className="res_sidebar"
              onClick={SmallhandleToggle}
            >
              <FaHamburger style={{ fontSize: "22px" }} />
            </button>
            {/* onClick={handleShow} */}
            <Link className="btn btn-new2 none-btn" onClick={handleShowModal}>
              <FaPlus className="me-1" /> Create Stream
            </Link>
          </div>
          <ul className="navbar-nav gap-lg-2 gap-2 flex-row align-items-center d-flex justify-content-between">
            <li className="nav-item dropdown message-box">
              <button
                className="btn btn-light-new nav-link nav-icon"
                data-bs-toggle="dropdown"
              >
                <MdSubscriptions className="me-2" />
                Free Plan
              </button>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications p-0 message-box">
                <li className="notification-item d-flex align-items-center gap-3">
                  <i className="bi bi-exclamation-circle fs-3"></i>
                  <div className="w-100">
                    <Link to={"/subscription"} className="nav-link ">
                      Update Subscription
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item me-2">
              <div
                className=""
                onClick={handleToggle}
                style={{ cursor: "pointer" }}
              >
                {isDarkMode ? (
                  <FaSun style={{ fontSize: "16px" }} />
                ) : (
                  <FaMoon style={{ fontSize: "16px" }} />
                )}
              </div>
            </li>
            <li className="nav-item dropdown message-box">
              <a
                className="nav-link nav-icon"
                href="#"
                data-bs-toggle="dropdown"
              >
                <IoNotifications style={{ fontSize: "20px" }} />
                <span className="badge bg-primary badge-number"></span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications p-0 message-box">
                <li className="notification-item d-flex align-items-center gap-3">
                  <i className="bi bi-exclamation-circle fs-3"></i>
                  <div>
                    <h4>Notification Title</h4>
                    <p>Notification body</p>
                    <p>Time ago</p>
                  </div>
                </li>
                <div className="d-flex justify-content-center my-2 p-4">
                  <button className="btn btn-new2">View All</button>
                </div>
              </ul>
            </li>
            <li className="nav-item ms-3">
              <div className="btn-group">
                <img
                  className=" dropdown-toggle"
                  style={{ cursor: "pointer", borderRadius: "50px" }}
                  width="35"
                  height="35"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  src={profilePic}
                  alt="profile"
                />
                <ul className="dropdown-menu drp-menu1">
                  <div className="d-flex gap-3 align-items-center">
                    <img
                      className="rounded"
                      width="32"
                      height="32"
                      src={profilePic}
                      alt="profile"
                    />
                    <div>
                      <p className="mb-0">User Name</p>
                      <p className="mb-0">user@example.com</p>
                    </div>
                  </div>
                  <hr />
                  <li className="p-0">
                    <Link className="dropdown-item" to="/setting">
                      Setting
                    </Link>
                  </li>
                  <li className="p-0">
                    <Link className="dropdown-item" to="/knowledge">
                      Knowledge Base
                    </Link>
                  </li>
                  <li className="p-0">
                    <Link className="dropdown-item" to="/logout">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <ModalSchedule show={showModal} onClose={handleCloseModal} />
    </>
  );
}

export default UserNavbar;
