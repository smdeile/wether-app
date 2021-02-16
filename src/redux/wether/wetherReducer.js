import {
  FETCH_WETHER_REQUEST,
  FETCH_WETHER_SUCCESS,
  FETCH_WETHER_FAILURE,
  FETCH_FIVE_DAYS_WETHER_SUCCESS,
} from "./wetherTypes";

const initialState = {
  isLoading: false,
  city: "",
  wether: null,
  wetherFiveDays: null,
  position: null,
  error: "",
};

const wetherReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_WETHER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_WETHER_SUCCESS:
      return {
        wether: actions.payload,
        city: actions.payload.name,
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
