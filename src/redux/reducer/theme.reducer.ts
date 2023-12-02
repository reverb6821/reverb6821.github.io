import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isThemeDark:
  localStorage.getItem("isThemeDark") != undefined
    ? JSON.parse(localStorage.getItem("isThemeDark") || '{}')
    : false,//light mode is the default
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.isThemeDark = !state.isThemeDark;
      localStorage.setItem("isThemeDark", state.isThemeDark);
    },
  },
});

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;