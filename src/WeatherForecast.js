import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastHour from "./WeatherForecastHour";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecast(response.data.list);
    setReady(true);
  }

  function search() {
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    const apiKey = "dd83c1df45fbeaa91b36a4d969d4c562";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="forecast-section borders">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastHour data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
