import React, { useEffect, useRef, useState } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { LOGIN } from "../utility/api";
import logo from "../assets/images/logoNewDark.png";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";
import { FORGOT } from "../utility/api";
import { VERIFY_OTP } from "../utility/api";
import { loadingActions } from "../store/loading";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    remember_me: false,
  });
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState("");
  const [show, setShow] = useState(false);

  const [searchParams] = useSearchParams();
  let forgot = searchParams.get("forgot");
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setLoading("");
    if (!show) {
      setShow(true);
    }
  };

  const [showSecond, setShowSecond] = useState(false);

  const handleCloseSecond = () => setShowSecond(false);
  const handleShowSecond = () => setShowSecond(true);

  const inputRefs = useRef([]);

  const otp_text = ["", "", "", "", "", ""];

  const handleChange = (e, index) => {
    const { value } = e.target;
    let data = otp;
    data[index] = value;
    setOtp(data);
    if (!/^\d*$/.test(value)) {
      return; // Allow only digits
    }
    otp_text[index] = value;
    // Move to next input if value is entered
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Move to previous input if value is deleted and index > 0
    if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleForgot = async (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(loadingActions.setLoading(true));

    try {
      let response = await axios.post(FORGOT, { email: credentials.email });
      handleShow();
      console.log(response);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setErrors({ forgot: error.response.data.message });
        } else {
          setErrors({ forgot: "Something went wrong" });
        }
      } else {
        setErrors({ forgot: "Something went wrong" });
      }
    } finally {
      dispatch(loadingActions.setLoading(false));
    }
  };

  const handleVerify = async (e) => {
    setErrors([]);
    dispatch(loadingActions.setLoading(true));
    try {
      let data = {
        email: credentials.email,
        otp: otp.join(""),
      };
      let response = await axios.post(VERIFY_OTP, data);
      navigate("/confirmpassword");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          setErrors({ otp: error.response.data.message });
        } else if (error.response.status === 400) {
          setErrors({ otp: error.response.data.message });
        } else {
          setErrors({ otp: "Something went wrong" });
        }
      } else {
        setErrors({ otp: "Something went wrong" });
      }
    } finally {
      dispatch(loadingActions.setLoading(false));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loadingActions.setLoading(true));
    try {
      setErrors([]);
      let response = await axios.post(LOGIN, credentials);
      
      dispatch(userActions.login(response.data.user));
      localStorage.setItem(
        "stram_prisma_access_token",
        JSON.stringify(response.data.access_token)
      );
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + response.data.access_token;
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
        } else {
          setErrors({ error: error.response.data.message });
        }
      } else {
        setErrors({ error: "Something went wrong" });
      }
    } finally {
      dispatch(loadingActions.setLoading(false));
    }
  };
  useEffect(() => {
    forgot && toast.success("Password successfully changed.");
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
      <section className="p-3 p-md-4 p-xl-5 form_design">
        <div className="container">
          <div className="card border-light-subtle shadow-sm">
            <div className="row g-0">
              <div
                className="col-12 col-md-6 "
                style={{ background: "#fe95af" }}
              >
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="col-10 col-xl-8 py-3">
                    <img
                      className="img-fluid rounded mb-4"
                      loading="lazy"
                      src={logo}
                      width="200"
                      height="80"
                      alt="BootstrapBrain Logo"
                    />
                    <hr className="border-primary-subtle mb-4" />
                    <h2 className="h1 mb-4">
                      We make digital products that drive you to stand out.
                    </h2>
                    <p className="lead m-0">
                      We write words, take photos, make videos, and interact
                      with artificial intelligence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h3>Log in</h3>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3 gy-md-4 overflow-hidden">
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          required
                          onChange={(e) =>
                            setCredentials({
                              ...credentials,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="password" className="form-label">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          placeholder="*******"
                          required
                          onChange={(e) =>
                            setCredentials({
                              ...credentials,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={credentials.remember_me}
                            name="remember_me"
                            id="remember_me"
                            onChange={(e) =>
                              setCredentials({
                                ...credentials,
                                remember_me: e.target.checked,
                              })
                            }
                          />
                          <label
                            className="form-check-label text-secondary"
                            htmlFor="remember_me"
                          >
                            Keep me logged in
                          </label>
                        </div>
                        {errors.error && (
                          <small className="text-danger mt-3">
                            {errors.error}
                          </small>
                        )}
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            className="btn bsb-btn-xl btn-new2"
                            type="submit"
                          >
                            Log in now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12">
                      <hr className="mt-5 mb-4 border-secondary-subtle" />
                      <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                        <Link
                          to={"/register"}
                          className="link-secondary text-decoration-none"
                        >
                          Create new account
                        </Link>

                        <Link
                          className="link-secondary text-decoration-none"
                          onClick={handleForgot}
                        >
                          {errors.forgot ? (
                            <small className="text-danger">
                              {errors.forgot + " try again"}
                            </small>
                          ) : (
                            "Forgot password"
                          )}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="mt-5 mb-4">Or sign in with</p>
                      <div className="d-flex gap-3 flex-column flex-xl-row">
                        <Link to={"/"} className="btn bsb-btn-xl btn-new2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-google"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                          </svg>
                          <span className="ms-2 fs-6">Google</span>
                        </Link>
                        <Link to={"/"} className="btn bsb-btn-xl btn-new2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-facebook"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                          <span className="ms-2 fs-6">Facebook</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="bg-white p-5 rounded-3 shadow-sm border">
          <div>
            <p
              className="text-center text-change"
              style={{ fontSize: "5.5rem" }}
            >
              <MdEmail />
            </p>
            <p className="text-center h5">Please check your email</p>
            <p className="text-muted text-center">
              We've sent a code to {credentials.email}
            </p>
            <Row className="pt-4 pb-2">
              {Array.from({ length: 6 }, (_, index) => (
                <Col xs={2} key={index}>
                  <Form.Control
                    className="otp-letter-input"
                    type="text"
                    maxLength={1} // Allow only one character
                    onChange={(e) => handleChange(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                  />
                </Col>
              ))}
            </Row>
            <p className="text-muted text-center">
              Didn't get the code?{" "}
              <Link onClick={handleForgot} className="text-change">
                Click to resend
              </Link>
            </p>
            {errors.otp && (
              <p
                className="text-danger text-center text-bold"
                style={{ margin: "0" }}
              >
                {errors.otp}
              </p>
            )}
            <Row className="pt-5">
              <Col xs={6}>
                <Button
                  variant="outline-secondary"
                  className="w-100 btn-new2"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Col>
              <Col xs={6}>
                {/* <Link to={"/confirmpassword"}> */}
                <Button
                  onClick={handleVerify}
                  variant="success"
                  className="w-100 btn-new2"
                >
                  Verify
                </Button>
                {/* </Link> */}
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
