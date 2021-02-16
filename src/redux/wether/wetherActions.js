import axios from "axios";
import {
  GET_CITIES,
  FETCH_WETHER_REQUEST,
  FETCH_WETHER_SUCCESS,
  FETCH_WETHER_FAILURE,
  FETCH_FIVE_DAYS_WETHER_SUCCESS,
} from "./wetherTypes";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const key = "056c60206db5e8ab2d93c33ab14167dc";

const temperatureFormatC = "&units=metric";
export const getCities = (cities) => {
  return { type: GET_CITIES, payload: cities };
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
    dispatch(fetchWetherRequest);
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
    async function getWeather(coords) {
      try {
        const finalUrl = `${BASE_URL}weather?lat=${coords.lat}&lon=${coords.lon}${temperatureFormatC}&appid=${key}`;
        const weatherResponse = await axios.get(finalUrl);
        dispatch(fetchWetherSuccess(weatherResponse.data));
      } catch (error) {
        dispatch(fetchWetherFailure(error));
      }
    }
    getWeather(coords);
  };
};

export const getFiveDaysWeather = (city) => {
  return (dispatch) => {
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
