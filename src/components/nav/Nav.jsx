import React, { useContext, useEffect, useState } from "react";
import FormWeather from "../formweather/FormWeather";
import { WeatherData } from "../../context/WeatherProvider";
import { getData } from "../../functions/getdata";

const Nav = () => {
  const {setInputWeather, inputWeather, setCityWeather } = useContext(WeatherData);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleChange = (e) =>  setInputWeather(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const weather = await getData(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputWeather}&appid=${"fff84c545190e505b8ce27ebf90fdc60"}&units=metric`
      );
      setCityWeather(weather);
    } catch (error) {
      console.error("An error appeared", error);
    }
  }

  console.log(inputWeather);

  return (
    <nav className="pt-[0.7rem] pb-[0.7rem] pl-[1.7rem] pr-[1.7rem] fixed left-[50%] translate-x-[-50%] bottom-[2rem] flex justify-center gap-1 rounded-3xl backdrop:blur-[15px] w-auto border border-white">
      {!isClicked ? (
        <i
          onClick={() => handleClick()}
          className="fa-solid fa-circle-chevron-up text-4xl text-red-400"
        ></i>
      ) : (
        <i
          onClick={() => handleClick()}
          className="fa-solid fa-circle-chevron-down text-4xl text-red-400 animate-neon"
        ></i>
      )}
      {isClicked && (
        <div id="animation_rotate" className=" flex items-center justify-center bg-black w-96 h-20 bottom-24 rounded-2xl absolute ">
          <FormWeather onChange={handleChange} onSubmit={handleSubmit}/>
        </div>
      )}
    </nav>
  );
};

export default Nav;
