import "./App.css";
import SearchForm from "./SearchForm";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App container">
      <SearchForm />
      <Weather />
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
