import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      currentTemp: response.data.main.temp,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      high: response.data.main.temp_max,
      coords: response.data.coord,
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
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="search-entry borders form-control"
                type="search"
                placeholder="Enter a city"
                autoComplete="off"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                className="search-button borders"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coords={weatherData.coords} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
