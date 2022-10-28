import { configureStore, combineReducers } from "@reduxjs/toolkit";
import skillsSlice from "./skillsSlice";

const rootReducer = combineReducers({
  skillsSlice,
});

export const store = configureStore({
  reducer: rootReducer  
});

