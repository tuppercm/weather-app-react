import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

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
        <div className="current-section borders daytime">
          <span className="current-city">{weatherData.city}</span>
          <div className="row">
            <div className="col-5">
              <WeatherTemperature celsius={weatherData.currentTemp} />
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt={weatherData.description}
                className="current-icon"
              ></img>
              <br />
            </div>
            <div className="col-6 current-details">
              <ul>
                <li>
                  <span className="current-description">
                    {weatherData.description}
                  </span>
                </li>
                <li>
                  <i className="fa-solid fa-temperature-half"></i>:{" "}
                  <strong>H:{Math.round(weatherData.high)}°C</strong> L:
                  {Math.round(weatherData.low)}°C
                </li>
                <li>
                  <i className="fa-solid fa-droplet"></i>:{" "}
                  {weatherData.humidity}%
                </li>
                <li>
                  <i className="fa-solid fa-wind"></i>:{" "}
                  {Math.round(weatherData.wind)} m/s
                </li>
              </ul>
            </div>
            <p className="last-updated">
              Last updated:{" "}
              <FormattedDate
                date={weatherData.lastUpdated}
                country={weatherData.country}
              />
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <div>{cityEntryForm}</div>;
  }
}
