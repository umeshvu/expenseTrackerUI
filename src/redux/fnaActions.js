import axios from "axios";
import apis from "../config/apis";

import {
  GET_ALL_FNA,
  GET_FNA_BY_ID,
  NEW_FNA,
  UPDATE_FNA,
  DELETE_FNA,
} from "./types";

export const getAllFna = (fnaList) => {
  return {
    type: GET_ALL_FNA,
    payload: fnaList,
  };
};

export const getFnaById = (fna) => {
  return {
    type: GET_FNA_BY_ID,
    payload: fna,
  };
};

export const createFna = (fna) => {
  return {
    type: NEW_FNA,
    payload: fna,
  };
};

export const updateFna = (fna) => {
  return {
    type: UPDATE_FNA,
    payload: fna,
  };
};

export const deleteFna = (id) => {
  return {
    type: DELETE_FNA,
    payload: id,
  };
};

// export const getAllFnas = () => {
//   return (dispatch) => {
//     axios
//       .get("http://localhost:4000/fna")
//       .then((response) => {
//         const allFna = response.data;
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//       });
//   };
// };
