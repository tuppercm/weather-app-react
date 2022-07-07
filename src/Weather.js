import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    currentTemp: 89,
    imageURL: "http://openweathermap.org/img/wn/01d@2x.png",
    description: "Clear Sky",
    high: 93,
    low: 82,
    humidity: 44,
    wind: 10,
    lastUpdated: "Sunday 12:55 PM",
  };

  return (
    <div className="current-section borders daytime">
      <span className="current-city">{weatherData.city}</span>
      <div className="row">
        <div className="col-5">
          <span className="current-temp">{weatherData.currentTemp}</span>
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
              <strong>H:{weatherData.high}°</strong> L:{weatherData.low}°
            </li>
            <li>
              <i className="fa-solid fa-droplet"></i>: {weatherData.humidity}%
            </li>
            <li>
              <i className="fa-solid fa-wind"></i>: {weatherData.wind} mph
            </li>
          </ul>
        </div>
        <p className="last-updated">Last updated: {weatherData.lastUpdated}</p>
      </div>
    </div>
  );
}
