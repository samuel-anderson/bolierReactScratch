import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import barberReducer from "../features/barber/barberSlice";
import themeReducer from "../features/theme/themeSlice";

const rootReducer = combineReducers({
  user: userReducer,
  barber: barberReducer,
  theme: themeReducer,
});

export default rootReducer;
