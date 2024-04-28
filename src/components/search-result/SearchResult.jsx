import "./searchResult.css";
import CurrentWeather from "./weather-cards/CurrentWeather";
import ForecastWeather from "./weather-cards/ForecastWeather";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";
export default function SearchResult() {
  const { loading, error } = useContext(GlobalContext);

  if (error) return <h2 className="error">{error}</h2>;

  return !loading && !error ? (
    <div className="search-result-container">
      <CurrentWeather />
      <ForecastWeather />
    </div>
  ) : (
    <h3 className="loading">Loading...</h3>
  );
}