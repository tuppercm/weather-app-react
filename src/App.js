import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <p>
            Coded by Caitlin Tupper and{" "}
            <a
              href="https://github.com/tuppercm/weather-app-react"
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
