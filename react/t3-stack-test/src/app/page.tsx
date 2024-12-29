"use client";

import React, { useState } from "react";
import userData from "./data/userData";
import countries from "./data/countriesData";
import "./App.css";

interface Country {
  name: string;
  capital: string;
  language: string;
  population: number;
  currency: string;
  flag: string;
}

const App: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const showRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    setSelectedCountry(countries[randomIndex]);
  };

  return (
    <div className={`app ${theme}`}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button className="theme-button" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
      <div className="card-container">
        <img src={userData.avatar} alt="User Avatar" className="user-avatar" />
        <h2>{userData.name}</h2>
        <p>{userData.title}</p>
        <p>{userData.location}</p>
        <div className="skills">
          {userData.skills.map((skill, index) => (
            <span key={index} className="skill">
              {skill}
            </span>
          ))}
        </div>
        <p>Joined on {userData.joined}</p>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button className="theme-button" onClick={showRandomCountry}>
          Show Random Country
        </button>
      </div>
      {selectedCountry && (
        <div className="card-container" style={{ marginTop: "20px" }}>
          <img
            src={selectedCountry.flag}
            alt={`${selectedCountry.name} flag`}
            className="country-flag"
          />
          <h2>{selectedCountry.name.toUpperCase()}</h2>
          <p>
            <strong>Capital:</strong> {selectedCountry.capital}
          </p>
          <p>
            <strong>Language:</strong> {selectedCountry.language}
          </p>
          <p>
            <strong>Population:</strong> {selectedCountry.population.toLocaleString()}
          </p>
          <p>
            <strong>Currency:</strong> {selectedCountry.currency}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
