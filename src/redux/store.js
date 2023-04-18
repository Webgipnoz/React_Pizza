import { configureStore } from "@reduxjs/toolkit";
import filterReduser from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    counter: filterReduser,
  },
});
