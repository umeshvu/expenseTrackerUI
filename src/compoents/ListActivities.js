import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function ListActivities({ fnaData }) {
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const handleClose = () => setShow(false);

  function handleShow(id) {
    setDeleteId(id);
    setShow(true);
  }

  function deleteEntry(id) {
    console.log(id);
  }

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

                  <button
                    onClick={() => {
                      handleShow(value.id);
                    }}
                    className="btn btn-outline-danger btn-sm mr-1"
                  >
                    Delete
                  </button>
                </div>

                <Link
                  className="btn btn-outline-warning btn-sm"
                  to={`/edit/${btoa(value.id)}/${value.type}`}
                >
                  Edit
                </Link>
              </li>
            );
          })}
      </ul>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Entry!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want this entry gone?</Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-outline-danger btn-sm mr-1"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="btn btn-outline-danger btn-sm mr-1"
            onClick={() => deleteEntry(deleteId)}
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    fnaData: state.fnaList,
  };
};

export default connect(mapStateToProps, null)(ListActivities);
