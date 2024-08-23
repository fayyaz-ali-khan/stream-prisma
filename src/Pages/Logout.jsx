import { useNavigate, redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";
import { useEffect } from "react";
import { isAuth } from "../utility/auth";
import { LOGOUT } from "../utility/api";
import axios from "axios";
import { loadingActions } from "../store/loading";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const logout = async () => {
      dispatch(loadingActions.setLoading(true));
      if (isAuth()) {
        try {
          let response = await axios.post(LOGOUT);
          dispatch(userActions.logout());
          localStorage.removeItem("stram_prisma_access_token");
          navigate("/");
        } catch (error) {
          console.log(error);
          isAuth() && localStorage.removeItem("stram_prisma_access_token");
          navigate("/");
        } finally {
          dispatch(loadingActions.setLoading(false));
        }
      } else {
        dispatch(loadingActions.setLoading(false));
        navigate("/login");
      }
    };
    logout();
  });
  return <></>;
};

export default Logout;
