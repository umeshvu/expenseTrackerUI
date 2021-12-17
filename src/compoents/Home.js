import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="card text-left">
            <div className="card-header bg-secondary text-warning bg-muted">
              Current Balance - $ 128/-
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 cardClass">
          <div className="card text-left">
            <div className="card-header text-info">Income</div>
            <div className="card-body">
              <p>Total Income - 120$</p>
              <Link className="btn btn-secondary btn-sm" to="/add-income">
                Income+
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
          <div className="card text-left">
            <div className="card-header text-info">Expense</div>
            <div className="card-body">
              <p>Total Expense - 120$</p>
              <Link className="btn btn-secondary btn-sm" to="/add-expense">
                Expense+
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
