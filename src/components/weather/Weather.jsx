import React, { useContext, useEffect, useState } from "react";
import { WeatherData } from "../../context/WeatherProvider";

const Weather = () => {
  const { cityWeather } = useContext(WeatherData);

  const [date, setDate] = useState(new Date());

  console.log(date);

  console.log(cityWeather);

  return (
    <div className="h-screen bg-gradient-to-b from-red-950 to-black border">
      {!cityWeather ? (
        <div className="text-white w-full h-full">¿Aún no has buscado?</div>
      ) : (
        <div>
          <h2>Today</h2>
          <div className="flex">
            <img
              src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`}
            ></img>
            <p>{cityWeather.main.temp}º</p>
          </div>
          <p>
            {cityWeather.name}, {cityWeather.sys.country}
          </p>
          <p>
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
          <p>Feels like {cityWeather.main.feels_like}º</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
