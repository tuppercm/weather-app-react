import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  let cityEntryForm = (
    <form onSubmit={handleSubmit}>
      <input
        className="search-entry borders"
        type="search"
        placeholder="Enter a city"
        autoComplete="off"
        autoFocus="on"
        onChange={updateCity}
      />
      <input className="search-button borders" type="submit" value="Search" />
      <button className="current-button borders" type="button">
        <i className="fa-solid fa-location-arrow"></i>
      </button>
    </form>
  );

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      currentTemp: response.data.main.temp,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      high: response.data.main.temp_max,
      coord: response.data.coord,
      low: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      lastUpdated: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "d345b94fee409ccc249832a53244de54";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div>{cityEntryForm}</div>
        <WeatherData data={weatherData} />
        <Forecast coord={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return <div>{cityEntryForm}</div>;
  }
}
