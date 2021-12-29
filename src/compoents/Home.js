import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setFnaHomeSummary } from "../redux/action/fnaActions";

function Home({ homeSummary }) {
  return homeSummary.loading ? (
    <div className="text-center m-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="card text-left">
            <div className="card-header bg-secondary text-warning bg-muted">
              Current Balance - $ {homeSummary.balance.toFixed(2)}/-
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
              <p>Total Income - $ {homeSummary.totalIncome.toFixed(2)}</p>
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
              <p>Total Expense - $ {homeSummary.totalExepnse.toFixed(2)}</p>
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

const mapStateToProps = (state) => {
  return {
    homeSummary: state.fnaHome,
  };
};

export default connect(mapStateToProps, null)(Home);
