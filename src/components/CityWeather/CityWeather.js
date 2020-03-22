import React, { useState } from "react";
import "./CityWeather.css";

const CityWeather = () => {
  const [city, setCity] = useState([]);
  const [cityWeather, setCityWeather] = useState([]);
  const [country, setCountry] = useState([]);
  const getCity = e => {
    setCity(e.target.value);
  };
  const getCountry = e => {
    setCountry(e.target.value);
  };

  const getWeather = async e => {
    const APIkey = "c470d9117220df245654821524d1b0c2";
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "," +
      country +
      "&APPID=" +
      APIkey;
    const res = await fetch(url);
    const data = await res.json();
    setCityWeather(data.weather);
  };

  if (!cityWeather) {
    return (
      <div className="cityWeather">
        <input
          type="text"
          placeholder="Enter city name"
          onChange={getCity}
        ></input>
        <input
          type="text"
          placeholder="Enter Country"
          onChange={getCountry}
        ></input>
        <button onClick={getWeather}>Show Weather</button>
        <div className="error">City not found! Please enter new city.</div>
      </div>
    );
  } else {
    return (
      <div>
          <div className="cityWeather">
        <input
          type="text"
          placeholder="Enter city name"
          onChange={getCity}
        ></input>
        <input
          type="text"
          placeholder="Enter Country"
          onChange={getCountry}
        ></input>
        <button id="showButton" onClick={getWeather}>Show Weather</button>
        </div>
        {cityWeather.map(cityWeather => (
          <div key="cityWeather.main" className="weather">
            <div>
              {" "}
              Mainly <b>{cityWeather.main}</b>
            </div>
            <div>
              {" "}
              Description <b>{cityWeather.description}</b>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
export default CityWeather;
