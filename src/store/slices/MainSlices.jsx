import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homePageData: [],
};

const MainSlices = createSlice({
  name: "main",
  initialState,
  reducers: {
    setMain: (state, action) => {
      return { ...state, ...action.payload };
    },
    setHomePageData: (state, action) => {
      state.homePageData = action.payload;
    },
  },
});

export const { setMain, setHomePageData } = MainSlices.actions;
export default MainSlices.reducer;
