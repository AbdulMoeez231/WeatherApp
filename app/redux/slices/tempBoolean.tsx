import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tempBoolean: true,
  status: "idle",
  error: null,
};

const tempBoolean: any = createSlice({
  name: "tempBoolean",
  initialState,
  reducers: {
    temperatureBoolean: (state, action) => {
      state.tempBoolean = !state.tempBoolean;
      console.log(state.tempBoolean);
    },
  },
});

export const { temperatureBoolean } = tempBoolean.actions;

export default tempBoolean.reducer;
