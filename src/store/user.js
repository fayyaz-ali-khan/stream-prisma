import { createSlice } from "@reduxjs/toolkit";

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

const fetchUserAction = () => {
  return async (dispatch) => {
    try {
      const request = await axios.get("api/profile");
      let response = await request.data;
      if (response.Status) {
        let user = response.userDetail;
        dispatch(userActions.login(user));
      }
    } catch (error) {}
  };
};

export const userActions = userSlice.actions;
export default userSlice.reducer;
