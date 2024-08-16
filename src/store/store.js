import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import loadingSlice from "./loading";
import loading from "./loading";
import videosSlice from "./videos";
const store = configureStore({
  reducer: {
    user: userSlice,
    loading: loadingSlice,
    videos: videosSlice,
  },
});

export default store;
