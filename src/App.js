import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App container">
      <Weather defaultCity="New York" />
      <Forecast />
      <footer>
        <p>
          <a
            href="https://github.com/tuppercm/weather-app-react"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Caitlin Tupper
        </p>
      </footer>
    </div>
  );
}
