import { combineReducers } from "redux";
import fetchReducer from "./fnaFetchReducer";
import editReducer from "./fnaEditReducer";
import homeReducer from "./fnaHomeReducer";

export default combineReducers({
  fnaList: fetchReducer,
  fnaEdit: editReducer,
  fnaHome: homeReducer,
});
