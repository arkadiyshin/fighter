import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tiles: [],
};

const tilesSlice = createSlice({
  name: "tilesSlice",
  initialState,

  reducers: {
    setTiles: (state, action) => {
      state.tiles = action.payload;
    },
  },
});

export const {
  setTiles,
} = tilesSlice.actions;

export default tilesSlice.reducer;
