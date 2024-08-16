

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_VIDEOS } from "../utility/api";

const videosSlice = createSlice({
    name: "videos",
    initialState: {
        selectedVideo: null,
        videos: []
    },
    reducers: {
        setVideos: (state, action) => {
            state.videos = action.payload;
        },
        setSelectedVideo: (state, action) => {
            state.selectedVideo = action.payload;
        },
    },
});

export  const fetchVideosAction = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(USER_VIDEOS);
        let videos = response.data.videos;
        dispatch(videosActions.setVideos(videos));
    } catch (error) {}
  };
};

export const videosActions = videosSlice.actions;

export default videosSlice.reducer;