import { configureStore, combineReducers } from "@reduxjs/toolkit";
import skillsSlice from "./skillsSlice";
import tilesSlice from "./tilesSlice";

const rootReducer = combineReducers({
  skillsSlice,
  tilesSlice,
});

export const store = configureStore({
  reducer: rootReducer  
});

