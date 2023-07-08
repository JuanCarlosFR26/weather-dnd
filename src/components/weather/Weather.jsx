import React, { useContext, useEffect, useState } from "react";
import { WeatherData } from "../../context/WeatherProvider";
import WeatherCard from "../../weathercards/WeatherCard";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Weather = () => {
  const { cityWeather, temp } = useContext(WeatherData);

  const [date, setDate] = useState(new Date());

  console.log(date.getHours())

  return (
    <div className="h-screen bg-gradient-to-b from-red-950 to-black border flex items-center justify-center">
      <div className="text-white w-2/4 h-full">
        {!cityWeather ? (
          <div className="">¿Aún no has buscado?</div>
        ) : (
          <Swiper>
            <SwiperSlide>
              <WeatherCard
                containerCard={
                  `${date.getHours() < 12 ? 'bg-cloudMorning' : date.getHours() >= 12 || date.getHours() < 20 ? 'bg-cloudAfternoon' : 'bg-cloudNight'} w-[331.64px] h-[717.51px] rounded-2xl bg-cover flex flex-col items-center justify-evenly mt-20 mb-0 ml-auto mr-auto`
                }
                firstCard={
                  "w-[278.95px] h-[299.09px] rounded-3xl p-2 bg-winterDiv flex flex-col items-center justify-evenly"
                }
                dayCss={"text-paragrapgW text-2xl"}
                dayText={"Today"}
                imgTemp={"flex items-center justify-between"}
                srcImg={`https://openweathermap.org/img/wn/${temp[0].weather[0].icon}@2x.png`}
                todayTemp={temp[0].main.temp}
                todayCss={"text-5xl text-paragrapgW"}
                tempDescriptionCss={"font-bold text-xl text-paragrapgW"}
                tempDescription={temp[0].weather[0].description}
                cityCountryCss={"text-paragrapgW"}
                cityName={cityWeather.name}
                cityCountry={cityWeather.country}
                dateCss={"text-paragrapgW"}
                feelsCss={"text-paragrapgW"}
                tempFeels={temp[0].main.feels_like}
                minMaxCss={
                  "bg-winterDiv p-4 w-[278.95px] h-[60px] flex gap-2 rounded-2xl"
                }
                minCss={"text-paragrapgW"}
                maxCss={"text-paragrapgW"}
                tempMin={temp[0].main.temp_min}
                tempMax={temp[0].main.temp_max}
                dateDay={date.getDate()}
                dateMonth={date.getMonth()}
                dateYear={date.getFullYear()}
              />
            </SwiperSlide>
            <SwiperSlide>
              <WeatherCard
                containerCard={
                  `${date.getHours() < 12 ? 'bg-cloudMorning' : date.getHours() >= 12 || date.getHours() < 20 ? 'bg-cloudAfternoon' : 'bg-cloudNight'} w-[331.64px] h-[717.51px] rounded-2xl bg-cover flex flex-col items-center justify-evenly mt-20 mb-0 ml-auto mr-auto`
                }
                firstCard={
                  "w-[278.95px] h-[299.09px] rounded-3xl p-2 bg-winterDiv flex flex-col items-center justify-evenly"
                }
                dayCss={"text-paragrapgW text-2xl"}
                dayText={"Tomorrow"}
                imgTemp={"flex items-center justify-between"}
                srcImg={`https://openweathermap.org/img/wn/${temp[5].weather[0].icon}@2x.png`}
                todayTemp={temp[5].main.temp}
                todayCss={"text-5xl text-paragrapgW"}
                tempDescriptionCss={"font-bold text-xl text-paragrapgW"}
                tempDescription={temp[5].weather[0].description}
                cityCountryCss={"text-paragrapgW"}
                cityName={cityWeather.name}
                cityCountry={cityWeather.country}
                dateCss={"text-paragrapgW"}
                feelsCss={"text-paragrapgW"}
                tempFeels={temp[5].main.feels_like}
                minMaxCss={
                  "bg-winterDiv p-4 w-[278.95px] h-[60px] flex gap-2 rounded-2xl"
                }
                minCss={"text-paragrapgW"}
                maxCss={"text-paragrapgW"}
                tempMin={temp[4].main.temp_min}
                tempMax={temp[8].main.temp_max}
                dateDay={date.getDate() + 1}
                dateMonth={date.getMonth()}
                dateYear={date.getFullYear()}
              />
            </SwiperSlide>
            <SwiperSlide>
              <WeatherCard
                containerCard={
                  `${date.getHours() < 12 ? 'bg-cloudMorning' : date.getHours() >= 12 || date.getHours() < 20 ? 'bg-cloudAfternoon' : 'bg-cloudNight'} w-[331.64px] h-[717.51px] rounded-2xl bg-cover flex flex-col items-center justify-evenly mt-20 mb-0 ml-auto mr-auto`
                }
                firstCard={
                  "w-[278.95px] h-[299.09px] rounded-3xl p-2 bg-winterDiv flex flex-col items-center justify-evenly"
                }
                dayCss={"text-paragrapgW text-2xl"}
                dayText={"Today"}
                imgTemp={"flex items-center justify-between"}
                srcImg={`https://openweathermap.org/img/wn/${temp[13].weather[0].icon}@2x.png`}
                todayTemp={temp[13].main.temp}
                todayCss={"text-5xl text-paragrapgW"}
                tempDescriptionCss={"font-bold text-xl text-paragrapgW"}
                tempDescription={temp[13].weather[0].description}
                cityCountryCss={"text-paragrapgW"}
                cityName={cityWeather.name}
                cityCountry={cityWeather.country}
                dateCss={"text-paragrapgW"}
                feelsCss={"text-paragrapgW"}
                tempFeels={temp[13].main.feels_like}
                minMaxCss={
                  "bg-winterDiv p-4 w-[278.95px] h-[60px] flex gap-2 rounded-2xl"
                }
                minCss={"text-paragrapgW"}
                maxCss={"text-paragrapgW"}
                tempMin={temp[12].main.temp_min}
                tempMax={temp[16].main.temp_max}
                dateDay={date.getDate() + 2}
                dateMonth={date.getMonth()}
                dateYear={date.getFullYear()}
              />
            </SwiperSlide>
          </Swiper>
        )}
      </div>
      <div className="text-white w-2/4 h-full border"></div>
    </div>
  );
};

export default Weather;
