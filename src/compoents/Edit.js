import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getFnaById } from "../redux/action/fnaActions";
import { Alert } from "react-bootstrap";
import apis from "../config/apis";
import Loading from "./Loading";
import { editFnaFailure } from "../redux/action/fnaActions";
import "react-datepicker/dist/react-datepicker.css";

function Edit({ allFnaData, currentElement, getFnaById, editFnaFailure }) {
  const { id, type } = useParams(); //getting the param value
  const [startDate, setStartDate] = useState(new Date()); //For datepicker
  const [alertShow, setAlertShow] = useState(false);
  const [newTempFnaRec, setNewFnaRec] = useState({
    amount: 0,
    description: "",
    date: "",
  });

  useEffect(() => {
    if (allFnaData.fnaList.length > 0) {
      getFnaById(allFnaData.fnaList, parseInt(atob(id)));
    }
  }, [allFnaData]);

  useEffect(() => {
    if (currentElement.loading != true) {
      setNewFnaRec({
        amount: currentElement.amount,
        description: currentElement.description,
        date: currentElement.date,
      });

      const date = new Date(currentElement.date);
      setStartDate(date);
    }
  }, [currentElement]);

  const set = (name) => {
    return ({ target: { value } }) => {
      setNewFnaRec((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  function removeAlert() {
    setAlertShow(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`${apis.hostname}${apis.fna}`, {
        amount: parseInt(newTempFnaRec.amount),
        description: newTempFnaRec.description,
        date: startDate,
        id: currentElement.id,
      })
      .then((response) => {
        const editedFna = response.data;
        setAlertShow(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        editFnaFailure(errorMessage);
        setAlertShow(true);
      });
  };

  return currentElement.loading ? (
    <Loading />
  ) : (
    <div className="container">
      <br />
      <Alert
        variant="warning"
        show={alertShow}
        onClose={removeAlert}
        dismissible
      >
        {currentElement.error === ""
          ? "Edited succefully"
          : `${currentElement.error}`}
      </Alert>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {type === "exp" ? (
            <label htmlFor="amountArea">Amount Spent</label>
          ) : (
            <label htmlFor="amountArea">Amount Earned</label>
          )}
          <input
            type="number"
            className="form-control"
            id="amountArea"
            aria-describedby="amountHelp"
            value={newTempFnaRec.amount}
            onChange={set("amount")}
            required
          />

          {type === "exp" ? (
            <small id="amountHelp" className="form-text text-muted">
              Amount you like to keep track as your expense.
            </small>
          ) : (
            <small id="amountHelp" className="form-text text-muted">
              Amount you like to keep track as your income.
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

        <Link
          className="btn btn-outline-secondary btn-sm mr-1"
          to="/list-activities"
        >
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
    editFnaFailure: (error) => {
      dispatch(editFnaFailure(error));
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
