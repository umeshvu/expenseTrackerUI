import { GET_FNA_SUMMARY, SET_FNA_SUMMARY } from "../types";

const initialState = {
  loading: true,
  error: "",
  totalExepnse: "",
  totalIncome: "",
  balance: "",
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FNA_SUMMARY:
      return {
        loading: false,
        error: "",
        totalExepnse: 0,
        totalIncome: 0,
        balance: 0,
      };

    case SET_FNA_SUMMARY:
      const allFna = action.payload.fnaData.fnaList;
      const allExpense = allFna.filter((element) => element.type === "exp");
      const allIncome = allFna.filter((element) => element.type === "inc");

      const sumExepnse = allExpense.reduce(function (previous, current) {
        return previous + current.amount;
      }, 0);

      const sumIncome = allIncome.reduce(function (previous, current) {
        return previous + current.amount;
      }, 0);

      const balance = sumIncome - sumExepnse;

      return {
        loading: false,
        totalExepnse: sumExepnse,
        totalIncome: sumIncome,
        balance: balance,
      };

    default:
      return state;
  }
};

export default homeReducer;
