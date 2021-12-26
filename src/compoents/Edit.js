import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

export default function Edit(props) {
  const { id, type } = useParams(); //getting the param value
  const [startDate, setStartDate] = useState(new Date());
  const [fnaData, setFnaData] = useState(["1"]);

  useEffect(() => {
    const allData = props.data;
    const fna = allData.filter((fna) => btoa(fna.id) === id);
    // setFnaData(fna);
    console.log(fnaData);
  }, []);

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
