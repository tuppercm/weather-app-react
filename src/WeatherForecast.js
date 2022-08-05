import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="forecast-section borders">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <i className="forecast-icon fa-solid fa-cloud-bolt"></i>
          <div className="forecast-temp">
            <span className="forecast-temp-high">30</span> 20
          </div>
        </div>
      </div>
    </div>
  );
}
