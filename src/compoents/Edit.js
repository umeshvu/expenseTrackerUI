import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getFnaById } from "../redux/action/fnaActions";

import "react-datepicker/dist/react-datepicker.css";

function Edit({ allFnaData, currentElement, getFnaById }) {
  const { id, type } = useParams(); //getting the param value
  const [startDate, setStartDate] = useState(new Date()); //For datepicker

  useEffect(() => {
    if (allFnaData.fnaList.length > 0) {
      getFnaById(allFnaData.fnaList, parseInt(atob(id)));
    }
  }, [allFnaData]);

  useEffect(() => {
    if (currentElement.loading != true) {
      const date = new Date(currentElement.date);
      setStartDate(date);
    }
  }, [currentElement]);

  return (
    <div className="container">
      <br />
      <form>
        <div className="form-group">
          {type === "exp" ? (
            <label htmlFor="amountArea">Amount Spent</label>
          ) : (
            <label htmlFor="amountArea">Amount Earned</label>
          )}
          <input
            type="text"
            className="form-control"
            id="amountArea"
            aria-describedby="amountHelp"
            value={currentElement.amount}
          />

          {type === "exp" ? (
            <small id="amountHelp" className="form-text text-muted">
              Amount you like to keep a track as your expense.
            </small>
          ) : (
            <small id="amountHelp" className="form-text text-muted">
              Amount you like to keep a track as your income.
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="descriptionArea">Description</label>
          <input
            type="text"
            className="form-control"
            id="descriptionArea"
            aria-describedby="descriptionHelp"
            value={currentElement.description}
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

        <Link className="btn btn-secondary btn-sm mr-1" to="/list-activities">
          Back
        </Link>

        <button type="submit" className="btn btn-warning btn-sm">
          Update
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFnaById: (fnaData, id) => {
      dispatch(getFnaById(fnaData, id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    allFnaData: state.fnaList,
    currentElement: state.fnaEdit,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
