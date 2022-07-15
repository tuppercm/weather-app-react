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

  if (props.country === `US`) {
    //AM
    if (hours < 12) {
      if (hours === 0) {
        hours = `12`;
      }
      if (hours >= 1 && hours < 12) {
        hours = `0${hours}`;
      }
      return `${day} ${hours}:${minutes} AM`;
    } else {
      //PM
      if (hours >= 13) {
        hours = hours - 12;
      }
      return `${day} ${hours}:${minutes} PM`;
    }
  } else {
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return `${day} ${hours}:${minutes}`;
  }
}
