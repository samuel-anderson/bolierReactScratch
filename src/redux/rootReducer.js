import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import barberReducer from "../features/barber/barberSlice";

const rootReducer = combineReducers({
  user: userReducer,
  barber: barberReducer,
});

export default rootReducer;
