import React, { useState, useEffect } from "react";
import UserSidebar from "../Components/UserSidebar";
import UserNavbar from "../Components/UserNavbar";
import VideoItem from "../Components/VideoItem";
import card3 from "../assets/images/card3.jpg";

import axios from "axios";
import { STORAGE, USER_VIDEOS } from "../utility/api";
import VideoThumbnail from "react-video-thumbnail";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideosAction } from "../store/videos";
import { loadingActions } from "../store/loading";
import toast, { Toaster } from "react-hot-toast";
import { storageAction, storageActions } from "../store/storage";

const videos = [
  {
    thumbnail: card3,
    title: "9mm PPS-43 w_ folding stock.mp4",
    duration: "00:00:23",
    type: "Direct Upload",
  },
  {
    thumbnail: card3,
    title: "bandicam 2024-05-15 11-46-52-481.mp4",
    duration: "00:02:10",
    type: "Direct Upload",
  },
];

function Storage({
  mainContentRef,
  sidebarRef,
  handleToggle,
  removeSmRef,
  SmallhandleToggle,
  SmallhandleToggleRemove,
}) {
  const storage = useSelector((state) => state.storage);
  const storage_error = useSelector((state) => state.storage.error);
  const videos = useSelector((state) => state.videos.videos);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchStorage = async () => {
      dispatch(loadingActions.setLoading(true));
      dispatch(fetchVideosAction());
      dispatch(storageAction());
      dispatch(loadingActions.setLoading(false));
    };
    fetchStorage();
  }, []);

  if (storage_error) {
    toast.error(storage_error);
    storage_error && dispatch(storageActions.setError(""));
  }

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
          className="main_content_section  p-lg-2"
        >
          <div className="container p-0">
            <UserNavbar
              SmallhandleToggle={SmallhandleToggle}
              SmallhandleToggleRemove={SmallhandleToggleRemove}
            />
          </div>

          {/* Middle Content */}
          <div className="live_stream_section">
            <div className="container px-lg-4 p-0">
              <div className="row ">
                <div className="col-lg-12 col_space">
                  <div className="card card_design">
                    <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                      <h5>Videos</h5>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-new2 me-2">My Device</button>
                      </div>
                    </div>
                    <div className="d-lg-flex justify-content-between align-items-center">
                      <p className="mb-4">
                        Video storage capacity depends on the subscription plan.
                      </p>
                      <div style={styles.containerStorage}>
                        <h3 style={styles.title}>Personal Storage</h3>
                        <div style={styles.barBackground}>
                          <div
                            style={{
                              ...styles.barFill,
                              width: `${
                                (storage.memory?.remaining_storage /
                                  storage.memory?.allocated_storage) *
                                1024 *
                                100
                              }%`,
                            }}
                          ></div>
                        </div>
                        <p style={styles.text}>
                          {storage.memory?.unit === "GB"
                            ? storage.memory?.remaining_storage / (1024 * 1024)
                            : storage.memory?.remaining_storage / 1024}{" "}
                          {storage.memory?.unit} of{" "}
                          {storage.memory?.allocated_storage} used
                        </p>
                      </div>
                    </div>
                    <h6>Select</h6>
                    <div className="video-list">
                      {videos?.map((video, index) => (
                        <VideoItem key={index} video={video} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const styles = {
  containerStorage: {
    width: "100%",
    maxWidth: "250px",
    padding: "5px",
    borderRadius: "8px",
    backgroundColor: "#f4f4f4",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    margin: "0 0 10px 0",
    fontSize: "13px",
    fontWeight: "600",
  },
  barBackground: {
    width: "100%",
    height: "8px",
    backgroundColor: "#e0e0e0",
    borderRadius: "10px",
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    backgroundColor: "var(--secondary-color)",
    borderRadius: "10px 0 0 10px",
  },
  text: {
    margin: "10px 0 0 0",
    fontSize: "12px",
    color: "#555",
  },
};

export default Storage;
