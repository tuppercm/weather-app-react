export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (props.country === `US` && props.format === "full") {
    if (hours < 12) {
      if (hours === 0) {
        hours = `12`;
      }
      if (hours >= 1 && hours < 11) {
        hours = `0${hours}`;
      }
      return `${day} ${hours}:${minutes} AM`;
    } else {
      if (hours >= 13) {
        hours = hours - 12;
      }
      return `${day} ${hours}:${minutes} PM`;
    }
  } else if (props.format === "full") {
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return `${day} ${hours}:${minutes}`;
  } else if (props.format === "partial") {
    /*if (hours < 12) {
      if (hours === 0) {
        hours = `12`;
      }
      return `${hours} AM`;
    } else {
      if (hours >= 13) {
        hours = hours - 12;
      }
      return `${hours} PM`;
    }
  } else {
    if (hours < 10) {
      hours = `0${hours}`;
    }*/
    return `${hours}:${minutes}`;
  }
}
