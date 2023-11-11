import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import weatherIcons from "../WeatherIcons";
import { HiLocationMarker } from "react-icons/hi";
import formatTime from "../FormatTime";
import getDayName from "../FormatDay";
import convertC from "../ConvertTempC";
import convertF from "../ConvertTempF";

const CurrentWeather = () => {
  const dataa = useSelector((state: any) => state.fetchData.data);
  const tempBoolean = useSelector(
    (state: any) => state.tempBoolean.tempBoolean
  );
  // console.log(tempBoolean, "tempBoolean");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false when dataa is available
    if (dataa) {
      setLoading(false);
    }
  }, [dataa]);
  return (
    <>
      {loading ? (
        <p className="text-white text-3xl mt-4">Loading...</p>
      ) : (
        <div>
          {dataa &&
            [dataa].map((e: any, i: any) => {
              // console.log(e.current?.weather[0].icon, "e");
              return (
                <>
                  <div className="text-white flex flex-col gap-3 justify-center items-center md:items-start">
                    <div className="w-[230px] lg:w-[220px] xl:w-[260px] my-5">
                      <img
                        src={weatherIcons[e.current?.weather[0].icon]?.src}
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-2 border border-gray-500 border-r-0 border-t-0 border-l-0 pb-5 w-full">
                      <h1 className="text-5xl">
                        {`${Math.round(
                          tempBoolean
                            ? convertC(e.current?.temp)
                            : convertF(e.current?.temp)
                        )}`}
                        {tempBoolean ? "°C" : "°F"}
                      </h1>
                      <h2 className="text-sm text-gray-500">
                        Feels Like &nbsp;
                       
                        {`${Math.round(
                          tempBoolean
                            ? convertC(e.current?.temp)
                            : convertF(e.current?.temp)
                        )}`}
                      </h2>
                      <p>
                        {e.current?.weather[0].description
                          .split(" ")
                          .map(
                            (word: any) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                      </p>
                    </div>
                    <div className=" text-white mt-3">
                      <div className="text-white text-xl flex gap-1">
                        <h1>{getDayName(e.current?.dt)},</h1>
                        <h1>{formatTime(e.current?.dt)}</h1>
                      </div>
                      <div className="text-sm flex gap-1 items-center mt-4">
                        <HiLocationMarker />
                        <h1>{e.timezone}</h1>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      )}
    </>
  );
};

export default CurrentWeather;
