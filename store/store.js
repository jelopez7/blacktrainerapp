import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/rootReducer";

const store = configureStore({
  reducer,
});

export default store;
