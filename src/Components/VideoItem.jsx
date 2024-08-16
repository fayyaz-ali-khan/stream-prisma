import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCloudDownloadOutline, IoVideocam } from "react-icons/io5";
import { MdDelete, MdEditNote } from "react-icons/md";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";import {
  MdClosedCaptionOff,
  MdOutlineBrandingWatermark,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";
import VideoThumbnail from "react-video-thumbnail";
function VideoItem({ video }) {
  return (
    <>
      <div className="video-item d-flex align-items-center mb-4">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" />
        </div>
        <div
          className="video-thumbnail me-3"
         
        >
          {/* <VideoThumbnail
            videoUrl={video.video}
            cors={true}
          /> */}
          <img src={video.thumbnail} alt={video.title} className="img-fluid" />
          <span className="video-duration">{video.duration}</span>
        </div>
        <div className="video-info flex-grow-1">
          <h6 className="mb-0">{video.title}</h6>
          <div>
            <p className="badge">{video.type}</p>
          </div>
        </div>
        <div
          className="video-actions d-flex align-items-center"
          style={{ marginTop: "-7px" }}
        >
          <Link to={"/schdulestreams"}>
            <button className="btn btn-new2">Stream Video</button>
          </Link>
        </div>
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
            className="border-0 p-0"
            style={{ backgroundColor: "transparent" }}
          >
            <p>
              <BsThreeDotsVertical style={{ fontSize: "22px" }} />
            </p>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item className="px-3 py-1">
              <IoVideocam
                style={{
                  fontSize: "18px",
                  marginRight: "5px",
                }}
              />{" "}
              Video Details
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
    </>
  );
}

export default VideoItem;
