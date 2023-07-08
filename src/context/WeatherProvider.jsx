import React, { createContext, useState } from 'react'

export const WeatherData = createContext(null);

const WeatherProvider = ({children}) => {

    const [inputWeather, setInputWeather] = useState("");
    const [cityWeather, setCityWeather] = useState("");
    const [temp, setTemp] = useState("");

  return (
    <WeatherData.Provider value={{inputWeather, setInputWeather, cityWeather, setCityWeather, temp, setTemp}}>
        {children}
    </WeatherData.Provider>
  )


}

export default WeatherProvider