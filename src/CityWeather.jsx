import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
import { getWeatherForCity } from "./weather-api";

export default function CityWeather(props) {
  const [weather, setWeather] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (props.city === "") return;
    setError(undefined);
    loadCityWeather(props.city)
      .then(setWeather)
      .catch((err) => setError(err.message));
  }, [props.city]);

  if (props.city === undefined) {
    return <div>Please enter a valid city name.</div>;
  } else if (error) {
    return <div>ERROR! {error}</div>;
  } else if (weather === undefined) {
    return <div>Please type a city name.</div>;
  } else {
    return <WeatherDisplay weather={weather} />;
  }
}

function loadCityWeather(city) {
  return getWeatherForCity(city)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.statusText);
      }
      return res;
    })

    .then((weatherResponse) => {
      console.log(weatherResponse);
      return {
        name: weatherResponse.data.name,
        longitude: weatherResponse.data.coord.lon,
        latitude: weatherResponse.data.coord.lat,
        timezone: weatherResponse.data.timezone,
        temperature: weatherResponse.data.main.temp,
        description: weatherResponse.data.weather[0].description,
        humidity: weatherResponse.data.main.humidity,
        wind: weatherResponse.data.wind.speed,
        icon: `http://openweathermap.org/img/wn/${weatherResponse.data.weather[0].icon}@2x.png`,
      };
    });
}
