import { configureStore } from "@reduxjs/toolkit";
import fetchData from "../slices/fetchData";
import tempBoolean from "../slices/tempBoolean";

const store: any = configureStore({
  reducer: {
    fetchData: fetchData,
    tempBoolean: tempBoolean,
  },
});

export default store;
