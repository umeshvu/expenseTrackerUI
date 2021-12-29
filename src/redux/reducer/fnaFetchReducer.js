import {
  GET_ALL_FNA,
  GET_ALL_FNA_SUCCESS,
  GET_ALL_FNA_FAILURE,
} from "../types";

const initialState = {
  loading: true,
  fnaList: [],
  error: "",
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_FNA:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_FNA_SUCCESS:
      return {
        loading: false,
        fnaList: action.payload,
        error: "",
      };

    case GET_ALL_FNA_FAILURE:
      return {
        loading: false,
        fnaList: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default fetchReducer;
