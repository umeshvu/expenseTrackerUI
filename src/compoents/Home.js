import React from "react";

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
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="card text-left">
            <div className="card-header text-info">Income</div>
            <div className="card-body">
              <p>Total Income - 120$</p>
              <button type="button" class="btn btn-secondary btn-sm">
                Income+
              </button>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="card text-left">
            <div className="card-header text-info">Expense</div>
            <div className="card-body">
              <p>Total Expense - 120$</p>
              <button type="button" class="btn btn-secondary btn-sm">
                Expense+
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
