import React from "react";
import { useSelector } from "react-redux";
import clouds from "../../assets/clouds.png";
import humidity from "../../assets/humidity.png";
import UV from "../../assets/uv.png";
import wind from "../../assets/wind-night.png";
import pressure from "../../assets/pressure.png";
import sunrise from "../../assets/sunrise.png";
import sunset from "../../assets/sunset.png";
import Image from "next/image";
import formatTime from "../FormatTime";

const Highlights = () => {
  const dataa = useSelector((state: any) => state.fetchData.data);
  // console.log(dataa, "dataa in highlights");
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-7">
        {[dataa] &&
          [dataa].map((e: any, i: any) => {
            return (
              <>
                <div className="flex flex-col justify-center items-center bg-[#19202D] text-white rounded-xl font-primary p-2">
                  <p className="text-[13px]">Humidity</p>
                  <div className="w-[60px] h-[60px] flex justify-center items-center my-2">
                    <Image src={humidity} alt="" className="w-full" />
                  </div>
                  <h1 className="text-xl font-bold">{e.current?.humidity}%</h1>
                </div>
                <div className="flex flex-col justify-center items-center bg-[#19202D] text-white rounded-xl font-primary p-2">
                  <p className="text-[13px]">Wind Speed</p>
                  <div className="w-[60px] h-[60px] flex justify-center items-center my-2">
                    <Image src={wind} alt="" className="w-full" />
                  </div>
                  <h1 className="text-xl font-bold">
                    {e.current?.wind_speed}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 bg-[#19202D] text-white rounded-xl font-primary p-2">
                  <div className="flex gap-3 items-center">
                    <div className="w-[40px] h-[40px]">
                      <Image src={sunrise} alt="" className="w-full" />
                    </div>
                    <div>
                      <h1>{formatTime(e.current?.sunrise)}</h1>
                      <p className="text-gray-500 text-sm">Sunrise</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-[40px] h-[40px]">
                      <Image src={sunset} alt="" className="w-full" />
                    </div>
                    <div>
                      <h1>{formatTime(e.current?.sunset)}</h1>
                      <p className="text-gray-500 text-sm">Sunset</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center bg-[#19202D] text-white rounded-xl font-primary p-2">
                  <p className="text-[13px]">Clouds</p>
                  <div className="w-[60px] h-[60px] flex justify-center items-center my-2">
                    <Image src={clouds} alt="" className="w-full" />
                  </div>
                  <h1 className="text-xl font-bold">{e.current?.clouds}%</h1>
                </div>
                <div className="flex flex-col justify-center items-center bg-[#19202D] text-white rounded-xl font-primary p-2">
                  <p className="text-[13px]">UV Index</p>
                  <div className="w-[60px] h-[60px] flex justify-center items-center my-2">
                    <Image src={UV} alt="" className="w-full" />
                  </div>
                  <h1 className="text-xl font-bold">{e.current?.uvi}%</h1>
                </div>
                <div className="flex flex-col justify-center gap-3 items-center bg-[#19202D] text-white rounded-xl font-primary p-2">
                  <p className="text-[13px]">Pressure</p>
                  <div className="w-[50px] h-[50px] flex justify-center items-center my-2">
                    <Image src={pressure} alt="" className="w-full" />
                  </div>
                  <h1 className="text-xl font-bold">{e.current?.pressure}%</h1>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Highlights;
