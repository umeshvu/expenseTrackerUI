import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";
import apis from "../config/apis";
import {
  addFnaInServerSuccess,
  addFnaFailure,
} from "../redux/action/fnaActions";

function Expense({ newFnaRec, addFnaInServerSuccess, addFnaFailure }) {
  const [startDate, setStartDate] = useState(new Date());
  const [alertShow, setAlertShow] = useState(false);
  const [newTempFnaRec, setNewFnaRec] = useState({
    amount: "",
    description: "",
  });

  function removeAlert() {
    setAlertShow(false);
  }

  const set = (name) => {
    return ({ target: { value } }) => {
      setNewFnaRec((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${apis.hostname}${apis.fna}`, {
        amount: newTempFnaRec.amount,
        description: newTempFnaRec.description,
        date: startDate,
        type: "exp", //financial activity type
        user_id: "1", //Hardcoding as 1, no login mechanism for now.
      })
      .then((response) => {
        const newFna = response.data;
        setAlertShow(true);
        addFnaInServerSuccess(newFna);
        setNewFnaRec({
          amount: "",
          description: "",
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        addFnaFailure(errorMessage); //Passing the error data to state
        setAlertShow(true);
      });
  };

  return (
    <div className="container">
      <br />
      <Alert
        variant="warning"
        show={alertShow}
        onClose={removeAlert}
        dismissible
      >
        {newFnaRec.error === "" ? "Added succefully" : `${newFnaRec.error}`}
      </Alert>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amountInput">Amount Spent</label>
          <input
            type="number"
            className="form-control"
            id="amountInput"
            aria-describedby="amountHelp"
            value={newTempFnaRec.amount}
            onChange={set("amount")}
            required
          />
          <small id="amountHelp" className="form-text text-muted">
            Amount you like to keep track as your expense.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="descriptionArea">Description</label>
          <input
            type="text"
            className="form-control"
            id="descriptionArea"
            aria-describedby="descriptionHelp"
            value={newTempFnaRec.description}
            onChange={set("description")}
            required
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
    addFnaInServerSuccess: (allFna) => {
      dispatch(addFnaInServerSuccess(allFna));
    },
    addFnaFailure: (errorMessage) => {
      dispatch(addFnaFailure(errorMessage));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    newFnaRec: state.newFnaRec,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
