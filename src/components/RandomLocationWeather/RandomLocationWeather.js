import React, { useState } from "react";
import "./RandomLocationWeather.css";
const RandomLocationWeather = () => {
  const [weather, setWeather] = useState([]);
  //Genrates & sets lat to random number between 0 to 90
  const [lat, setLat] = useState([Math.random() * 90]);
  //Genrates & sets long to random number between 0 to 180
  const [long, setLong] = useState([Math.random() * 180]);

  const getWeather = async e => {
    //Change lat & random
    setLat(Math.random() * (90 - 0) + 0);
    setLong(Math.random() * (180 - 0) + 0);
    const APIkey = "c470d9117220df245654821524d1b0c2";
    let url =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      long +
      "&APPID=" +
      APIkey;
    const res = await fetch(url);
    const data = await res.json();
    setWeather(data.weather);
  };
  return (
    <div>
      <button className="button" onClick={getWeather}>
        Display weather at Random Location!
      </button>
      {weather.map(randomWeather => (
        <div key="randomWeather.main" className="weather">
          <div>
            Weather at latitude {lat} and longitude {long} is
          </div>
          <div>
            {" "}
            Mainly <b>{randomWeather.main}</b>
          </div>
          <div>
            {" "}
            Description <b>{randomWeather.description}</b>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RandomLocationWeather;
