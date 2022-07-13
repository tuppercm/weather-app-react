import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      city: `${response.data.name}`,
      currentTemp: `${response.data.main.temp}`,
      imageURL: "http://openweathermap.org/img/wn/01d@2x.png",
      description: `${response.data.weather[0].description}`,
      high: `${response.data.main.temp_max}`,
      low: `${response.data.main.temp_min}`,
      humidity: `${response.data.main.humidity}`,
      wind: `${response.data.wind.speed}`,
      lastUpdated: "Sunday 12:55 PM",
    });
    setReady(true);
  }

  if (ready) {
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
              src={weatherData.imageURL}
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
            Last updated: {weatherData.lastUpdated}
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
