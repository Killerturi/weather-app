import axios from "axios";
import React, { useEffect, useState } from "react";

const WeatherApp1 = () => {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState({});
  const API = "d8fcc970a35cd3edbfaa3ed073fe34dd";
  const getData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=d8fcc970a35cd3edbfaa3ed073fe34dd`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const textHandle = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setCityName("");
  };

  console.log(data);

  return (
    <>
      <h1>Weather App</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          value={cityName}
          placeholder="enter city name"
          onChange={textHandle}
        />
      </form>
      <div>
        <h2>City Name:-{data.name}</h2>
        <h1>Temp: {data.main.temp}॰C</h1>
        <h3>min-temp: {data.main.temp_min}॰C</h3>
      </div>
    </>
  );
};

export default WeatherApp1;
