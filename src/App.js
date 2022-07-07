import "./App.css";
import Footer from "./Footer";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App container">
      <Search />
      <Weather />
      <Forecast />
      <Footer />
      <script src="src/script.js"></script>
    </div>
  );
}
