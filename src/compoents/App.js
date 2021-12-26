import React, { useState, useEffect } from "react";
import "../App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../redux/store";
import Navbar from "./Navbar";
import Home from "./Home";
import ListActivities from "./ListActivities";
import Expense from "./Expense";
import Income from "./Income";
import Edit from "./Edit";

function App() {
  const [FNAs, setFNA] = useState([]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/edit" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-expense" element={<Expense />} />
          <Route path="/add-income" element={<Income />} />
          <Route
            path="/list-activities"
            element={<ListActivities data={FNAs} />}
          />
          <Route path="/edit/:id/:type" element={<Edit data={FNAs} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
