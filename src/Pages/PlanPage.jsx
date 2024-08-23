import React, { useEffect, useState, useCallback } from "react";
import UserSidebar from "../Components/UserSidebar";
import UserNavbar from "../Components/UserNavbar";
import { TiTick } from "react-icons/ti";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  PLAN_DETAILS,
  STRIPE_PAYMENT,
  RAZORPAY_PAYMENT,
  RAZORPAY_PAYMENT_SUCCESS,
} from "../utility/api";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import useRazorpay from "react-razorpay";

import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

function PlanPage({
  mainContentRef,
  sidebarRef,
  handleToggle,
  removeSmRef,
  SmallhandleToggle,
  SmallhandleToggleRemove,
}) {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [activeTab, setActiveTab] = useState("stripe");
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState({});
  const [Razorpay] = useRazorpay();
  const user = useSelector((state) => state.user.user);

  console.log(user);
  const params = useParams();
  // Mock data
  const planP = {
    name: "Basic Plan",
    price: 20,
    discountprice: 15,
    total_storage: 50,
  };

  const userData = {
    first_name: "John",
    email: "john.doe@example.com",
  };

  const handleRazporayPayment = useCallback(async () => {
    setLoading(true);
    // const order = await createOrder(params);
    let data = {
      product: plan.name,
      price: plan.price,
      packageId: params.id,
    };
    let order = await axios.post(RAZORPAY_PAYMENT, data);
    console.log(order.data);
    const options = {
      key: order.data.razor_client_id,
      amount: order.data.amount,
      currency: "INR",
      name: order.data.data.name,
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.data.data.id,
      handler: async (res) => {
        if (
          res.status_code == 200 &&
          res.razorpay_payment_id &&
          res.razorpay_signature
        ) {
          try {
            let response = await axios.get(
              `${RAZORPAY_PAYMENT_SUCCESS}?razorpay_payment_id=${res.razorpay_payment_id}&razorpay_signature=${res.razorpay_signature}&package_id=${params.id}`
            );
            if (response.data.success) {
              toast.success(response.data.message);
            } else {
              toast.error(response.data.message);
            }
            console.log(response.data.success);
          } catch (error) {
            console.log(error);
            toast.error("Payment Failed");
          } finally {
            setLoading(false);
          }
        } else {
          toast.error("Payment Failed");
        }
      },
      prefill: {
        name: order.data.data.name,
        email: order.data.data.email,
        contact: order.data.data.contact,
      },

      theme: {
        color: "#AA0062",
      },
    };

    const rzpay = new Razorpay(options);

    rzpay.open();

    setLoading(false);
  }, [Razorpay, plan]);

  const handleStripePayment = async () => {
    setLoading(true);
    let data = {
      product: plan.name,
      price: plan.discountprice,
      package_id: params.id,
    };
    try {
      let response = await axios.post(STRIPE_PAYMENT, data);
      const stripe = await loadStripe(response.data.stripe_client_id);
      stripe.redirectToCheckout({
        sessionId: response.data.session_url,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    const fetchPlanDetails = async () => {
      try {
        const response = await axios.get(`${PLAN_DETAILS}${params.id}`);
        if (response.data.status === "success") {
          setPlan(response.data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanDetails();
  }, [params.id]);

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
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
          <section className="Plan">
            <div
              className="container px-lg-4 plan-details"
              style={{ marginBottom: "20px" }}
            >
              {successMessage && (
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  {successMessage}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              )}
              {errorMessage && (
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  {errorMessage}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <div className="row cards_sec mt-lg-2">
                <div className="col-lg-7 col-md-8 col-sm-12 col_space">
                  <div
                    className="card card_design p-3"
                    style={{ height: "auto" }}
                  >
                    <div className="card_header d-flex justify-content-between align-items-center">
                      <h5 className="plan-title mb-0">{plan.name}</h5>
                      <span className="plan-price">
                        {plan.discountprice > 0 &&
                        plan.discountprice !== plan.price ? (
                          <>
                            <s>${plan.price}</s> ${plan.discountprice}
                          </>
                        ) : (
                          `$${plan.price} `
                        )}
                        <small className="text-muted"> /per month</small>
                      </span>
                    </div>
                    <div className="card-body">
                      <ul className="list-unstyled">
                        <li className="d-flex gap-3">
                          <p>
                            <TiTick />
                          </p>{" "}
                          <span>Packages</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-12 p-0">
                  <div className="container">
                    <div
                      className="card card_design p-0"
                      style={{ height: "auto" }}
                    >
                      <div className="card-body card-body1">
                        <strong className="card-title">Order details</strong>
                        <div className="mt-2 d-flex justify-content-between">
                          <h6 className="m-0">First Name:</h6>
                          <p className="m-0">
                            {user.first_name + " " + user.last_name}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <h6 className="m-0">Email:</h6>
                          <p className="m-0">{user.email}</p>
                        </div>
                        <hr />
                        <h6>Product information</h6>
                        <div className="d-flex justify-content-between">
                          <p className="m-0">
                            <strong>{plan.name}</strong>
                          </p>
                          <span className="badge d-flex align-items-center text-light">
                            {plan.discountprice > 0 &&
                            plan.discountprice !== plan.price
                              ? `$${plan.discountprice} per Month`
                              : `$${plan.price} per Month`}
                          </span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <h6>Total:</h6>
                          <p className="m-0">
                            {plan.discountprice > 0 &&
                            plan.discountprice !== plan.price
                              ? `$${plan.discountprice}`
                              : `$${plan.price}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container mt-3">
                    <div
                      className="card card_design p-0"
                      style={{ height: "auto", overflow: "hidden" }}
                    >
                      <div className="card-body">
                        <ul
                          className="nav nav-tabs nav-fill mb-3 gap-2"
                          id="ex1"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <a
                              className={`nav-link ${
                                activeTab === "stripe" ? "active" : ""
                              }`}
                              href="#"
                              onClick={() => handleTabClick("stripe")}
                              role="tab"
                            >
                              Stripe
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className={`nav-link ${
                                activeTab === "razorpay" ? "active" : ""
                              }`}
                              href="#"
                              onClick={() => handleTabClick("razorpay")}
                              role="tab"
                            >
                              Razorpay
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className={`nav-link ${
                                activeTab === "paypal" ? "active" : ""
                              }`}
                              href="#"
                              onClick={() => handleTabClick("paypal")}
                              role="tab"
                            >
                              Paypal
                            </a>
                          </li>
                        </ul>

                        <div className="tab-content" id="ex2-content">
                          {activeTab === "stripe" && (
                            <div
                              className="tab-pane fade show active"
                              id="ex2-tabs-1"
                              role="tabpanel"
                            >
                              <a
                                onClick={handleStripePayment} // Update this link with your Stripe checkout URL
                                className="btn btn-new2 my-4 w-100"
                              >
                                Pay with Stripe
                              </a>
                              <div className="d-flex align-items-center justify-content-between mt-2">
                                <ul className="bg-dark p-2 d-flex">
                                  <li className="list-group-item p-1">
                                    <img
                                      className="imgg"
                                      src="https://my.gyre.pro/assets/images/icons/visa.svg"
                                      alt="visa"
                                      title="visa"
                                    />
                                  </li>
                                  <li className="list-group-item p-1">
                                    <img
                                      className="imgg"
                                      src="https://my.gyre.pro/assets/images/icons/mastercard.svg"
                                      alt="mastercard"
                                      width="25"
                                      title="mastercard"
                                    />
                                  </li>
                                  <li className="list-group-item p-1">
                                    <img
                                      className="imgg"
                                      src="https://my.gyre.pro/assets/images/icons/maestro.svg"
                                      alt="maestro"
                                      width="25"
                                      title="maestro"
                                    />
                                  </li>
                                </ul>
                                <div>
                                  <a
                                    href="https://stripe.com"
                                    target="_blank"
                                    className="d-flex"
                                  >
                                    <i className="fas fa-shield-halved font-19 text-info"></i>
                                    <i className="d-block text-info">
                                      Powered By <b>stripe</b>
                                    </i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          )}
                          {activeTab === "razorpay" && (
                            <div
                              className="tab-pane fade show active"
                              id="ex2-tabs-2"
                              role="tabpanel"
                            >
                              <button
                                onClick={handleRazporayPayment}
                                id="razorpay-button" // Add Razorpay integration here
                                className="btn btn-new2 my-4 w-100"
                              >
                                Pay with Razorpay
                              </button>
                              <div className="d-flex align-items-center justify-content-between mt-2">
                                <ul className="bg-dark p-2 d-flex">
                                  <li className="list-group-item p-1">
                                    <img
                                      className="imgg"
                                      src="https://my.gyre.pro/assets/images/icons/visa.svg"
                                      alt="visa"
                                      width="25"
                                      title="visa"
                                    />
                                  </li>
                                  <li className="list-group-item p-1">
                                    <img
                                      className="imgg"
                                      src="https://my.gyre.pro/assets/images/icons/mastercard.svg"
                                      alt="mastercard"
                                      width="25"
                                      title="mastercard"
                                    />
                                  </li>
                                  <li className="list-group-item p-1">
                                    <img
                                      className="imgg"
                                      src="https://my.gyre.pro/assets/images/icons/maestro.svg"
                                      alt="maestro"
                                      width="25"
                                      title="maestro"
                                    />
                                  </li>
                                </ul>
                                <a
                                  href="https://paypal.com"
                                  target="_blank"
                                  className="d-flex"
                                >
                                  <i className="fas fa-shield-halved font-19 text-info"></i>
                                  <i className="d-block text-info">
                                    Powered By <b>paypal</b>
                                  </i>
                                </a>
                              </div>
                            </div>
                          )}
                          {activeTab === "paypal" && (
                            <div
                              className="tab-pane fade show active"
                              id="ex2-tabs-3"
                              role="tabpanel"
                            >
                              <a
                                href={`#`} // Update this link with your PayPal payment URL
                                className="btn btn-new2 my-4 w-100"
                              >
                                Pay with PayPal
                              </a>
                              <div className="d-flex align-items-center justify-content-between mt-2">
                                <ul className="bg-dark p-2 d-flex">
                                  <li className="list-group-item p-1">
                                    <img
                                      className="imgg"
                                      src="https://my.gyre.pro/assets/images/icons/visa.svg"
                                      alt="visa"
                                      width="25"
                                      title="visa"
                                    />
                                  </li>
                                  <li className="list-group-item p-1">
                                    <img
                                      className="imgg"
                                      src="https://my.gyre.pro/assets/images/icons/mastercard.svg"
                                      alt="mastercard"
                                      width="25"
                                      title="mastercard"
                                    />
                                  </li>
                                  <li className="list-group-item p-1">
                                    <img
                                      className="imgg"
                                      src="https://my.gyre.pro/assets/images/icons/maestro.svg"
                                      alt="maestro"
                                      width="25"
                                      title="maestro"
                                    />
                                  </li>
                                </ul>
                                <a
                                  href="https://paypal.com"
                                  target="_blank"
                                  className="d-flex"
                                >
                                  <i className="fas fa-shield-halved font-19 text-info"></i>
                                  <i className="d-block text-info">
                                    Powered By <b>paypal</b>
                                  </i>
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
export const loader = ({ params }) => {
  console.log("pppppppppppp", params);
  return null;
};

export default PlanPage;
