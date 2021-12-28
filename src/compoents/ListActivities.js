import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ListActivities({ fnaData }) {
  return fnaData.loading ? (
    <h2>Data is loading</h2>
  ) : fnaData.error ? (
    <h2>{fnaData.error}</h2>
  ) : (
    <div className="container">
      <br />
      <ul className="list-group">
        {fnaData &&
          fnaData.fnaList &&
          fnaData.fnaList.map((value) => {
            return (
              <li className="list-group-item" key={btoa(value.id)}>
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">${value.amount}</h5>
                  <small>
                    {new Intl.DateTimeFormat("en-US").format(
                      new Date(value.date)
                    )}
                  </small>
                </div>
                <p className="mb-1">{value.description}</p>
                <div className="d-flex w-100 justify-content-between">
                  {value.type === "exp" ? (
                    <small className="_expense">Expense</small>
                  ) : (
                    <small className="_income">Income</small>
                  )}

                  <Link
                    className="btn btn-outline-warning btn-sm"
                    to={`/edit/${btoa(value.id)}/${value.type}`}
                  >
                    Edit
                  </Link>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    fnaData: state.fnaList,
  };
};

export default connect(mapStateToProps, null)(ListActivities);
