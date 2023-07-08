import React from "react";

const WeatherCard = ({containerCard, firstCard, dayCss, dayText, imgTemp, srcImg, todayTemp, todayCss, tempDescriptionCss, tempDescription, cityCountryCss, cityName, cityCountry, dateCss, feelsCss, tempFeels, minMaxCss, minCss, maxCss, tempMax, tempMin, dateDay, dateMonth, dateYear}) => {
  return (
    <div className={containerCard}>
      <div className={firstCard}>
        <h2 className={dayCss}>{dayText}</h2>
        <div className={imgTemp}>
          <img
            src={srcImg}
          ></img>
          <p className={todayCss}>{todayTemp}º</p>
        </div>
        <p className={tempDescriptionCss}>
          {tempDescription}
        </p>
        <p className={cityCountryCss}>
          {cityName}, {cityCountry}
        </p>
        <p className={dateCss}>
          {dateDay}{" "}
          {dateMonth === 0
            ? "January"
            : dateMonth === 1
            ? "February"
            : dateMonth === 2
            ? "March"
            : dateMonth === 3
            ? "April"
            : dateMonth === 4
            ? "May"
            : dateMonth === 5
            ? "June"
            : dateMonth === 6
            ? "July"
            : dateMonth === 7
            ? "August"
            : dateMonth === 8
            ? "September"
            : dateMonth === 9
            ? "October"
            : dateMonth === 10
            ? "November"
            : "December"}{" "}
          {dateYear}
        </p>
        <p className={feelsCss}>Feels like {tempFeels}º</p>
      </div>
      <div className={minMaxCss}>
        <p className={minCss}>Min temp {tempMin}</p>
        <p className="text-paragrapgW">|</p>
        <p className={maxCss}>Max temp {tempMax}</p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default WeatherCard;
