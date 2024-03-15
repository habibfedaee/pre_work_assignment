import { fetchWeatherApi } from "openmeteo";

const params = {
  hourly: "temperature_2m",
  daily: ["sunrise", "sunset"],
};

const url = "https://api.open-meteo.com/v1/gfs";
const responses = await fetchWeatherApi(url, params);
