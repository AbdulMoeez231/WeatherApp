"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./redux/slices/fetchData";
import { FaMagnifyingGlass } from "react-icons/fa6";
import CurrentWeather from "./components/CurrentWeather";
import Hourly from "./components/Hourly";
import Highlights from "./components/Highlights";
import Weekly from "./components/Weekly";
import { temperatureBoolean } from "./redux/slices/tempBoolean";

const Home = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [city, setCity] = useState("lahore");
  const APIkey = "f65e32faa80c40a876bd4112cd36e525";
  const [inpVal, setInpVal] = useState("");
  const [inpBoolean, setInpBoolean] = useState(false);
  // console.log(inpVal);
  const tempBoolean = useSelector(
    (state: any) => state.tempBoolean.tempBoolean
  );
  const dispatch = useDispatch();

  // const dataa = useSelector((state: any) => state.fetchData.data);
  // console.log(dataa);

  const fetchGeoLocation = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
      );
      if (res.status === 200) {
        setLongitude(res.data.coord.lon);
        setLatitude(res.data.coord.lat);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGeoLocation();
  }, [city]);

  useEffect(() => {
    if (latitude !== "" && longitude !== "") {
      dispatch(fetchWeatherData({ latitude, longitude, APIkey }));
    }
  }, [latitude, longitude]);

  const handlingSubmit = (e: any) => {
    e.preventDefault();
    if (!inpVal) {
      setInpBoolean(true);
    } else {
      setInpBoolean(false);
      setCity(inpVal);
      setInpVal("");
    }
  };

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 lg:col-span-3 h-auto static md:h-[110vh] md:sticky top-0 left-0 bg-[#19202D] px-3 lg:px-7 py-10 lg:py-12">
          <form onSubmit={(e) => handlingSubmit(e)}>
            <div className="w-full flex flex-row-reverse justify-center px-2 py-2 rounded-md bg-[#232B39]">
              <input
                type="text"
                onChange={(e) => setInpVal(e.target.value)}
                value={inpVal}
                placeholder="Search For Places..."
                className="border-none outline-none px-6 md:px-2 bg-transparent text-gray-400 text-sm"
              />
              <button type="submit" className="text-gray-400">
                <FaMagnifyingGlass />
              </button>
            </div>
            <div>
              {inpBoolean ? (
                <h1 className="text-red-500 mt-5">
                  Please enter a valid city name
                </h1>
              ) : (
                <h1></h1>
              )}
            </div>
            <div>
              <CurrentWeather />
            </div>
          </form>
        </div>
        <div className="bg-[#232B39] col-span-12 md:col-span-8 lg:col-span-9 px-3 lg:px-14 py-7 lg:py-12">
          <div className="flex flex-col gap-6">
            <div>
              <div className=" flex justify-between">
                <h1 className="text-white font-bold text-xl">Today</h1>
                <button
                  className="text-xl text-white bg-[#000] w-[40px] h-[40px] rounded-full flex justify-center items-center"
                  onClick={() => dispatch(temperatureBoolean())}
                >
                  {tempBoolean ? "°C" : "°F"}
                </button>
              </div>
              <Hourly />
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">
                Today's Highlight
              </h1>
              <Highlights />
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">This Week</h1>
              <Weekly />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
