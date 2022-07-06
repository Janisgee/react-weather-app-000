import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  const image = `http://openweathermap.org/img/wn/${props.forecastDay.weather[0].icon}@2x.png`;

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <p className="day">{formatDay(props.forecastDay.dt)}</p>
      <img
        id="forecastIcon"
        src={image}
        alt={props.forecastDay.weather[0].description}
      />
      <div className="forecastMaxTemp">
        {Math.round(props.forecastDay.temp.max)}°C
      </div>
      <div className="forecastMinTemp">
        {Math.round(props.forecastDay.temp.min)}°C
      </div>
    </div>
  );
}
