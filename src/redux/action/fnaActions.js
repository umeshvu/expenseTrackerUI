import axios from "axios";
import apis from "../../config/apis";

import {
  GET_ALL_FNA,
  GET_ALL_FNA_SUCCESS,
  GET_ALL_FNA_FAILURE,
  GET_FNA_BY_ID,
  SET_FNA_SUMMARY,
  DELETE_FNA_FAILURE,
  NEW_FNA_SUCCESS,
  NEW_FNA_FAILURE,
  UPDATE_FNA_FAILURE,
} from "../types";

export const fetchAllFnaFromSever = () => {
  //This can have side effects, thunk rocks here.
  return (dispatch) => {
    dispatch(fetchAllFna); //Making the loading true
    axios
      .get(`${apis.hostname}${apis.fna}`)
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

export const getFnaById = (fnaList, id) => {
  return {
    type: GET_FNA_BY_ID,
    payload: { fnaData: fnaList, id: id },
  };
};

export const setFnaHomeSummary = (fnaData) => {
  return {
    type: SET_FNA_SUMMARY,
    payload: { fnaData: fnaData },
  };
};

//Deleting financial activity

export const deleteFnaFromServer = (id) => {
  //This can have side effects, thunk rocks here.
  return (dispatch) => {
    axios
      .delete(`${apis.hostname}${apis.fna}${id}`)
      .then((response) => {
        dispatch(fetchAllFnaFromSever()); //when delete success, directly calling fetchAllFnaFromSever
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(deleteFnaFailure(errorMessage)); //Passing the error data to state
      });
  };
};

export const deleteFnaFailure = (error) => {
  return {
    type: DELETE_FNA_FAILURE,
    payload: error,
  };
};

//Financial activity success
export const addFnaInServerSuccess = (newFna) => {
  return (dispatch) => {
    dispatch(addFnaSuccess(newFna));
    dispatch(fetchAllFnaFromSever()); //when post success, directly calling fetchAllFnaFromSever
  };
};

export const addFnaSuccess = (newFnaRec) => {
  return {
    type: NEW_FNA_SUCCESS,
    payload: newFnaRec,
  };
};

export const addFnaFailure = (error) => {
  return {
    type: NEW_FNA_FAILURE,
    payload: error,
  };
};

export const editFnaFailure = (error) => {
  return {
    type: UPDATE_FNA_FAILURE,
    payload: error,
  };
};
