import React from "react";
import { getWeatherForGps } from "./weather-api";

export default function CurrentGps(props) {
  function changePosition() {
    navigator.geolocation.getCurrentPosition(updatePosition);
  }

  function updatePosition(position) {
    const currentGpsLatitude = position.coords.latitude;
    const currentGpsLongitude = position.coords.longitude;

    getWeatherForGps(currentGpsLatitude, currentGpsLongitude).then(displayCity);
  }

  function displayCity(response) {
    console.log(response.data.name);
    props.submitCurrentGps(response.data.name);
  }
  return (
    <button className="btn btn-warning" onClick={changePosition}>
      Current
    </button>
  );
}
