import React, { useState } from "react";
import CurrentGps from "./CurrentGps";
import "./SearchBar.css";

export default function SearchBar(props) {
  const [city, setCity] = useState("");
  function getInputValue(event) {
    setCity(event.target.value);
  }

  function submitSearch(event) {
    event.preventDefault();
    props.updateSearch(city);
  }

  function submitCurrentGps(gpsCity) {
    props.updateSearch(gpsCity);
  }

  return (
    <div className="SearchBar">
      <div className="row g-2">
        <form className="col-auto">
          <input
            className="bar"
            onChange={getInputValue}
            type="search"
            placeholder="🔍 Search for a city"
            autoComplete="off"
          />
          <input
            className="btn btn-primary"
            type="submit"
            value="Search"
            onClick={submitSearch}
          />
        </form>
        <span className="col-auto">
          <CurrentGps submitCurrentGps={submitCurrentGps} />
        </span>
      </div>
    </div>
  );
}
