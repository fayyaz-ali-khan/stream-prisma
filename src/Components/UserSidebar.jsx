import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logoNewDark.png";
import { BsThreeDots } from "react-icons/bs";
import { RiCloseLargeLine } from "react-icons/ri";
import { MdHome } from "react-icons/md";
import { GrSchedulePlay } from "react-icons/gr";
import { BiSolidVideos } from "react-icons/bi";
import { SiKnowledgebase } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { CiStreamOn } from "react-icons/ci";
import ModalSchedule from "./ModalSchedule";

function UserSidebar({
  sidebarRef,
  handleToggle,
  removeSmRef,
  SmallhandleToggleRemove,
  handleShow
}) {

  const [showModal, setShowModal] = useState(false);

  // const handleShowModal = () => setShowModal(true);
  // const handleCloseModal = () => setShowModal(false);

  const navigate = useNavigate();

  const handleShowModal = () => {
    setShowModal(true);
    navigate('/schdulestreams'); 
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {/* <!-- sidebar_icons --> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="bootstrap" viewBox="0 0 118 94">
          <title>Streaming</title>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
          ></path>
        </symbol>

        <symbol id="speedometer2" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
          <path
            fill-rule="evenodd"
            d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
          />
        </symbol>
        <symbol id="home" viewBox="0 0 16 16">
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
        </symbol>

        <symbol
          id="streams-scheduler-home"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
        </symbol>

        <symbol
          id="streams-play"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 2 L12 8 L4 14 Z" />
        </symbol>

        <svg
          id="setting"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
        </svg>

        <svg
          id="message"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.383 0 0 4.364 0 9.75 0 13.116 2.066 16.083 5.25 17.669v6.331l6.293-3.581c.15.013.301.022.457.022 6.617 0 12-4.364 12-9.75S18.617 0 12 0zm0 17.25c-.132 0-.263-.006-.392-.018l-4.92 2.799 1.27-3.581C6.484 15.345 4.5 12.676 4.5 9.75 4.5 5.947 7.925 3 12 3s7.5 2.947 7.5 6.75S16.075 17.25 12 17.25z" />
        </svg>

        <symbol id="subscription-icon" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm6-6c0 1.104-.895 2-2 2H4c-1.105 0-2-.896-2-2 0-1.003.63-1.854 1.53-2.149l.883-.295V7c0-2.071 1.234-3.882 3-4.584V2.5a.5.5 0 1 1 1 0v.417c1.766.702 3 2.513 3 4.584v.556l.883.295A2.993 2.993 0 0 1 14 10zM4.53 11h6.94c.416 0 .707-.416.707-.707v-.586a1.501 1.501 0 0 0-.707-.293H4.53c-.416 0-.707.416-.707.707v.586c0 .29.291.707.707.707z" />
        </symbol>
        <symbol id="new-plan-icon" viewBox="0 0 16 16">
          <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5.5L10.5 0H3zm1 1h6v4a1 1 0 0 0 1 1h4v9H4V1zm8 5h-3V2l3 3z" />
          <path d="M8 9v2h2v1H8v2H7v-2H5v-1h2V9h1z" />
        </symbol>

        <symbol id="knowledge-base-icon" viewBox="0 0 16 16">
          <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h5A1.5 1.5 0 0 1 9 2.5v11A1.5 1.5 0 0 1 7.5 15h-5A1.5 1.5 0 0 1 1 13.5v-11zM2 2.5a.5.5 0 0 0-.5.5v11c0 .276.224.5.5.5h5a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 7.5 2H2.5a.5.5 0 0 0-.5.5zM11 2h-1v12h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
          <path d="M14.5 0a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5H10v-1h4V1h-4V0h4.5zM9 0a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2.5A2.5 2.5 0 0 1 0 11.5v-8A2.5 2.5 0 0 1 2.5 1H9z" />
          <circle cx="8" cy="4" r="1" />
          <path d="M8 6.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5zm0 2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5z" />
        </symbol>

        <symbol id="storage-icon" viewBox="0 0 16 16">
  <path d="M14.5 2.5l-4 2.5V4c0-1.1-.9-2-2-2H2C.9 2 0 2.9 0 4v8c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-1l4 2.5V2.5zM9 12H2V4h7v8z" />
</symbol>

        <symbol id="collection" viewBox="0 0 16 16">
          <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
        </symbol>
        <symbol id="calendar3" viewBox="0 0 16 16">
          <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
          <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </symbol>
        <symbol id="chat-quote-fill" viewBox="0 0 16 16">
          <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM7.194 6.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 9.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 6c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z" />
        </symbol>
        <symbol id="cpu-fill" viewBox="0 0 16 16">
          <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
          <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z" />
        </symbol>
        <symbol id="gear-fill" viewBox="0 0 16 16">
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
        </symbol>
        <symbol id="speedometer" viewBox="0 0 16 16">
          <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
          <path
            fill-rule="evenodd"
            d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
          />
        </symbol>
        <symbol id="toggles2" viewBox="0 0 16 16">
          <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
          <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
          <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
        </symbol>
        <symbol id="tools" viewBox="0 0 16 16">
          <path d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" />
        </symbol>

        <symbol id="chevron-right" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </symbol>
        <symbol id="geo-fill" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
          />
        </symbol>
      </svg> */}

      <div
        id="sidebar_lg"
        ref={sidebarRef}
        className="sidebar left_sidebar d-flex flex-column flex-shrink-0 py-3 pe-3"
      >
        <button
          className="btn_sidebar_toggle res_sidebar_close"
          id="res_sidebar_close"
          onClick={SmallhandleToggleRemove}
        >
          <RiCloseLargeLine />
        </button>
        <NavLink
          to="/"
          className="d-flex align-items-center justify-content-center mb-3 mb-md-0 text-decoration-none a1-new"
        >
          <img
            src={logo}
            width="20"
            height="20"
            className="logo-brand"
            alt="logo"
          />
        </NavLink>
        <hr />
        <ul
          className="nav nav-pills flex-column mb-auto sidebar_list"
          ref={removeSmRef}
          id="remove_sm"
        >
          <h6 style={{padding:'0px 0px 0px 22px', fontSize:'12px', color:"lightgray", textTransform:'uppercase'}}>Streaming</h6>
          <li className="nav-item">
            <NavLink to="/dashboard" className="nav-link" activeClassName="active">
              {/* <svg className="bi" width="22" height="22">
                <use xlinkHref="#speedometer2" />
              </svg> */}
              <MdHome style={{width:'25px', height:'21px', marginLeft: '10px'}}/>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/storage"
              className="nav-link"
              activeClassName="active"
            >
              {/* <svg className="bi" width="20" height="20">
                <use xlinkHref="#storage-icon" />
              </svg> */}
              <BiSolidVideos style={{width:'25px', height:'21px', marginLeft: '10px'}}/>
              <span>Videos</span>
            </NavLink>
          </li>
          <li onClick={handleShowModal}>
            <NavLink
              to="/schdulestreams"
              className="nav-link"
              activeClassName="active" 
            >
              {/* <svg className="bi" width="22" height="22">
                <use xlinkHref="#home" />
              </svg> */}
              <CiStreamOn style={{width:'25px', height:'21px', marginLeft: '10px'}}/>
              <span>Create Stream</span>
            </NavLink>
          </li>
          <li onClick={handleShow}>
            <NavLink
              to="/createstream"
              className="nav-link"
              activeClassName="active"
            >
              {/* <svg className="bi" width="22" height="22">
                <use xlinkHref="#home" />
              </svg> */}
              <GrSchedulePlay style={{width:'25px', height:'21px', marginLeft: '10px'}}/>
              <span>Schedules</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/sreamschedule"
              className="nav-link"
              activeClassName="active"
            >
              <svg className="bi" width="20" height="20" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
              <span>Streams Scheduler</span>
            </NavLink>
          </li> */}
          <hr />
          <li>
            <NavLink
              to="/knowledgebase"
              className="nav-link"
              activeClassName="active"
            >
              {/* <svg className="bi" width="20" height="20">
                <use xlinkHref="#knowledge-base-icon" />
              </svg> */}
              <SiKnowledgebase style={{width:'25px', height:'21px', marginLeft: '10px'}}/>
              <span>Knowledge Base</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/setting"
              className="nav-link"
              activeClassName="active"
            >
              {/* <svg className="bi" width="20" height="20">
                <use xlinkHref="#setting" />
              </svg> */}
              <IoMdSettings style={{width:'25px', height:'21px', marginLeft: '10px'}}/>
              <span>Settings</span>
            </NavLink>
          </li>
          <hr />
          
          <h6 style={{padding:'0px 0px 0px 22px', fontSize:'12px', color:"lightgray", textTransform:'uppercase'}}>Subscription Plans</h6>
          {/* <li>
            <NavLink
              to="/newplan"
              className="nav-link"
              activeClassName="active"
            > */}
              {/* <svg className="bi" width="20" height="20">
                <use xlinkHref="#new-plan-icon" />
              </svg> */}
              {/* <MdOutlinePayments style={{width:'25px', height:'21px', marginLeft: '10px'}}/>
              <span>Buy a new plan</span>
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/subscription"
              className="nav-link"
              activeClassName="active"
            >
              {/* <svg className="bi" width="20" height="20">
                <use xlinkHref="#subscription-icon" />
              </svg> */}
              <MdSubscriptions  style={{width:'25px', height:'21px', marginLeft: '10px'}}/>
              <span>Subscription</span>
            </NavLink>
          </li>
          <hr />
          <li style={{ textAlign: "middle" }}>
            <NavLink
              to="/message"
              className="nav-link"
              activeClassName="active"
            >
              {/* <svg className="bi" width="20" height="20">
                <use xlinkHref="#message" />
              </svg> */}
              <LuMessagesSquare style={{width:'25px', height:'21px', marginLeft: '10px'}}/>
              <span>Unified Chat</span>
            </NavLink>
          </li>
          <li>
            <button
              className="btn_sidebar_toggle rotate"
              id="toggleButton"
              onClick={handleToggle}
            >
              <BsThreeDots />
            </button>
          </li>
        </ul>
      </div>

      <ModalSchedule show={showModal} onClose={handleCloseModal}/>
    </>
  );
}

export default UserSidebar;
