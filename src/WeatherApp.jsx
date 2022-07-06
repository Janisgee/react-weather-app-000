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
    </div>
  );
}
