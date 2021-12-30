import { NEW_FNA_SUCCESS, NEW_FNA_FAILURE } from "../types";

const initialState = {
  loading: true,
  error: "",
  amount: 0,
  description: "",
  date: "",
};

const addFnaReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_FNA_SUCCESS:
      return {
        error: action.payload,
      };

    case NEW_FNA_FAILURE:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};

export default addFnaReducer;
