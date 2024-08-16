import React, { useState } from "react";
import UserSidebar from "../Components/UserSidebar";
import UserNavbar from "../Components/UserNavbar";
import {
  MdClosedCaptionOff,
  MdOutlineBrandingWatermark,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import card3 from "../assets/images/card3.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import { IoVideocam } from "react-icons/io5";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { BsPlusCircleDotted } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import youtubeIcon from "../assets/images/youtube.png";
import youtube from "../assets/images/YouTube_new.png";
import tiktok from "../assets/images/tik-tok.png";
import facebook from "../assets/images/facebook.png";
import { GrUploadOption } from "react-icons/gr";
import ScheduleComponent from "../Components/ScheduleComponent";

function CreateStream({
  mainContentRef,
  sidebarRef,
  handleToggle,
  removeSmRef,
  SmallhandleToggle,
  SmallhandleToggleRemove,
  handleNext,
  section,
}) {
  const [selectedVideo, setSelectedVideo] = useState(1);
  const [loopCount, setLoopCount] = useState(1);

  //   accordian
  const [isOpen, setIsOpen] = useState(false);

  const handleToggled = () => {
    setIsOpen(!isOpen);
  };

  const videos = [
    {
      id: 1,
      title: "9mm PPS-43 w/ folding stock.mp4",
      thumbnail: card3,
      src: "https://www.bigbuckbunny.org/",
      duration: "00:23",
    },
  ];

  const [tags, setTags] = useState(["Stream Prisma"]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = inputValue.trim();

      // Check if the tag already exists
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }

      // Clear input
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

// destination
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <>
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
          <div className="container px-lg-4 stream_live" style={{ marginBottom: "20px" }}>
            <div className="row cards_sec mt-lg-2">
              <div className="col-lg-12 col_space">
                <div
                  className="card card_design p-3"
                  style={{ height: "auto" }}
                >
                  <div className="row justify-content-center my-2 " >
                    <div className="col-lg-11">
                      <div className="d-flex justify-content-between alifn-items-center">
                        <h5>Videos in this stream</h5>
                        <button className="btn btn-new2">
                          <MdOutlineBrandingWatermark /> Branding
                        </button>
                      </div>
                      <div className="card_gray selected">
                        <div className="row">
                          <div className="col-lg-7">
                            {selectedVideo && (
                              <div className="video-player mb-1">
                                <video controls loop className="w-100">
                                  <source src={videos.src} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                            )}
                            <div className="d-lg-flex justify-content-between align-items-center mx-2">
                              <div className="d-flex align-items-center mt-2">
                                <label
                                  htmlFor="loopControl"
                                  className=""
                                  style={{ fontSize: "14px" }}
                                >
                                  Loop video:
                                </label>
                                <select
                                  id="loopControl"
                                  className="form-select w-auto py-0 ms-2"
                                  value={loopCount}
                                  onChange={(e) =>
                                    setLoopCount(Number(e.target.value))
                                  }
                                >
                                  {[...Array(7)].map((_, i) => (
                                    <option key={i} value={i + 1}>
                                      {i + 1}
                                    </option>
                                  ))}
                                </select>
                                <span
                                  className="ms-2"
                                  style={{ fontSize: "14px" }}
                                >
                                  times
                                </span>
                              </div>
                              <div
                                className="text-muted mt-0 mt-2 d-flex gap-2 align-tems-center"
                                style={{ fontSize: "14px" }}
                              >
                                <p>Stream duration:</p>
                                <p
                                  class="badge"
                                  style={{ background: "#AA0062" }}
                                >
                                  {selectedVideo?.duration || "00:00:00"}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 mt-lg-0 mt-2">
                            <div className="playlist">
                              <div className="d-flex align-items-center gap-2">
                                {videos.map((video) => (
                                  <div
                                    className={`playlist-item d-flex align-items-center p-2  w-100
                                    ${
                                      video === selectedVideo
                                        ? "border border-danger"
                                        : ""
                                    }`}
                                    onClick={() => onSelect(video)}
                                  >
                                    <img
                                      src={video.thumbnail}
                                      alt={video.title}
                                      className="img-thumbnail me-2"
                                      style={{ width: "60px", height: "auto" }}
                                    />
                                    <div>
                                      <div style={{ fontSize: "14px" }}>
                                        {video.title}
                                      </div>
                                      <div style={{ fontSize: "11px" }}>
                                        {video.duration}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="light"
                                    id="dropdown-basic"
                                    className="border-0 p-0"
                                    style={{ backgroundColor: "transparent" }}
                                  >
                                    <p><BsThreeDotsVertical
                                      style={{ fontSize: "22px" }}
                                    /></p>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item
                                      className="px-3 py-1"
                                      onClick={() => handleNext(section + 1)}
                                    >
                                      <IoVideocam
                                        style={{
                                          fontSize: "18px",
                                          marginRight: "5px",
                                        }}
                                      />{" "}
                                      Change Video
                                    </Dropdown.Item>
                                    <Dropdown.Item className="px-3 py-1">
                                      <MdClosedCaptionOff
                                        style={{
                                          fontSize: "18px",
                                          marginRight: "5px",
                                        }}
                                      />{" "}
                                      Caption / Subtitles
                                    </Dropdown.Item>
                                    <Dropdown.Item className="px-3 py-1">
                                      <MdOutlineDeleteOutline
                                        style={{
                                          fontSize: "18px",
                                          marginRight: "5px",
                                        }}
                                      />{" "}
                                      Remove Video
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <div class="playlist_btn">
                                <button className="btn btn-new2 mt-2">
                                  + Create Playlist
                                </button>
                              </div>
                            </div>
                            {/* <LoopControl loopCount={loopCount} onChange={setLoopCount} /> */}
                          </div>
                        </div>
                      </div>

                      <h5 className="mt-4">Stream Details</h5>
                      <div className="card_gray">
                        <form action="">
                          <div>
                            <label htmlFor="">Title*</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Title*"
                            />
                          </div>
                          <div>
                            <label htmlFor="">Description</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Description"
                            />
                          </div>

                          <label htmlFor="">Tags</label>
                          <div className="tags-input-container">
                            {tags.map((tag, index) => (
                              <div className="tag-item" key={index}>
                                {tag}
                                <button
                                  className="remove-tag"
                                  onClick={() => removeTag(tag)}
                                >
                                  x
                                </button>
                              </div>
                            ))}
                            <input
                              type="text"
                              value={inputValue}
                              onChange={handleInputChange}
                              onKeyDown={handleKeyDown}
                              placeholder="press Enter or Tabs"
                            />
                          </div>

                          <div className="tags-input-container">
                            <button
                              onClick={handleToggled}
                              type="button"
                              className="w-100 h-100 d-flex justify-content-between align-items-center px-2"
                              style={{
                                background: "transparent",
                                border: "none",
                              }}
                            >
                              <h6>Advanced Settings</h6>{" "}
                              <p className="pt-2">
                                {isOpen ? (
                                  <IoIosArrowDropup
                                    style={{ fontSize: "18px" }}
                                  />
                                ) : (
                                  <IoIosArrowDropdown
                                    style={{ fontSize: "18px" }}
                                  />
                                )}
                              </p>
                            </button>
                            {isOpen && (
                              <div className="accordion-content">
                                <div className="row">
                                  <div className="col-lg-4">
                                    <label>
                                      <input
                                        type="checkbox"
                                        className="mt-2 me-1"
                                      />{" "}
                                      This video is 180° or 360°
                                    </label>
                                  </div>
                                  <div className="col-lg-4">
                                    <label>
                                      <input
                                        type="checkbox"
                                        className="mt-2 me-1"
                                      />{" "}
                                      Delete post after stream ends / VOD
                                    </label>
                                  </div>
                                  <div className="col-lg-4">
                                    <label>
                                      <input
                                        type="checkbox"
                                        className="mt-2 me-1"
                                      />{" "}
                                      Activate DVR (YouTube only)
                                    </label>
                                  </div>
                                  <div className="col-lg-4">
                                    <label>
                                      <input
                                        type="checkbox"
                                        className="mt-2 me-1"
                                      />{" "}
                                      Allowed for kids (YouTube only)
                                    </label>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                          <span style={{ fontSize: "12px" }}>
                            You are responsible for the content you stream.
                            Always follow destination streaming platform's
                            community guidelines when streaming.
                          </span>
                        </form>
                      </div>

                      <h5 className="mt-4">Choose destinations</h5>
                      <p>Select at least one or multiple destinations</p>
                      <div className="card_gray">
                        <h5>Social platforms</h5>
                       <div className="" style={{width:'fit-content'}} onClick={handleShow}>
                       <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="tooltip-upload">
                              Add Destination
                            </Tooltip>
                          }
                        >
                          <p className="my-4">
                            <BsPlusCircleDotted style={{ fontSize: "36px" }} />
                          </p>
                        </OverlayTrigger>
                       </div>
                      </div>

                      <div className="card_gray">
                        <h6>Event Thumbnail</h6>

                        <div className="d-lg-flex  gap-4">
                            <img src={card3} alt="" style={{width:'180px', height:'120px', border:'1px solid #000'}} />
                            <Dropdown>
                                  <Dropdown.Toggle
                                    variant="light"
                                    id="dropdown-basic"
                                    className="btn-new2 mt-3 text-white"
                                    style={{ backgroundColor: "transparent", color:'white !important' }}
                                  >
                                    <GrUploadOption
                                      style={{ fontSize: "22px", marginRight:'8px' }}
                                    /> Select thumbnail
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item
                                      className="px-3 py-1"
                                      
                                    >
                                      
                                      upload custom thumbnail
                                    </Dropdown.Item>
                                    <Dropdown.Item className="px-3 py-1">
                                      
                                      set thumbnail from the video
                                    </Dropdown.Item>
                                    <Dropdown.Item className="px-3 py-1">
                                      
                                      set thumbnail from unsplash
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                        </div>
                      </div>

                      <ScheduleComponent />

                      <div className="my-5 text-center">
                      <button className="btn btn_secondary me-3" style={{borderRadius:'50px'}}>Discard</button>
                      <button className="btn btn-new2">Schedule Stream</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Modal show={show} onHide={handleClose} centered >
        <div className="modal-overlay">
          <Modal.Header closeButton></Modal.Header>
          <div className="p-3" >
            
          <h3>Connect Destination</h3>
            <p>Add streaming platform or connect custom RTMP destination.</p>
          </div>
        <Modal.Body className="p-5 rounded-3 shadow-sm border">
          <div className="row my-4">
            <div className="col-lg-6 mb-3">
                <button className="destination-btn">
                    <div className="left_color_youtube"><img src={youtubeIcon} alt="youtubeIcon" /></div>
                    <div className="right_color"><img src={youtube} alt="youtube" /></div>
                </button>
            </div>

            <div className="col-lg-6 mb-3">
                <button className="destination-btn">
                    <div className="left_color_tiktok"><img src={tiktok} alt="youtubeIcon" /></div>
                    <div className="right_color"><h1 style={{fontSize:'28px', fontWeight:'700'}}>TikTok</h1></div>
                </button>
            </div>

            <div className="col-lg-6 mb-3">
                <button className="destination-btn">
                    <div className="left_color_facebook"><img src={facebook} alt="youtubeIcon" /></div>
                    <div className="right_color"><h1 style={{fontSize:'28px', fontWeight:'700'}}>facebook</h1></div>
                </button>
            </div>
          </div>
        </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default CreateStream;
