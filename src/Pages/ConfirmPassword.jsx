import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loadingActions } from "../store/loading";
import { RESET_PASSWORD } from "../utility/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ConfirmPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [cridentials, setCredentials] = useState({
    email: "",
    new_password: "",
    confirm_password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loadingActions.setLoading(true));
    try {
      let response = await axios.post(RESET_PASSWORD, cridentials);
      toast.success("Password change successfully");

      console.log(response);
      navigate("/login?forgot=true");
    } catch (error) {
      console.log(error);
      if (!error.response) {
        toast.error("Something went wrong");
      }
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      dispatch(loadingActions.setLoading(false));
    }
  };
  return (
    <>
      <ToastContainer />

      <section>
        <div className="container">
          <div
            className="row justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="col-lg-5">
              <form onSubmit={handleSubmit} className="card_gray p-4">
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control mb-0"
                      name="email"
                      id="email"
                      placeholder="name@example.com"
                      required
                      onChange={(e) => {
                        setCredentials({
                          ...cridentials,
                          email: e.target.value,
                        });
                      }}
                    />
                    {errors.email && (
                      <p className="text-danger">{errors.email}</p>
                    )}
                  </div>
                  <div className="col-12">
                    <label htmlFor="password" className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control mb-0"
                      name="password"
                      id="password"
                      placeholder="*******"
                      required
                      onChange={(e) => {
                        setCredentials({
                          ...cridentials,
                          new_password: e.target.value,
                        });
                      }}
                    />
                    {errors.new_password && (
                      <p className="text-danger">{errors.new_password}</p>
                    )}
                  </div>
                  <div className="col-12">
                    <label htmlFor="password" className="form-label">
                      Confirm Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control mb-0"
                      name="password"
                      id="password"
                      placeholder="*******"
                      required
                      onChange={(e) => {
                        setCredentials({
                          ...cridentials,
                          confirm_password: e.target.value,
                        });
                      }}
                    />
                    {errors.confirm_password && (
                      <p className="text-danger">{errors.confirm_password}</p>
                    )}
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button className="btn bsb-btn-xl btn-new2" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConfirmPassword;
