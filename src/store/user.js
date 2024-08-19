import { createSlice } from "@reduxjs/toolkit";
import { PROFILE_DATA } from "../utility/api";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: { user: "" },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const fetchUserAction = () => {
  return async (dispatch) => {
    try {
      const request = await axios.get(PROFILE_DATA);
      let response = request.data.user;
      dispatch(userActions.login(response));
    } catch (error) {
      console.log("Failed to load user profile:", error);
    }
  };
};
export const userActions = userSlice.actions;
export default userSlice.reducer;
