import axios from "axios";
import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  console.log(props.coord);
  let apiKey = "d345b94fee409ccc249832a53244de54";
  let lat = props.coord.lat;
  let lon = props.coord.lon;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  function handleResponse(response) {
    console.log(response.data);
  }

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="forecast-section borders">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Sat</div>
          <WeatherIcon />
          <div className="forecast-temp">
            <span className="forecast-temp-high">100°</span> -10°
          </div>
        </div>
      </div>
    </div>
  );
}
