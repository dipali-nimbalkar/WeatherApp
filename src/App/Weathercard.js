import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "./index.css";

const WeatherCard = ({ temInfo }) => {
  const [weatherState, setWeatherState] = React.useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = temInfo;
  // console.log("weather info ", temInfo);

  useEffect(() => {
    if (weathermood) {
      // not null NULL, not undefined UNDEFINED, not non-positive number 0 or -ve number, not empty ""
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-day-haze");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Rain":
          setWeatherState("wi-rain");
          break;
        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let timeStr = `${hours}:${minutes}`;
  let ampm = hours >= 12 ? "pm" : "am";

  return (
    <>
      <table>
        <tr>
          <th colspan="8">
            <i
              class={`wi ${weatherState}`}
              style={{ fontWeight: "bold", fontSize: "3.5rem" }}
            ></i>
          </th>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: "Black",
              color: "white",
              alignItems: "flex-start",
            }}
            colspan="3"
          >
            <Typography style={{ fontSize: "2rem" }}>{temp}&deg;</Typography>
          </td>
          <td
            style={{
              backgroundColor: "Black",
              color: "white",
              alignItems: "flex-start",
            }}
            colspan="3"
          >
            <Typography style={{ fontSize: "1.5rem" }}>
              {weathermood}
            </Typography>
            <Typography style={{ fontSize: "1rem" }}>
              {name} {country}
            </Typography>
          </td>
          <td
            style={{ backgroundColor: "#1bb0b3", color: "white" }}
            colspan="2"
          >
            <Typography>{new Date().toLocaleString()}</Typography>
          </td>
        </tr>
        <tr>
          <td width="12.5%">
            <i
              class="wi wi-sunset"
              style={{ fontWeight: "bold", color: "#1bb0b3" }}
            ></i>
          </td>
          <td width="12.5%">
            <Typography style={{ fontSize: "0.9rem" }}>Sunset</Typography>
            <Typography>
              {timeStr}
              {ampm}
            </Typography>
          </td>
          <td width="12.5%">
            <i
              class="wi wi-humidity"
              style={{ fontWeight: "bold", color: "#1bb0b3" }}
            ></i>
          </td>
          <td width="12.5%">
            <Typography style={{ fontSize: "0.9rem" }}>Humidity</Typography>
            <Typography>{humidity}</Typography>
          </td>
          <td width="12.5%">
            <i
              class="wi wi-rain"
              style={{ fontWeight: "bold", color: "#1bb0b3" }}
            ></i>
          </td>
          <td width="12.5%">
            <Typography style={{ fontSize: "0.9rem" }}>Pressure</Typography>
            <Typography>{pressure}</Typography>
          </td>
          <td width="12.5%">
            <i
              class="wi wi-strong-wind"
              style={{ fontWeight: "bold", color: "#1bb0b3" }}
            ></i>
          </td>
          <td width="12.5%">
            <Typography style={{ fontSize: "0.9rem" }}>Wind</Typography>
            <Typography>{speed}</Typography>
          </td>
        </tr>
      </table>
    </>
  );
};

export default WeatherCard;
