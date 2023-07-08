import React, { useContext, useEffect, useState } from "react";
import { WeatherData } from "../../context/WeatherProvider";

const Weather = () => {
  const { cityWeather, temp } = useContext(WeatherData);

  const [date, setDate] = useState(new Date());

  console.log(date);

  console.log(cityWeather);
  console.log(temp);

  return (
    <div className="h-screen bg-gradient-to-b from-red-950 to-black border flex justify-center">
      {!cityWeather ? (
        <div className="text-white w-full h-full">¿Aún no has buscado?</div>
      ) : (
        <div className="bg-winter w-[331.64px] h-[717.51px] rounded-2xl bg-cover flex flex-col items-center justify-evenly">
          <div className="w-[278.95px] h-[299.09px] rounded-3xl p-2 bg-winterDiv flex flex-col items-center justify-evenly">
            <h2 className="text-paragrapgW text-2xl">Today</h2>
            <div className="flex items-center justify-between">
              <img
                src={`https://openweathermap.org/img/wn/${temp[0].weather[0].icon}@2x.png`}
              ></img>
              <p className="text-5xl text-paragrapgW">{temp[0].main.temp}º</p>
            </div>
            <p className="font-bold text-xl text-paragrapgW">
              {temp[0].weather[0].description}
            </p>
            <p className="text-paragrapgW">
              {cityWeather.name}, {cityWeather.country}
            </p>
            <p className="text-paragrapgW">
              {date.getDate()}{" "}
              {date.getMonth() === 0
                ? "January"
                : date.getMonth() === 1
                ? "February"
                : date.getMonth() === 2
                ? "March"
                : date.getMonth() === 3
                ? "April"
                : date.getMonth() === 4
                ? "May"
                : date.getMonth() === 5
                ? "June"
                : date.getMonth() === 6
                ? "July"
                : date.getMonth() === 7
                ? "August"
                : date.getMonth() === 8
                ? "September"
                : date.getMonth() === 9
                ? "October"
                : date.getMonth() === 10
                ? "November"
                : "December"}{" "}
              {date.getFullYear()}
            </p>
            <p className="text-paragrapgW">
              Feels like {temp[0].main.feels_like}º
            </p>
          </div>
          <div className="bg-winterDiv p-4 w-[278.95px] h-[60px] flex gap-2 rounded-2xl">
            <p className="text-paragrapgW">Min temp {temp[0].main.temp_min}</p>
            <p className="text-paragrapgW">|</p>
            <p className="text-paragrapgW">Max temp {temp[0].main.temp_max}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
