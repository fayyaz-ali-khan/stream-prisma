import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";

import { REGISTER } from "./../utility/api";

import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logoNewDark.png";

const initialRegisterData = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState(initialRegisterData);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);
    try {
      setLoading(true);
      let response = await axios.post(REGISTER, register);
      dispatch(userActions.login(response.data.user));
      localStorage.setItem(
        "stram_prisma_access_token",
        JSON.stringify(response.data.access_token)
      );
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + response.data.access_token;
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (error.response) {
        if (error.response.status === 422) {
          let e = error.response.data.errors;
          setErrors(e);
        } else {
          setErrors({ message: "Something went wrong" });
        }
      } else {
        setErrors({ message: "Something went wrong" });
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="p-3 p-md-4 p-xl-5 form_design">
      <div className="container">
        <div className="card border-light-subtle shadow-sm">
          <div className="row g-0">
            <div className="col-12 col-md-6 " style={{ background: "#fe95af" }}>
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
                    We write words, take photos, make videos, and interact with
                    artificial intelligence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-5">
                      <h3>Sign in</h3>
                    </div>
                  </div>
                </div>
                <form>
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-12">
                      <label htmlFor="name" className="form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="First Name"
                        onChange={(e) => {
                          setRegister((state) => {
                            return { ...state, first_name: e.target.value };
                          });
                        }}
                        required
                      />
                      {errors.first_name && (
                        <small className="text-danger">
                          {errors.first_name}
                        </small>
                      )}
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="email"
                        placeholder="Last Name"
                        required
                        onChange={(e) => {
                          setRegister((state) => {
                            return { ...state, last_name: e.target.value };
                          });
                        }}
                      />
                      {errors.last_name && (
                        <small className="text-danger">
                          {errors.last_name}
                        </small>
                      )}
                    </div>
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
                        onChange={(e) => {
                          setRegister((state) => {
                            return { ...state, email: e.target.value };
                          });
                        }}
                      />
                      {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                      )}
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
                        onChange={(e) => {
                          setRegister((state) => {
                            return { ...state, password: e.target.value };
                          });
                        }}
                      />
                      {errors.password && (
                        <small className="text-danger">{errors.password}</small>
                      )}
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">
                        Confirm Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="*******"
                        required
                        onChange={(e) => {
                          setRegister((state) => {
                            return {
                              ...state,
                              password_confirmation: e.target.value,
                            };
                          });
                        }}
                      />
                      {errors.password_confirmation && (
                        <small className="text-danger">
                          {errors.password_confirmation}
                        </small>
                      )}
                      {errors.message && (
                        <small className="text-danger">{errors.message}</small>
                      )}
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        {loading ? (
                          <button class="btn bsb-btn-xl btn-new2">
                            <span class="spinner-border spinner-border-sm mt-1 me-2"></span>
                            Loading...
                          </button>
                        ) : (
                          <button
                            className="btn bsb-btn-xl btn-new2"
                            type="button"
                            onClick={handleSubmit}
                          >
                            Sign Up
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle" />
                    <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                      <p>Already have an account?</p>
                      <Link
                        to={"/login"}
                        className="link-secondary text-decoration-none"
                      >
                        Login
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
  );
}

export default Register;
