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
import { fetchAllFnaSever } from "../redux/action/fnaActions";

function App({ getAllFnaSer }) {
  useEffect(() => {
    getAllFnaSer();
  }, [getAllFnaSer]);

  return (
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
      dispatch(fetchAllFnaSever());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
