import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherData(props) {
  return (
    <div>
      <div className="current-section borders">
        <span className="current-city">{props.data.city}</span>
        <div className="row">
          <div className="col-5">
            <span>
              <WeatherIcon code={props.data.icon} class_name="current-icon" />{" "}
              <WeatherTemperature celsius={props.data.currentTemp} />
            </span>
          </div>
          <div className="col-6 current-details">
            <ul>
              <li>
                <span className="current-description">
                  {props.data.description}
                </span>
              </li>
              <li>
                <i className="fa-solid fa-temperature-half"></i>:{" "}
                <strong>H:{Math.round(props.data.high)}°C</strong> L:
                {Math.round(props.data.low)}°C
              </li>
              <li>
                <i className="fa-solid fa-droplet"></i>: {props.data.humidity}%
              </li>
              <li>
                <i className="fa-solid fa-wind"></i>:{" "}
                {Math.round(props.data.wind)} m/s
              </li>
            </ul>
          </div>
          <p className="last-updated">
            Last updated:{" "}
            <FormattedDate
              date={props.data.lastUpdated}
              country={props.data.country}
              format="full"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
