import {
  SET_CITIES,
  FETCH_WETHER_REQUEST,
  FETCH_WETHER_SUCCESS,
  FETCH_WETHER_FAILURE,
  FETCH_FIVE_DAYS_WETHER_SUCCESS,
} from "./wetherTypes";

const initialState = {
  isLoading: false,
  citiesStore: null,
  wether: null,
  wetherFiveDays: null,
  position: null,
  error: "",
};

const wetherReducer = (state = initialState, actions) => {
  console.log("state: ", state);
  switch (actions.type) {
    case SET_CITIES:
      return {
        ...state,
        citiesStore: actions.payload,
      };

    case FETCH_WETHER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_WETHER_SUCCESS:
      return {
        ...state,
        wether: actions.payload,
        isLoading: false,
        error: "",
      };
    case FETCH_FIVE_DAYS_WETHER_SUCCESS:
      return {
        ...state,
        wetherFiveDays: actions.payload,
        isLoading: false,
        error: "",
      };
    case FETCH_WETHER_FAILURE:
      return {
        wether: null,
        wetherFiveDays: null,
        isLoading: false,
        error: actions.payload,
      };
    default:
      return state;
  }
};

export default wetherReducer;
