import { combineReducers } from "redux";
import fetchReducer from "./fnaFetchReducer";
export default combineReducers({
  fnaList: fetchReducer,
});
