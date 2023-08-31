import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toogleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toogleGPTSearchView } = gptSlice.actions;
export default gptSlice.reducer;
