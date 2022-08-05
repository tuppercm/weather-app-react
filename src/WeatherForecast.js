import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState({});
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function handleResponse(response) {
    setForecast({
      high: Math.round(response.data.list[0].main.temp_max),
      low: Math.round(response.data.list[0].main.temp_min),
      date: new Date(response.data.list[0].dt * 1000),
    });
    setReady(true);
  }

  function search() {
    let lat = props.lat;
    let lon = props.lon;
    const apiKey = "dd83c1df45fbeaa91b36a4d969d4c562";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="forecast-section borders">
        <div className="row">
          <div className="col">
            <div className="forecast-day">{days[forecast.date.getDay()]}</div>
            <WeatherIcon code="11d" />
            <div className="forecast-temp">
              <span className="forecast-temp-high">{forecast.high}</span>{" "}
              {forecast.low}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
