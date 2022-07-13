import React, { useState } from "react";
import "./SearchForm.css";

export default function SearchForm() {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="search-entry borders"
          type="search"
          placeholder="Enter a city"
          autoComplete="off"
          autoFocus="on"
          onChange={updateCity}
        />
        <input className="search-button borders" type="submit" value="Search" />
        <button className="current-button borders" type="button">
          <i className="fa-solid fa-location-arrow"></i>
        </button>
      </form>
    </div>
  );
}
