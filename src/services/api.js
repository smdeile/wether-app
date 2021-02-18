import axios from "axios";
require("dotenv").config();

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/";
const key = process.env.REACT_APP_SECRET_KEY;
const temperatureFormatC = "&units=metric";

export async function getWeatherFetch(city) {
  try {
    const finalUrl = `weather?q=${city}${temperatureFormatC}&appid=${key}`;
    const weatherResponse = await axios.get(finalUrl);
    return weatherResponse.data;
  } catch (error) {
    throw error;
  }
}

export async function getFiveDaysWeatherFetch(city) {
  try {
    const finalUrl = `forecast?q=${city}${temperatureFormatC}&appid=${key}`;
    const weatherResponse = await axios.get(finalUrl);
    return weatherResponse.data.list;
  } catch (error) {
    throw error;
  }
}

export async function getWeatherByPositionFetch(coords) {
  try {
    const finalUrl = `weather?lat=${coords.lat}&lon=${coords.lon}${temperatureFormatC}&appid=${key}`;
    const weatherResponse = await axios.get(finalUrl);
    return weatherResponse.data;
  } catch (error) {
    throw error;
  }
}
