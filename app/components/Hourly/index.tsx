import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import weatherIcons from "../WeatherIcons";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";
import getDayName from "../FormatDay";
import formatTime from "../FormatTime";
import convertC from "../ConvertTempC";
import convertF from "../ConvertTempF";

const CustomNextArrow = ({ onClick }: any) => (
  <button
    className="custom-next-arrow absolute top-[40%] right-3 z-20 text-4xl font-thin text-gray-500 hover:text-white transition-all duration-300"
    onClick={onClick}
  >
    <LiaAngleRightSolid />
  </button>
);

const CustomPrevArrow = ({ onClick }: any) => (
  <button
    className="custom-prev-arrow absolute top-[40%] left-3 z-20 text-4xl font-thin text-gray-500 hover:text-white transition-all duration-300"
    onClick={onClick}
  >
    <LiaAngleLeftSolid />
  </button>
);

const Hourly = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dataa = useSelector((state: any) => state.fetchData.data);
  const tempBoolean = useSelector(
    (state: any) => state.tempBoolean.tempBoolean
  );
  return (
    <div className="mt-6">
      {/* <h2> Responsive </h2> */}
      <Slider {...settings}>
        {dataa.hourly &&
          dataa.hourly.map((e: any, i: any) => {
            // console.log(e, "hourly");

            return (
              <>
                <div className="px-3">
                  <div className="bg-[#19202D] flex flex-col gap-3 justify-center items-center rounded-xl py-3">
                    <div className="text-white text-xs flex gap-1">
                      <h1>{getDayName(e.dt)},</h1>
                      <h1 className="text-gray-500">{formatTime(e.dt)}</h1>
                    </div>
                    <div className="w-[60px] h-[60px] my-1">
                      <img
                        src={weatherIcons[e.weather[0].icon]?.src}
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <h1 className="text-gray-500 text-xs">
                      {e.weather[0].description
                        .split(" ")
                        .map(
                          (word: any) =>
                            word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </h1>
                    <h1 className="text-gray-500 text-sm">
                      {`${Math.round(
                        tempBoolean ? convertC(e.temp) : convertF(e.temp)
                      )}`}
                      {tempBoolean ? "°C" : "°F"}
                    </h1>
                  </div>
                </div>
              </>
            );
          })}
      </Slider>
    </div>
  );
};

export default Hourly;
