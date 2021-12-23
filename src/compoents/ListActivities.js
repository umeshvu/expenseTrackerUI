import React from "react";

export default function ListActivities(props) {
  const fnaListItems = props.data;

  const listAllElems = fnaListItems.map((value, index) => {
    return (
      <li className="list-group-item" key={btoa(index)}>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">${value.amount}</h5>
          <small>{value.date}</small>
        </div>
        <p className="mb-1">{value.description}</p>
        <div className="d-flex w-100 justify-content-between">
          {value.type === "exp" ? (
            <small className="_expense">Expense</small>
          ) : (
            <small className="_income">Income</small>
          )}

          <button
            type="button"
            className="btn btn-outline-warning btn-sm"
            // onClick={}
          >
            Edit
          </button>
        </div>
      </li>
    );
  });
  console.log(listAllElems);
  return (
    <div className="container">
      <br />
      <div
        className="btn-group btn-group-toggle _buttongroupClass"
        data-toggle="buttons"
      >
        <label className="btn btn-secondary active">
          <input type="radio" name="options" id="option1" checked />
          All
        </label>
        <label className="btn btn-secondary">
          <input type="radio" name="options" id="option2" />
          Income
        </label>
        <label className="btn btn-secondary">
          <input type="radio" name="options" id="option3" />
          Expense
        </label>
      </div>
      <ul className="list-group">{listAllElems}</ul>
    </div>
  );
}
