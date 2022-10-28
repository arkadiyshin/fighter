import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  strength: 0,
  dexterity: 0,
  intuition: 0,
  health: 0,
};


const skillsSlice = createSlice({
  name: "skillsSlice",
  initialState,

  reducers: {
      setStrangth: (state)=> {
      state.strength = state.strength + 1 
      },
      setDexterity: (state) => {
        state.dexterity = state.dexterity + 1
      }, 
      setIntuition: (state) => {
        state.intuition = state.intuition + 1
      },
      setHealth: (state) => {
        state.health = state.health+10
      },
  },
});

export const {setStrangth, setDexterity , setIntuition, setHealth} = skillsSlice.actions;

  


export default skillsSlice.reducer;