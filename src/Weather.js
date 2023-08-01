import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    country: "Philippines",
    date: "July 27, 2023 | 9:46 PM",
    description: "Cloudy",
    temperature: 28,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 30,
  };
  return (
    <div className="Weather">
      <div className="weather-app-border">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter a city"
                autoFocus="on"
                autoComplete="off"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary button"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.country}</h1>
        <ul>
          <li className="datetime">{weatherData.date}</li>
        </ul>
        <div className="temperature-wrapper">
          <div className="row">
            <div className="weather-temperature col-6">
              <img
                src={weatherData.imgUrl}
                alt="clear"
                id="icon"
                className="float-right"
              />
              <span className="desc">{weatherData.description}</span>
            </div>
            <div className="col-6 temperature-container">
              <strong className="temperature">{weatherData.temperature}</strong>
              <span className="units">°C</span>
              <div className="col-6">
                <ul className="default-info">
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind}km/h</li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
