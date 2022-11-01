import { createSlice } from "@reduxjs/toolkit";

const initialState = {    
        x: 13,
        y: 19,          
};

const fighterSlice = createSlice({
  name: "fighterSlice",
  initialState,

  reducers: {
    moveUp: (state) => {
      state.y = state.y - 1;
      console.log(state);
    },
    moveRight: (state) => {
        state.x = state.x + 1;
      },
    moveDown: (state) => {
        state.y = state.y + 1;
    },
    moveLeft: (state) => {
        state.x = state.x - 1;
      },
  },
});

export const {moveDown,moveLeft,moveRight,moveUp} = fighterSlice.actions;

export default fighterSlice.reducer;