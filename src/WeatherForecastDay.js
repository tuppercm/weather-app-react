import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.main.temp_max);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.main.temp_min);
    return `${temp}°`;
  }

  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    return days[date.getDay()];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="forecast-temp">
        <span className="forecast-temp-high">{maxTemp()}</span> {minTemp()}
      </div>
    </div>
  );
}
