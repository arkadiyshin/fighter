import { configureStore, combineReducers } from "@reduxjs/toolkit";
import skillsSlice from "./skillsSlice";
import tilesSlice from "./tilesSlice";
import fighterSlice from "./fighterSlice";

const rootReducer = combineReducers({
  skillsSlice,
  tilesSlice,
  fighterSlice,
});

export const store = configureStore({
  reducer: rootReducer  
});

