
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form, Tooltip, OverlayTrigger } from "react-bootstrap";
import { SlCamrecorder } from "react-icons/sl";
import { GoDeviceDesktop, GoPlusCircle } from "react-icons/go";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import gDrive from "../assets/images/google-drive.png";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { GrUploadOption } from "react-icons/gr";
import { FaCloudUploadAlt } from "react-icons/fa";
import gDrive from "../assets/images/google-drive.png";
import thumbnail from "../assets/images/blog4.png";

function CreateScheduleModal() {

    const [show, setShow] = useState(false);
  const [section, setSection] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNext = (nextSection) => setSection(nextSection);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle the selected file
    console.log(file);
  };

  const videoData = [
    {
      thumbnail: thumbnail,
      title: "9mm PPS-43 w_ folding stock.mp4",
      resolution: "720 x 1280",
      size: "6.06 MB",
      duration: "00:00:23",
    },
    {
      thumbnail: "https://example.com/thumbnail2.jpg",
      title: "bandicam 2024-05-15 11-46-52-481.mp4",
      resolution: "1920 x 1080",
      size: "12.37 MB",
      duration: "00:02:10",
    },
    {
      thumbnail: "https://example.com/thumbnail3.jpg",
      title: "newest.mp4",
      resolution: "1280 x 720",
      size: "20.02 MB",
      duration: "00:04:39",
    },
    {
      thumbnail: "https://example.com/thumbnail3.jpg",
      title: "newest.mp4",
      resolution: "1280 x 720",
      size: "20.02 MB",
      duration: "00:04:39",
    },
  ];

  return (
    <>
    {/* modal */}
    <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
        dialogClassName="blurred-modal"
      >
        <div className="modal-overlay">
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            {section === 1 && (
              <>
                <Modal.Title style={{ fontSize: "14px" }}>
                  How would you like to stream?
                </Modal.Title>
                <button
                  className="custom-button mt-3"
                  onClick={() => handleNext(2)}
                >
                  <div className="custom-button-icon">
                    <SlCamrecorder style={{ fontSize: "26px" }} />
                    <div className="custom-button-content">
                      <div className="custom-button-title">
                        Pre-recorded Stream
                      </div>
                      <div className="custom-button-subtitle">
                        Stream video files, playlists & recordings
                      </div>
                    </div>
                  </div>
                  <div className="custom-button-arrow">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7.5"
                        transform="rotate(-90 8 8)"
                        fill="white"
                        stroke="#7B7F97"
                      />
                      <path
                        d="M9.49879 8.27143C9.19936 8.65067 8.92726 8.99764 8.6529 9.34209C7.91771 10.2653 7.1858 11.1921 6.44398 12.1078C6.01481 12.6375 6.31339 13.187 6.69713 13.3122C6.95347 13.3959 7.13795 13.2387 7.30043 13.0393C7.66111 12.5966 8.01626 12.1477 8.37357 11.7011C9.12547 10.7616 9.87869 9.82345 10.6286 8.88164C10.9731 8.44896 10.9659 8.07288 10.6193 7.64136C9.53017 6.28546 8.44211 4.9284 7.35314 3.57226C7.29358 3.49808 7.23514 3.42047 7.16712 3.35835C6.92737 3.1395 6.64395 3.1541 6.42432 3.38928C6.21348 3.61502 6.16009 3.92692 6.31846 4.2193C6.4281 4.42162 6.57482 4.59831 6.71588 4.77429C7.57279 5.84335 8.43313 6.90855 9.29121 7.97636C9.35689 8.05813 9.41377 8.14988 9.49879 8.27143Z"
                        fill="#7B7F97"
                      />
                    </svg>
                  </div>
                </button>
              </>
            )}
            {section === 2 && (
              <>
                <button className="btn btn-new2 mt-3">
                  <SlCamrecorder style={{ fontSize: "18px" }} /> Video File
                </button>
                <div className="my-3 d-flex justify-content-between">
                  <Modal.Title style={{ fontSize: "15px" }}>
                    Upload Options
                  </Modal.Title>
                  <Modal.Title style={{ fontSize: "11px" }}>
                    Allowed: mov, mp4, m4v
                  </Modal.Title>
                </div>
                <button className="custom-button mt-3">
                  <label className="file-label">
                    <input
                      type="file"
                      className="file-input"
                      accept=".mov, .mp4, .m4v"
                      onChange={handleFileChange}
                    />
                    <div className="custom-button-icon">
                      <GoDeviceDesktop style={{ fontSize: "26px" }} />
                      <div className="custom-button-content">
                        <div className="custom-button-title">My Device</div>
                        <div className="custom-button-subtitle">
                          Upload max 10 GB directly from your device
                        </div>
                      </div>
                    </div>
                  </label>
                </button>

                <button
                  className="custom-button mt-3"
                  onClick={() => handleNext(3)}
                >
                  <div className="custom-button-icon">
                    <SiGoogledisplayandvideo360 style={{ fontSize: "26px" }} />
                    <div className="custom-button-content">
                      <div className="custom-button-title">
                        StreamPrisma Storage
                      </div>
                      <div className="custom-button-subtitle">
                        Go live using previously uploaded videos or recordings
                      </div>
                    </div>
                  </div>
                  <div className="custom-button-arrow">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7.5"
                        transform="rotate(-90 8 8)"
                        fill="white"
                        stroke="#7B7F97"
                      />
                      <path
                        d="M9.49879 8.27143C9.19936 8.65067 8.92726 8.99764 8.6529 9.34209C7.91771 10.2653 7.1858 11.1921 6.44398 12.1078C6.01481 12.6375 6.31339 13.187 6.69713 13.3122C6.95347 13.3959 7.13795 13.2387 7.30043 13.0393C7.66111 12.5966 8.01626 12.1477 8.37357 11.7011C9.12547 10.7616 9.87869 9.82345 10.6286 8.88164C10.9731 8.44896 10.9659 8.07288 10.6193 7.64136C9.53017 6.28546 8.44211 4.9284 7.35314 3.57226C7.29358 3.49808 7.23514 3.42047 7.16712 3.35835C6.92737 3.1395 6.64395 3.1541 6.42432 3.38928C6.21348 3.61502 6.16009 3.92692 6.31846 4.2193C6.4281 4.42162 6.57482 4.59831 6.71588 4.77429C7.57279 5.84335 8.43313 6.90855 9.29121 7.97636C9.35689 8.05813 9.41377 8.14988 9.49879 8.27143Z"
                        fill="#7B7F97"
                      />
                    </svg>
                  </div>
                </button>

                <button className="custom-button flex-column align-items-start mt-3">
                  <div className="custom-button-content">
                    <div className="custom-button-title">
                      StreamPrisma Storage
                    </div>
                    <div className="custom-button-subtitle">
                      Go live using previously uploaded videos or recordings
                    </div>
                  </div>
                  <div className="mt-3 d-flex gap-3">
                    <Link to={"/"}>
                      <img
                        src={gDrive}
                        className=""
                        width={"25px"}
                        height={"25px"}
                        alt="google drive"
                      />
                    </Link>
                    <GoPlusCircle
                      style={{ fontSize: "26px", color: "#92929f" }}
                    />
                  </div>
                </button>
              </>
            )}
            {section === 3 && (
              <div className="upload-section">
                <div className="upload-header">
                  <div className="">
                    <Button variant="link" className="p-0">
                      <p>
                        <FaRegArrowAltCircleLeft
                          onClick={() => handleNext(2)}
                          style={{ fontSize: "24px" }}
                        />
                      </p>
                    </Button>
                  </div>
                  <div className="my-3 d-flex align-items-center gap-2">
                    <div className="">Uploads</div>
                    <div className="d-flex justify-content-end">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip id="tooltip-upload">
                            Upload from device
                          </Tooltip>
                        }
                      >
                        <Button
                          className="p-0"
                          style={{ background: "none", border: "none" }}
                        >
                          <label
                            htmlFor="file-input"
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "inline-block",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              id="file-input"
                              type="file"
                              style={{ display: "none" }}
                              onChange={handleFileChange}
                            />
                            <GrUploadOption
                              style={{ fontSize: "20px", color: "#000" }}
                            />
                          </label>
                        </Button>
                      </OverlayTrigger>
                    </div>

                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="tooltip-uploaded">
                          Upload from Cloud Storage
                        </Tooltip>
                      }
                    >
                      <FaCloudUploadAlt
                        style={{
                          fontSize: "22px",
                          cursor: "pointer",
                          color: "#000",
                        }}
                      />
                    </OverlayTrigger>
                  </div>
                </div>
                <div className="storage-tabs d-flex justify-content-center my-3">
                  <Button
                    style={{
                      border: "1px dotted #AA0062",
                      background: "transparent",
                      color: "#AA0062",
                      borderRadius: "50px",
                      fontSize: "14px",
                    }}
                    className="mr-2"
                  >
                    StreamPrisma Storage
                  </Button>
                </div>
                <Form.Control
                  type="text"
                  placeholder="Search Videos"
                  className="my-3 input_modal"
                />
                <div className="video-list">
                  {videoData.map((video, index) => (
                    <>
                      <div className="video-item video-items d-flex mb-3" key={index}>
                        <Link
                          to={"/createstream"}
                          className="btn btn-new2 select_btn_set"
                        >
                          Select Video
                        </Link>
                        <img
                          src={video.thumbnail}
                          alt="thumbnail"
                          style={{ borderRadius: "6px" }}
                          className="thumbnail mr-3"
                        />
                        <div className="video-info">
                          <div className="video-title mb-2">{video.title}</div>
                          <div className="video-details d-flex justify-content-between">
                            <div>{video.resolution}</div>
                            <div>{video.size}</div>
                            <div>{video.duration}</div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            )}
          </Modal.Body>
        </div>
      </Modal>
    </>
  )
}

export default CreateScheduleModal