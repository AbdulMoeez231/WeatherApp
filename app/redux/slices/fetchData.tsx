import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface FetchDataPayload {
  latitude: number;
  longitude: number;
  APIkey: string;
}

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchWeatherData: any = createAsyncThunk(
  "data/fetchData",
  async ({ latitude, longitude, APIkey }: FetchDataPayload) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${APIkey}`
    );
    console.log(response);

    return response.data;
  }
);

const fetchingData: any = createSlice({
  name: "fetchData",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchWeatherData.pending, (state: any) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherData.fulfilled, (state: any, action: any) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state: any, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchingData.reducer;
