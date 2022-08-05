import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="forecast-section borders">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="11d" />
          <div className="forecast-temp">
            <span className="forecast-temp-high">30</span> 20
          </div>
        </div>
      </div>
    </div>
  );
}
