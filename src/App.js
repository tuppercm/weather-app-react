import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
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
    </div>
  );
}
