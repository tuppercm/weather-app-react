import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

export default function WeatherForecastDay(props) {
  let date = new Date(props.data.dt * 1000);

  function temp() {
    let temp = Math.round(props.data.main.temp);
    return `${temp}°C`;
  }

  return (
    <div>
      <div className="forecast-title">
        <FormattedDate
          date={date}
          country={props.data.country}
          format="partial"
        />
      </div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        class_name="forecast-icon"
      />
      <div className="text-capitalize">{props.data.weather[0].description}</div>
      <div className="forecast-temp">{temp()}</div>
    </div>
  );
}
