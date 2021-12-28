import { GET_FNA_BY_ID } from "../types";

const initialState = {
  loading: false,
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
          error: "No error",
          id: value.id,
          amount: value.amount,
          description: value.description,
          type: value.type,
          date: value.date,
        };
      } else {
        return "error";
      }

    default:
      return state;
  }
};

export default editReducer;
