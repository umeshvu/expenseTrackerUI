import React from "react";

export default function ListActivities(props) {
  const fnaListItems = props.data;

  const listAllElems = fnaListItems.map((value, index) => {
    return (
      <li className="list-group-item">
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
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Edit
          </button>
        </div>
      </li>
    );
  });

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

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New message
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Recipient:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
