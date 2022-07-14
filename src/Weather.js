import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
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

  if (weatherData.ready) {
    return (
      <div className="current-section borders daytime">
        <span className="current-city">{weatherData.city}</span>
        <div className="row">
          <div className="col-5">
            <span className="current-temp">
              {Math.round(weatherData.currentTemp)}
            </span>
            <span className="current-units">°F</span>

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
                <strong>H:{Math.round(weatherData.high)}°</strong> L:
                {Math.round(weatherData.low)}°
              </li>
              <li>
                <i className="fa-solid fa-droplet"></i>: {weatherData.humidity}%
              </li>
              <li>
                <i className="fa-solid fa-wind"></i>: {weatherData.wind}
              </li>
            </ul>
          </div>
          <p className="last-updated">
            Last updated: <FormattedDate date={weatherData.lastUpdated} />
          </p>
        </div>
      </div>
    );
  } else {
    const apiKey = "d345b94fee409ccc249832a53244de54";
    let city = "London";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
