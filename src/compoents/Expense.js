import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

import {
  fetchAllFnaFromSever,
  setFnaHomeSummary,
} from "../redux/action/fnaActions";

function Expense() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="container">
      <br />
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Amount Spent</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            Amount you like to keep a track as your expense.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Description</label>
          <input
            type="text"
            className="form-control"
            id="descriptionArea"
            aria-describedby="descriptionHelp"
          />
          <small id="descriptionHelp" className="form-text text-muted">
            Say something about this money.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="dateArea">Date</label>
          <DatePicker
            className="form-control"
            closeOnScroll={true}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <small id="dateHelp" className="form-text text-muted">
            Please select the date.
          </small>
        </div>
        <Link className="btn btn-outline-secondary btn-sm mr-1" to="/home">
          Back
        </Link>
        <button type="submit" className="btn btn-warning btn-sm">
          Add
        </button>
      </form>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
