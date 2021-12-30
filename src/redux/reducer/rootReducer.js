import { combineReducers } from "redux";
import fetchReducer from "./fnaFetchReducer";
import editReducer from "./fnaEditReducer";
import homeReducer from "./fnaHomeReducer";
import deleteReducer from "./fnaDeleteReducer";

export default combineReducers({
  fnaList: fetchReducer,
  fnaEdit: editReducer,
  fnaHome: homeReducer,
  fnaDelete: deleteReducer,
});
