import { createStore, applyMiddleware } from "redux";
import wetherReducer from "./wether/wetherReducer";
import thunk from "redux-thunk";
// import logger from "redux-logger";

const enhancer = applyMiddleware(thunk);
const store = createStore(wetherReducer, enhancer);
export default store;
