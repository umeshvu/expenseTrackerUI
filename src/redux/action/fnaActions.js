import axios from "axios";

import {
  GET_ALL_FNA,
  GET_ALL_FNA_SUCCESS,
  GET_ALL_FNA_FAILURE,
  GET_FNA_BY_ID,
} from "../types";

export const fetchAllFnaFromSever = () => {
  //This can have side effects
  return (dispatch) => {
    dispatch(fetchAllFna); //Making the loading true
    axios
      .get("http://localhost:4000/fna")
      .then((response) => {
        const allFna = response.data;
        dispatch(fetchAllFnaSuccess(allFna)); //Passing the success data to state
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchAllFnaFailure(errorMessage)); //Passing the error data to state
      });
  };
};

export const fetchAllFna = () => {
  return {
    type: GET_ALL_FNA,
  };
};

export const fetchAllFnaSuccess = (fnaList) => {
  return {
    type: GET_ALL_FNA_SUCCESS,
    payload: fnaList,
  };
};

export const fetchAllFnaFailure = (error) => {
  return {
    type: GET_ALL_FNA_FAILURE,
    payload: error,
  };
};

export const getFnaById = (fnaData, id) => {
  return {
    type: GET_FNA_BY_ID,
    payload: { fnaData: fnaData, id: id },
  };
};
