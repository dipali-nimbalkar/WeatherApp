import React, { useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import WeatherCard from "./Weathercard";
import "./index.css";

const App = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [temInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=2df43f64c81162344af99bd18c5da992`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //on component mount
    getWeatherInfo();
  }, []);

  return (
    <Box
      style={{
        backgroundColor: "grey",
        position: "absolute",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        p={4}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          style={{
            borderRadius: "1px solid Black",
            backgroundColor: "white",
          }}
          id="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(e) => {
            // console.log("e.key", e.key);
            if (e.key === "Enter") {
              // console.log(e.target.value);
              getWeatherInfo();
            }
          }}
        />
        <Button
          style={{ backgroundColor: "#1bb0b3", color: "white" }}
          onClick={() => getWeatherInfo()}
        >
          Sreach
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <WeatherCard temInfo={temInfo} />
      </Box>
    </Box>
  );
};

export default App;
