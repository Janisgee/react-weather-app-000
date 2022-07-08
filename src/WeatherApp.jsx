import React, { useState } from "react";
import "./WeatherApp.css";
import SearchBar from "./SearchBar";
import CityWeather from "./CityWeather";

export default function WeatherApp() {
  const [searchCity, setSearchCity] = useState("");
  function updateSearch(searchTerm) {
    setSearchCity(searchTerm);
  }

  return (
    <div className="WeatherApp">
      <div className="container weather-app-wrapper">
        <SearchBar updateSearch={updateSearch} />
        <CityWeather city={searchCity} />
      </div>
      <p>
        <a href="https://github.com/Janisgee/react-weather-app-000">
          Open-source code
        </a>{" "}
        by Janis Chan
      </p>
    </div>
  );
}
