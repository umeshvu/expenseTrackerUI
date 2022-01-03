import { GET_FNA_BY_ID, UPDATE_FNA_FAILURE } from "../types";

const initialState = {
  loading: true,
  error: "",
  id: "",
  amount: "",
  description: "",
  type: "",
  date: "",
};

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FNA_BY_ID:
      const fnaList = action.payload.fnaData;
      const result = fnaList.filter(
        (element) => element.id === action.payload.id
      );
      if (result.length > 0) {
        const value = result[0];
        return {
          loading: false,
          error: "",
          id: value.id,
          amount: value.amount,
          description: value.description,
          type: value.type,
          date: value.date,
        };
      } else {
        return {
          loading: true,
          error: "Something went wrong",
          id: "",
          amount: "",
          description: "",
          type: "",
          date: "",
        };
      }
    case UPDATE_FNA_FAILURE:
      return {
        loading: true,
        error: action.payload.error,
        id: "",
        amount: "",
        description: "",
        type: "",
        date: "",
      };

    default:
      return state;
  }
};

export default editReducer;
