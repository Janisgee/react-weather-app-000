import React, { useState, useEffect } from "react";
import { getForecastForGps } from "./weather-api";
import ForecastDay from "./ForecastDay";

import "./DisplayForecast.css";

export default function DisplayForecast(props) {
  const [forecastDays, setForecastDays] = useState([]);

  useEffect(
    function updateForecast() {
      getForecastForGps(props.position.latitude, props.position.longitude).then(
        showForecastDaily
      );
    },
    [props.position]
  );

  function showForecastDaily(response) {
    console.log(response.data.daily);
    setForecastDays(response.data.daily);
  }
  return (
    <div className="DisplayForecast">
      <div className="container forecastWeather">
        <ul className="row">
          {forecastDays.slice(0, 6).map((forecastDay, index) => {
            return (
              <li className="col-2" key={index}>
                <ForecastDay forecastDay={forecastDay} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
