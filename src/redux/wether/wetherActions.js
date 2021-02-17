import {
  getFiveDaysWeatherFetch,
  getWeatherByPositionFetch,
  getWeatherFetch,
} from "../../services/api";
import {
  SET_CITIES,
  FETCH_WETHER_REQUEST,
  FETCH_WETHER_SUCCESS,
  FETCH_WETHER_FAILURE,
  FETCH_FIVE_DAYS_WETHER_SUCCESS,
} from "./wetherTypes";

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
  return async (dispatch) => {
    dispatch(fetchWetherRequest());

    try {
      const weatherResponse = await getWeatherFetch(city);

      dispatch(fetchWetherSuccess(weatherResponse));
    } catch (error) {
      dispatch(fetchWetherFailure(error));
    }
  };
};

export const getWeatherByPosition = (coords) => {
  return async (dispatch) => {
    dispatch(fetchWetherRequest());

    try {
      const weatherResponse = await getWeatherByPositionFetch(coords);
      dispatch(fetchWetherSuccess(weatherResponse));
    } catch (error) {
      dispatch(fetchWetherFailure(error));
    }
  };
};

export const getFiveDaysWeather = (city) => {
  return async (dispatch) => {
    dispatch(fetchWetherRequest());

    try {
      const weatherResponse = await getFiveDaysWeatherFetch(city);

      dispatch(fetchFiveDaysWetherSuccess(weatherResponse));
    } catch (error) {
      dispatch(fetchWetherFailure(error));
    }
  };
};
