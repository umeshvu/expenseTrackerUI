import { combineReducers } from "redux";
import fetchReducer from "./fnaFetchReducer";
import editReducer from "./fnaEditReducer";
import homeReducer from "./fnaHomeReducer";
import deleteReducer from "./fnaDeleteReducer";
import addFnaReducer from "./fnaAddReducer";

export default combineReducers({
  fnaList: fetchReducer,
  fnaEdit: editReducer,
  fnaHome: homeReducer,
  fnaDelete: deleteReducer,
  newFnaRec: addFnaReducer,
});
