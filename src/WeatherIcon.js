import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "fa-sun",
    "01n": "fa-sun",
    "02d": "fa-cloud-sun",
    "02n": "fa-cloud-sun",
    "03d": "fa-cloud",
    "03n": "fa-cloud",
    "04d": "fa-cloud",
    "04n": "fa-cloud",
    "09d": "fa-cloud-rain",
    "09n": "fa-cloud-rain",
    "10d": "fa-cloud-rain",
    "10n": "fa-cloud-rain",
    "11d": "fa-cloud-bolt",
    "11n": "fa-cloud-bolt",
    "13d": "fa-snowflake",
    "13n": "fa-snowflake",
    "50d": "fa-smog",
    "50n": "fa-smog",
  };

  return (
    <div>
      <i className={`fa-solid forecast-icon ${codeMapping[props.code]}`}></i>
    </div>
  );
}
