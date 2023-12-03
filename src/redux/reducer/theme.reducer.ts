import { createSlice } from "@reduxjs/toolkit";


const data = typeof window !== "undefined" && localStorage.getItem("isThemeDark")  ? 
  JSON.parse(localStorage.getItem("isThemeDark") || '{}') : false

const initialState = {
  isThemeDark: data
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