import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Expense() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="container">
      <br />
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Amount Spent</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            Amount you like to keep a track as your income.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Description</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            Say something about this money.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Date</label>
          <DatePicker
            className="form-control"
            closeOnScroll={true}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <small id="emailHelp" className="form-text text-muted">
            Please select the date.
          </small>
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
}
