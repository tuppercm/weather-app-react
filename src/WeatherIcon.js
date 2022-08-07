import React from "react";

export default function WeatherIcon(props) {
  let class_name = props.class_name;

  const codeMapping = {
    "01d": "fa-sun",
    "01n": "fa-moon",
    "02d": "fa-cloud-sun",
    "02n": "fa-cloud-moon",
    "03d": "fa-cloud",
    "03n": "fa-cloud",
    "04d": "fa-cloud",
    "04n": "fa-cloud",
    "09d": "fa-cloud-rain",
    "09n": "fa-cloud-moon-rain",
    "10d": "fa-cloud-rain",
    "10n": "fa-cloud-moon-rain",
    "11d": "fa-cloud-bolt",
    "11n": "fa-cloud-bolt",
    "13d": "fa-snowflake",
    "13n": "fa-snowflake",
    "50d": "fa-smog",
    "50n": "fa-smog",
  };

  return (
    <div>
      <i className={`fa-solid ${class_name} ${codeMapping[props.code]}`}></i>
    </div>
  );
}
