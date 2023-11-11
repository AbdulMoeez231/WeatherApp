import React from "react";
import { useSelector } from "react-redux";
import weatherIcons from "../WeatherIcons";
import getDayName from "../FormatDay/index";
import convertC from "../ConvertTempC";
import convertF from "../ConvertTempF";

const Weekly = () => {
  const dataa = useSelector((state: any) => state.fetchData.data);
  // console.log(dataa, "data in weekly");
  const tempBoolean = useSelector(
    (state: any) => state.tempBoolean.tempBoolean
  );

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
        {dataa.daily &&
          dataa.daily.map((e: any, i: any) => {
            console.log(e, "weekly");

            return (
              <>
                <div className="bg-[#19202D] flex flex-col justify-center items-center gap-2 py-3 rounded-lg">
                  <h1 className="text-white">{getDayName(e.dt)}</h1>
                  <div className="w-[60px] h-[60px] flex justify-center items-center my-1">
                    <img
                      src={weatherIcons[e.weather[0].icon]?.src}
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <p className="text-gray-500 text-sm">
                    {e.weather[0].description
                      .split(" ")
                      .map(
                        (word: any) =>
                          word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </p>
                  <div className="flex gap-2 text-sm">
                    <p className="text-white">
                      {`${Math.round(
                        tempBoolean
                          ? convertC(e.temp.day)
                          : convertF(e.temp.day)
                      )}°`}
                    </p>
                    <p className="text-gray-500">
                      {`${Math.round(
                        tempBoolean
                          ? convertC(e.temp.night)
                          : convertF(e.temp.night)
                      )}°`}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Weekly;
