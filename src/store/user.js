import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { PROFILE_DATA, UPDATE_PROFILE_API } from "../utility/api";

const initialState = {
  user: null,
  loading: false,
  error: null,
  updateSuccess: false,
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    setUpdateSuccess: (state) => {
      state.loading = false;
      state.error = null;
      state.updateSuccess = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});


export const { userActions, setUpdateSuccess, setLoading, setUser, setError, logout } =
  userSlice.actions;

  // user
export const fetchUserAction = () => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const token = localStorage.getItem("stram_prisma_access_token");
      if (token) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + JSON.parse(token);
        const response = await axios.get(PROFILE_DATA);

        const userProfile = response.data.user;
        // console.log(userProfile);
        dispatch(setUser(userProfile));
      }
    } catch (error) {
      console.error("Failed to load user profile:", error);
      dispatch(setError("Failed to load user profile"));
    }
  };
};

// updateprofile
export const updateUserProfileAction = (updatedProfileData) => {


      const token = localStorage.getItem('stram_prisma_access_token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(token);
        const response = await axios.put(UPDATE_PROFILE_API, updatedProfileData);
        const updatedUser = response.data;
        dispatch(setUser(updatedUser));
        dispatch(setUpdateSuccess());
      } else {
        dispatch(setError('No token found'));
      }
    } catch (error) {
      console.error('Failed to update user profile:', error);
      dispatch(setError('Failed to update user profile'));
    }
  };
};

export const selectUser = (state) => state.user.user;
export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;
export const selectUpdateSuccess = (state) => state.user.updateSuccess;


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
