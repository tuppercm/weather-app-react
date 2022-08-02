import axios from "axios";
import React, { useState } from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  let lat = props.lat;
  let lon = props.lon;

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function search() {
    let apiKey = "dd83c1df45fbeaa91b36a4d969d4c562";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="forecast-section borders">
        <div className="row">
          <div className="col">
            <div className="forecast-day">
              {forecastData[0].weather[0].icon}
            </div>
            <WeatherIcon code={forecastData[0].weather[0].icon} />
            <div className="forecast-temp">
              <span className="forecast-temp-high">
                {Math.round(forecastData[0].temp.max)}°
              </span>{" "}
              {Math.round(forecastData[0].temp.min)}°
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Forecast not loaded";
  }
}
