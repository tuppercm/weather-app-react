import axios from "axios";
import React, { useState } from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    console.log("handleResponse");
    setLoaded(true);
    setForecastData(response.data.daily);
  }

  if (loaded) {
    console.log("Forecast loaded");
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
    console.log("Forecast not loaded");
    let apiKey = "d345b94fee409ccc249832a53244de54";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
