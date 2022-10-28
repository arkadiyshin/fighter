import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  username: "",
  avatar_url: "",
  strength: 0,
  dexterity: 0,
  intuition: 0,
  health: 0,
  free_points: 0,
  experience: 0,
  level: 0,
};

const skillsSlice = createSlice({
  name: "skillsSlice",
  initialState,

  reducers: {
    setStrangth: (state) => {
      state.strength = state.strength + 1;
      state.free_points = state.free_points - 1;
    },
    setDexterity: (state) => {
      state.dexterity = state.dexterity + 1;
      state.free_points = state.free_points - 1;
    },
    setIntuition: (state) => {
      state.intuition = state.intuition + 1;
      state.free_points = state.free_points - 1;
    },
    setHealth: (state) => {
      state.health = state.health + 10;
      state.free_points = state.free_points - 1;
    },

    setSkills: (state, action) => {
      state.strength = action.payload.strength;
      state.dexterity = action.payload.dexterity;
      state.intuition = action.payload.intuition;
      state.health = action.payload.health * 10;
      state.free_points = action.payload.free_points;
    },
    setLevel: (state, action) => {
      state.free_points = action.payload.free_points;
      state.level = action.payload.level;
      state.experience = action.payload.experience;
    },
    setProfile: (state, action) => {
      state.avatar_url = action.payload.avatar_url;
    },
    initialize: (state, action) => {
      state.strength = action.payload.strength;
      state.dexterity = action.payload.dexterity;
      state.intuition = action.payload.intuition;
      state.health = action.payload.health * 10;
      state.free_points = action.payload.free_points;
      state.id = action.payload.id;
      state.level = action.payload.level;
      state.experience = action.payload.experience;
      state.avatar_url = action.payload.avatar_url;
    },
  },
});

export const {
  setStrangth,
  setDexterity,
  setIntuition,
  setHealth,
  setSkills,
  initialize,
} = skillsSlice.actions;

export default skillsSlice.reducer;
