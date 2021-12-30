import { DELETE_FNA_FAILURE } from "../types";

const initialState = {
  error: "",
};

const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_FNA_FAILURE:
      return {
        error: "Something went wrong",
      };

    default:
      return state;
  }
};

export default deleteReducer;
