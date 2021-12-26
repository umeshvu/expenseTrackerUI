import { combineReducers } from "redux";
import fnaReducer from "./fnaReducer";

export default combineReducers({
  FNAs: fnaReducer,
});
