import React from "react";

import "./WeatherDisplay.css";
import { formatDate } from "./format-date";
import DisplayForecast from "./DisplayForecast";

export default function WeatherDisplay(props) {
  console.log(props);
  const latitude = props.weather.latitude;
  const longitude = props.weather.longitude;

  const position = { latitude, longitude };

  return (
    <div className="WeatherDisplay">
      <div>
        <br />
        <h1>{props.weather.name.toUpperCase()}</h1>
        <div>
          <div>{formatDate(new Date(), props.weather.timezone)}</div>
        </div>
      </div>
      <div className="currentWeather row">
        <div className="currentTemp col-6">
          <img src={props.weather.icon} alt={props.weather.description} />
          <span>
            <span className="temperature">
              {Math.round(props.weather.temperature)}
            </span>
            <span className="unit">°C</span>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>{props.weather.description}</li>
            <li>Humidity: {props.weather.humidity}%</li>
            <li>Wind: {Math.round(props.weather.wind)}km/h</li>
          </ul>
        </div>
        <DisplayForecast position={position} />
      </div>
    </div>
  );
}
