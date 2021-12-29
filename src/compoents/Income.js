import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

export default function Income() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="container">
      <br />
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Amount Earned</label>
          <input
            type="text"
            className="form-control"
            id="amountArea"
            aria-describedby="amountHelp"
          />
          <small id="amountHelp" className="form-text text-muted">
            Amount you like to keep a track as your income.
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
        <Link className="btn btn-secondary btn-sm mr-1" to="/home">
          Back
        </Link>
        <button type="submit" className="btn btn-warning btn-sm">
          Add
        </button>
      </form>
    </div>
  );
}
