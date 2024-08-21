import { createSlice } from "@reduxjs/toolkit";
import { STORAGE } from "../utility/api";
import axios from "axios";

const storageSlice = createSlice({
  name: "storage",
  initialState: { memory: {}, error: "" },
  reducers: {
    setStorage: (state, action) => {
      state.memory = action.payload;
      state.error = "";
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const storageAction = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(STORAGE);
      dispatch(storageActions.setStorage(response.data));
    } catch (error) {
      if (error.response && error.response.status === 404) {
        dispatch(
          storageActions.setError(
            error.response.data.error || "Something went wrong"
          )
        );
      } else {
        dispatch(storageActions.setError("Something went wrong"));
      }
    }
  };
};

export const storageActions = storageSlice.actions;

export default storageSlice.reducer;
