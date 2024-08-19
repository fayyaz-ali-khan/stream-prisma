import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCloudDownloadOutline, IoVideocam } from "react-icons/io5";
import { MdDelete, MdEditNote } from "react-icons/md";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  MdClosedCaptionOff,
  MdOutlineBrandingWatermark,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";
import VideoThumbnail from "react-video-thumbnail";
import ConfirmBox from "./ConfirmBox";
import { DELETE_VIDEO } from "../utility/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loadingActions } from "../store/loading";
import toast, { Toaster } from "react-hot-toast";
import { videosActions } from "../store/videos";


function VideoItem({ video }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const openDeleteModal = () => {
    setOpen(true);
  };
  const handleDeleteVideo = async () => {
    try {
      handleClose();
      dispatch(loadingActions.setLoading(true));
      let response = await axios.delete(DELETE_VIDEO + video.id);
      dispatch(videosActions.deleteVideo(video.id));
      toast.success("Video deleted successfully");
      console.log(response);
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong");
    } finally {
      dispatch(loadingActions.setLoading(false));
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        
        toastOptions={{
          duration: 3000,
          
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
      {/* Confirm box for delete */}
      <ConfirmBox
        title="Delete Video"
        description="Are you sure you want to delete this video?"
        open={open}
        handleCancel={handleClose}
        handleAgree={handleDeleteVideo}
      />
      {/* end confirm */}
      <div className="video-item d-flex align-items-center mb-4">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" />
        </div>
        <div className="video-thumbnail me-3">
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
            <Dropdown.Item className="px-3 py-1" onClick={openDeleteModal}>
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
