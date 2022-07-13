import "./App.css";
import Footer from "./Footer";
import SearchForm from "./SearchForm";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App container">
      <SearchForm />
      <Weather />
      <Forecast />
      <Footer />
      <script src="src/script.js"></script>
    </div>
  );
}
