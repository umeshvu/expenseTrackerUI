import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import ListActivities from "./ListActivities";
import Expense from "./Expense";
import Income from "./Income";
import Edit from "./Edit";
import {
  fetchAllFnaFromSever,
  setFnaHomeSummary,
} from "../redux/action/fnaActions";

function App({ getAllFnaSer, setHomeSummary, allFnaData }) {
  useEffect(() => {
    getAllFnaSer();
  }, []);

  useEffect(() => {
    if (allFnaData.fnaList.length > 0) {
      setHomeSummary(allFnaData);
    }
    if (allFnaData.fnaList.length === 0) {
      alert("No Data");
    }
  });

  return allFnaData.loading ? (
    <div className="text-center m-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/edit" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-expense" element={<Expense />} />
        <Route path="/add-income" element={<Income />} />
        <Route path="/list-activities" element={<ListActivities />} />
        <Route path="/edit/:id/:type" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllFnaSer: () => {
      dispatch(fetchAllFnaFromSever());
    },
    setHomeSummary: (fnaData) => {
      dispatch(setFnaHomeSummary(fnaData));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    allFnaData: state.fnaList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
