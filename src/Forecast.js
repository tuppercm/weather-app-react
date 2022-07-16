import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
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
