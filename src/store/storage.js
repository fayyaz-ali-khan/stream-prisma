import { createSlice } from "@reduxjs/toolkit";
import { STORAGE } from "../utility/api";
import axios from "axios";

const storageSlice = createSlice({
  name: "storage",
  initialState: { memory: {}, error: "" },
  reducers: {
    setStorage: (state, action) => {
      state.memory = action.payload;
      const parts = state.memory.remaining_storage.split(" ");
      const numberPart = parseFloat(parts[0]);
      const unitPart = parts[1];

      if (unitPart === "GB") {
        state.memory.remaining_storage = numberPart * 1024 * 1024;
      } else if (unitPart === "MB") {
        state.memory.remaining_storage = numberPart * 1024;
      } else {
        state.memory.remaining_storage = numberPart;
      }
      state.memory.unit = unitPart;
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
