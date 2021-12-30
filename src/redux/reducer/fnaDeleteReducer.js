import { DELETE_FNA_FAILURE } from "../types";

const initialState = {
  error: "",
};

const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_FNA_FAILURE:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};

export default deleteReducer;
