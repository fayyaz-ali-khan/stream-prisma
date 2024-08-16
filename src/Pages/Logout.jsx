import { useNavigate, redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";
import { useEffect } from "react";
import { isAuth } from "../utility/auth";
import { LOGOUT } from "../utility/api";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const logout = async () => {
      if (isAuth()) {
        try {
          let response = await axios.post(LOGOUT);
          dispatch(userActions.logout());
          localStorage.removeItem("stram_prisma_access_token");
          redirect("/login");
        } catch (error) {
          navigate("/dashboard");
        }
      } else {
        navigate("/login");
      }
    };
    logout();
  });
  return <></>;
};

export default Logout;
