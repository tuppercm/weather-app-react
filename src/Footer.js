import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <p>
          <a
            href="https://github.com/tuppercm/weather-app"
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
