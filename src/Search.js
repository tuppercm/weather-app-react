import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <form>
        <input
          className="search-entry borders"
          type="search"
          placeholder="Enter a city"
          autoComplete="off"
          autoFocus="on"
        />
        <input className="search-button borders" type="submit" value="Search" />
        <button className="current-button borders" type="button">
          <i className="fa-solid fa-location-arrow"></i>
        </button>
      </form>
    </div>
  );
}
