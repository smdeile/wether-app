import axios from "axios";
import {
  SET_CITIES,
  FETCH_WETHER_REQUEST,
  FETCH_WETHER_SUCCESS,
  FETCH_WETHER_FAILURE,
  FETCH_FIVE_DAYS_WETHER_SUCCESS,
} from "./wetherTypes";
require("dotenv").config();

const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const key = process.env.REACT_APP_SECRET_KEY;

const temperatureFormatC = "&units=metric";

export const setCities = (cities) => {
  return { type: SET_CITIES, payload: cities };
};

export const fetchWetherRequest = (wether) => {
  return { type: FETCH_WETHER_REQUEST, payload: wether };
};
export const fetchWetherSuccess = (wether) => {
  return { type: FETCH_WETHER_SUCCESS, payload: wether };
};
export const fetchFiveDaysWetherSuccess = (wether) => {
  return { type: FETCH_FIVE_DAYS_WETHER_SUCCESS, payload: wether };
};
export const fetchWetherFailure = (err) => {
  return { type: FETCH_WETHER_FAILURE, payload: err };
};

export const fetchWether = (city) => {
  return (dispatch) => {
    dispatch(fetchWetherRequest());
    async function getWeather(city) {
      try {
        const finalUrl = `${BASE_URL}weather?q=${city}${temperatureFormatC}&appid=${key}`;

        const weatherResponse = await axios.get(finalUrl);

        dispatch(fetchWetherSuccess(weatherResponse.data));
      } catch (error) {
        console.log("error: ", error);
        dispatch(fetchWetherFailure(error));
      }
    }
    getWeather(city);
  };
};

export const getWeatherByPosition = (coords) => {
  return (dispatch) => {
    dispatch(fetchWetherRequest());

    async function getWether(coords) {
      try {
        const finalUrl = `${BASE_URL}weather?lat=${coords.lat}&lon=${coords.lon}${temperatureFormatC}&appid=${key}`;
        const weatherResponse = await axios.get(finalUrl);
        dispatch(fetchWetherSuccess(weatherResponse.data));
      } catch (error) {
        dispatch(fetchWetherFailure(error));
      }
    }
    getWether(coords);
  };
};

export const getFiveDaysWeather = (city) => {
  return (dispatch) => {
    dispatch(fetchWetherRequest());
    async function getWether(city) {
      try {
        const finalUrl = `${BASE_URL}forecast?q=${city}${temperatureFormatC}&appid=${key}`;
        const weatherResponse = await axios.get(finalUrl);
        dispatch(fetchFiveDaysWetherSuccess(weatherResponse.data.list));
      } catch (error) {
        alert(error);
      }
    }
    getWether(city);
  };
};
