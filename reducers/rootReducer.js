import { combineReducers } from "@reduxjs/toolkit";
import auth from "./authReducer";

const combine = combineReducers({
  auth,
});

export default combine;
