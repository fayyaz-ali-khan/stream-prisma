import React, { useState, useEffect } from "react";
import UserSidebar from "../Components/UserSidebar";
import UserNavbar from "../Components/UserNavbar";
import { LuPackage } from "react-icons/lu";
import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";
import card1 from "../assets/images/card1.jpg";
import card2 from "../assets/images/card2.jpg";
import card3 from "../assets/images/card3.jpg";
import Footer from "../Components/Footer";

import { DASHBOARD } from "./../utility/api.js";
import axios from "axios";
import { loadingActions } from "../store/loading";

import { useSearchParams, useNavigate } from "react-router-dom";
import { isAuth } from "../utility/auth";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";



function UserHome({
  mainContentRef,
  sidebarRef,
  handleToggle,
  removeSmRef,
  SmallhandleToggle,
  SmallhandleToggleRemove,
}) {
  const [videoUrl, setVideoUrl] = useState(
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  );
  const [dashboardData, setDashboardData] = useState({
    package_duration: null,
    package_name: null,
    video_url:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  let payment = searchParams.get("payment");

  useEffect(() => {
   
    dispatch(loadingActions.setLoading(true));
   
    if(!isAuth()){
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        let response = await axios.get(DASHBOARD);
        setDashboardData(response.data);
        console.log(dashboardData);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchDashboardData();
  }, []);

   useEffect(() => {
     payment==="success" && toast.success("Plan successfully subscribed.", {
       theme: "colored",
     });
      payment === "failed" &&
        toast.error("Plan failed to subscribed.", {
          theme: "colored",
        });
   }, []);
  useEffect(() => { 
    dispatch(loadingActions.setLoading(false));
  }, []);
  
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
      <main>
        <UserSidebar
          sidebarRef={sidebarRef}
          handleToggle={handleToggle}
          removeSmRef={removeSmRef}
          SmallhandleToggle={SmallhandleToggle}
          SmallhandleToggleRemove={SmallhandleToggleRemove}
        />
        {/* <!-- main_content --> */}
        <div
          id="sm_main_content"
          ref={mainContentRef}
          className="main_content_section p-lg-2"
        >
          <div className="container p-0">
            <UserNavbar
              SmallhandleToggle={SmallhandleToggle}
              SmallhandleToggleRemove={SmallhandleToggleRemove}
            />
          </div>

          {/* Middle Content */}
          <div className="container px-lg-4" style={{ marginBottom: "20px" }}>
            <div className="row cards_sec mt-lg-2">
              {/* {successMessage && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              {successMessage}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              {errorMessage}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          )}
          {errors.length > 0 && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Whoops!</strong> There were some problems with your input.
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          )} */}

              <div className="col-lg-4 col-md-6 col-sm-12 col_space">
                <div
                  className="card card_design p-3"
                  style={{ height: "150px" }}
                >
                  <h5>Purchased Package</h5>
                  <div className="d-flex justify-content-between">
                    <div className="my-3">
                      <div className="d-flex gap-4">
                        <span>
                          <LuPackage
                            style={{ fontSize: "18px" }}
                            className="icon"
                          />
                        </span>
                        <h6
                          className="p-0"
                          style={{ margin: "-2px 0px 0px 6px", height: "18px" }}
                        >
                          {dashboardData.package_name || "No package"}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="card card_design p-3"
                  style={{ height: "150px" }}
                >
                  <h5 className="smaller-text">Total Duration</h5>
                  <div className="d-flex justify-content-between">
                    <div className="my-3">
                      <div className="d-flex gap-4">
                        <span>
                          <MdDoNotDisturbOnTotalSilence
                            style={{ fontSize: "18px" }}
                            className="icon"
                          />
                        </span>
                        <h6
                          className="p-0"
                          style={{ margin: "-1px 0px 0px 6px", height: "18px" }}
                        >
                          {dashboardData.package_duration || " N / A"}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 col-md-6 col-sm-12 col_space">
                <div className="card card_design" style={{ height: "315px" }}>
                  {videoUrl ? (
                    <video
                      width="100%"
                      height="300"
                      style={{ borderRadius: "6px" }}
                      controls
                    >
                      <source src={dashboardData.video_url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <p>No video available.</p>
                  )}
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12 col_space"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="card card_design" style={{ flex: 1 }}>
                  <img src={card1} alt="" className="img-fluid" />
                  <h5 className="my-2 d-flex justify-content-center">
                    Welcome to the Stream Prisma account!
                  </h5>
                  <strong className="ms-3">
                    To begin your first continuous stream, follow these steps:
                  </strong>
                  <ul className="my-2">
                    <li>
                      Activate the free Trial to create a streaming server.
                    </li>
                    <li>Add video files to Stream Prisma Storage.</li>
                    <li>
                      Explore the Knowledge Base to learn how to start a 24/7
                      YouTube stream.
                    </li>
                    <li>Set up and launch your first continuous stream.</li>
                  </ul>
                  <div className="my-2 d-flex justify-content-center mt-4">
                    <a href="#" className="btn btn-new2">
                      Activate Trial
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12 col_space"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="card card_design" style={{ flex: 1 }}>
                  <img src={card2} alt="" className="card-img1 img-fluid" />
                  <h5 className="my-2 d-flex justify-content-center">
                    20 Creative Video Ideas For Church
                  </h5>
                  <ul className="my-2">
                    <li>
                      Discover how churches can conduct online worship services
                      and get tips on creating engaging online content for
                      believers.
                    </li>
                    <li>
                      Experience the World in Real-Time and Interact Seamlessly
                      with Your Audience Anytime, Anywhere
                    </li>
                    <li>
                      Share Your Adventures and Stories with a Global Audience,
                      Instantly and Effortlessly
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12 col_space"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="card card_design" style={{ flex: 1 }}>
                  <img src={card3} alt="" className="card-img1 img-fluid" />
                  <h5 className="my-3 d-flex justify-content-center">
                    How to Live Stream Music 24/7 on
                  </h5>
                  <ul className="my-2">
                    <li>
                      Music content attracts a large audience and enables you to
                      grow your YouTube channel quickly. Let's examine how you
                      can keep your channel live 24/7.
                    </li>
                    <li>
                      Engage, Entertain, and Grow with Our Advanced Live
                      Streaming Platform, Tailored for Unmatched Performance and
                      Reach
                    </li>
                    <li>
                      Transform Your Content into Real-Time Experiences,
                      Connecting with Fans and Followers Worldwide
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
}

export default UserHome;
