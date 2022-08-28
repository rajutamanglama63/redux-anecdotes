import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    clearNotification(state, action) {
      return action.payload;
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

export const notification = (msg, time) => {
  return async (dispatch) => {
    dispatch(setNotification(msg));
    setTimeout(() => {
      dispatch(clearNotification(null));
    }, time);
  };
};

export default notificationSlice.reducer;
