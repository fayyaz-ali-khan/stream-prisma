import React, { useEffect, useState } from "react";
import UserSidebar from "../Components/UserSidebar";
import UserNavbar from "../Components/UserNavbar";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { MdSubscriptions } from "react-icons/md";
import { RiChatDeleteLine } from "react-icons/ri";
// import axios from "axios";
// import { PROFILE_DATA } from "./../utility/api.js";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserAction,
  selectUser,
  selectLoading,
  selectError,
  updateUserProfileAction,
  selectUpdateSuccess,
} from "../store/user";
// import { selectUser } from "../store/user.js";

function Setting({
  mainContentRef,
  sidebarRef,
  handleToggle,
  removeSmRef,
  SmallhandleToggle,
  SmallhandleToggleRemove,
}) {
  //   accordian
  const [isOpen, setIsOpen] = useState(false);

  const handleToggled = () => {
    setIsOpen(!isOpen);
  };

  const [isOpenTwo, setIsOpenTwo] = useState(false);

  const handleToggledTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };

  // profile image
  const [avatar, setAvatar] = useState("https://via.placeholder.com/150");
  // const [dataprofile, setDataprofile] = useState({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    document.getElementById("fileInput").click();
  };

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUserAction());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No user profile data available.</div>;
  }

  // updateProfile
  const updateSuccess = useSelector(selectUpdateSuccess);

  const [firstName, setFirstName] = useState(user?.first_name || "");
  const [lastName, setLastName] = useState(user?.last_name || "");
  // const [email, setEmail] = useState(user?.email || "");

  const handleUpdateProfile = () => {
    const updatedProfileData = {
      first_name: firstName,
      last_name: lastName,
      // email: email,
    };
    dispatch(updateUserProfileAction(updatedProfileData));
  };

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
          className="main_content_section  p-lg-2"
        >
          <div className="container p-0">
            <UserNavbar
              SmallhandleToggle={SmallhandleToggle}
              SmallhandleToggleRemove={SmallhandleToggleRemove}
            />
          </div>

          {/* Middle Content */}
          <div class="settings_sections">
            <div class="container px-lg-4" style={{ marginBottom: "20px" }}>
            {loading && <p>Updating profile...</p>}
      {error && <p>Error: {error}</p>}
      {updateSuccess && <p>Profile updated successfully!</p>}
              <div class="row cards_sec mt-lg-2">
                <div class="col-lg-12 col_space">
                  <div className="card card_design card_design_tabs p-lg-3 p-0">
                    <div className="container mt-3">
                      <div className="text-center mb-4">
                        <div className="profile-avatar">
                          <img
                            src={avatar}
                            alt="Avatar"
                            className="rounded-circle"
                          />
                          <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                          <div
                            className="camera-icon"
                            onClick={handleIconClick}
                          >
                            <FaCamera />
                          </div>
                        </div>
                        <h2 className="mt-2">
                          {user.first_name} {user.last_name}
                        </h2>
                        <p>{user.email}</p>
                      </div>
                      <div className="tags-input-container mt-5">
                        <button
                          onClick={handleToggled}
                          type="button"
                          className="w-100 h-100 d-flex justify-content-between align-items-center px-2"
                          style={{
                            background: "transparent",
                            border: "none",
                          }}
                        >
                          <div className="d-flex text-start align-items-center gap-3">
                            <p>
                              <CgProfile
                                style={{ fontSize: "32px", color: "#AA0062" }}
                              />
                            </p>
                            <div className="text-left">
                              <h6>My Profile</h6>
                              <p>
                                Update name, address, contact number, password,
                                and email here.
                              </p>
                            </div>
                          </div>
                          <p className="pt-2">
                            {isOpen ? (
                              <IoIosArrowDropup style={{ fontSize: "18px" }} />
                            ) : (
                              <IoIosArrowDropdown
                                style={{ fontSize: "18px" }}
                              />
                            )}
                          </p>
                        </button>
                        {isOpen && (
                          <div className="accordion-content p-lg-4 p-2 w-100">
                            <div className="card_gray mb-3">
                              <div className="row justify-content-between">
                                <div className="col-lg-6">
                                  <label htmlFor="">Email Address</label>
                                  <input type="text" placeholder={user.email} />
                                </div>
                                <div className="col-lg-3 justify-content-end align-items-center">
                                  <button className="btn btn-outline-success">
                                    Verified
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="card_gray mb-3">
                              <div className="row justify-content-between">
                                <div className="col-lg-6">
                                  <label htmlFor="">Current Password*</label>
                                  <input
                                    type="password"
                                    placeholder="********"
                                  />
                                </div>
                                <div className="col-lg-6">
                                  <label htmlFor="">New Password*</label>
                                  <input
                                    type="password"
                                    placeholder="********"
                                  />
                                </div>
                              </div>
                              <button className="btn btn-new2 mt-2">
                                Password Update
                              </button>
                            </div>

                            <div className="card_gray mb-3">
                              <div className="row justify-content-between">
                                <div>
                                  <h6>Name & Address</h6>
                                </div>
                                <div className="col-lg-4">
                                  <input
                                    type="text"
                                    placeholder="Enter Name"
                                    value={firstName}
                                    onChange={(e) =>
                                      setFirstName(e.target.value)
                                    }
                                    className="mb-2"
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <input
                                    type="text"
                                    placeholder="Enter Name"
                                    value={lastName}
                                    onChange={(e) =>
                                      setLastName(e.target.value)
                                    }
                                    className="mb-2"
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <input
                                    type="text"
                                    placeholder="Enter Phone"
                                    className="mb-2"
                                    // value={firstName}
                                    // onChange={(e) =>
                                    //   setFirstName(e.target.value)
                                    // }
                                  />
                                </div>
                                <div className="col-lg-12">
                                  <input
                                    type="text"
                                    placeholder="Enter Address"
                                    className="mb-2"
                                    // value={firstName}
                                    // onChange={(e) =>
                                    //   setFirstName(e.target.value)
                                    // }
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <input
                                    type="text"
                                    placeholder="Enter City"
                                    className="mb-2"
                                    // value={firstName}
                                    // onChange={(e) =>
                                    //   setFirstName(e.target.value)
                                    // }
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <input
                                    type="text"
                                    placeholder="Enter State"
                                    className="mb-2"
                                    // value={firstName}
                                    // onChange={(e) =>
                                    //   setFirstName(e.target.value)
                                    // }
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <select
                                    name=""
                                    id=""
                                    placeholder="country"
                                    className="mb-2"
                                  >
                                    <option value="">Country</option>
                                  </select>
                                </div>
                              </div>
                              <button onClick={handleUpdateProfile} className="btn btn-new2 mt-2">
                                Confirm
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="tags-input-container mt-3">
                        <button
                          onClick={handleToggledTwo}
                          type="button"
                          className="w-100 h-100 d-flex justify-content-between align-items-center px-2"
                          style={{
                            background: "transparent",
                            border: "none",
                          }}
                        >
                          <div className="d-flex text-start align-items-center gap-3">
                            <p>
                              <MdSubscriptions
                                style={{ fontSize: "32px", color: "#AA0062" }}
                              />
                            </p>
                            <div className="text-left">
                              <h6>Billing & Subscription</h6>
                              <p>
                                Access billing history, download invoices,
                                change your payment method, update your billing
                                information and details.
                              </p>
                            </div>
                          </div>
                          <p className="pt-2">
                            {isOpenTwo ? (
                              <IoIosArrowDropup style={{ fontSize: "18px" }} />
                            ) : (
                              <IoIosArrowDropdown
                                style={{ fontSize: "18px" }}
                              />
                            )}
                          </p>
                        </button>
                        {isOpenTwo && (
                          <div className="accordion-content p-lg-4 p-2 w-100">
                            <div className="card_gray my-3">
                              <Link to={"/subscription"}>
                                <button className="btn btn-new2">
                                  Change Subscription
                                </button>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="card_gray my-3">
                        <div className="d-flex text-start align-items-center gap-3">
                          <p>
                            <RiChatDeleteLine
                              style={{ fontSize: "32px", color: "#AA0062" }}
                            />
                          </p>
                          <div className="text-left">
                            <h6>Delete StreamPrisma Account</h6>
                            <p>
                              Removing this account will delete all your user
                              information, history and scheduling details from
                              OneStream servers within 30 days.
                            </p>
                            <span>
                              This action is not reversible after 30 days!
                            </span>
                          </div>
                        </div>
                        <p className="pt-2">
                          <button className="btn btn-new2">
                            Delete Account
                          </button>
                        </p>
                      </div>
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

export default Setting;
