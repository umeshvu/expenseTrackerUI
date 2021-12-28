import { combineReducers } from "redux";
import fetchReducer from "./fnaFetchReducer";
import editReducer from "./fnaEditReducer";
export default combineReducers({
  fnaList: fetchReducer,
  fnaEdit: editReducer,
});
