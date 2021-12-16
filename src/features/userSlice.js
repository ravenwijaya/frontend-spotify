import { createSlice } from "@reduxjs/toolkit";
import { setAccessToken } from "../utils/Token";
const initialState = {
  user: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      setAccessToken(action.payload.accessToken);
    },
  },
});

export const { login } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
