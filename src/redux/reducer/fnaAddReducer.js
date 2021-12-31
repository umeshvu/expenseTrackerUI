import { NEW_FNA_FAILURE, NEW_FNA_SUCCESS } from "../types";

const initialState = {
  loading: true,
  error: "",
  id: "",
  amount: "",
  description: "",
  date: "",
  success: "",
};

const addFnaReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_FNA_SUCCESS:
      return {
        loading: false,
        error: "",
        id: action.payload.id,
        amount: action.payload.amount,
        description: action.payload.description,
        date: action.payload.date,
      };

    case NEW_FNA_FAILURE:
      return {
        loading: false,
        error: action.payload,
        amount: "",
        description: "",
        date: "",
      };

    default:
      return state;
  }
};

export default addFnaReducer;
