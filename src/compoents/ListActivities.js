import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Modal, Alert } from "react-bootstrap";
import { deleteFnaFromServer } from "../redux/action/fnaActions";

function ListActivities({ fnaData, fnaDelete, deleteFnaFromServer }) {
  const [show, setShow] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  const [deleteRec, setDeleteId] = useState({ id: 0, description: "" });

  const handleClose = () => setShow(false);

  function handleModalShow(id, description) {
    setDeleteId({ id: id, description: description });
    setShow(true);
  }

  function deleteEntry(deleteRec) {
    deleteFnaFromServer(deleteRec.id);
    setAlertShow(true);
    setShow(false);
  }

  function removeAlert() {
    setAlertShow(false);
  }

  return fnaData.loading ? (
    <h2>Data is loading</h2>
  ) : fnaData.error ? (
    <h2>{fnaData.error}</h2>
  ) : (
    <div className="container">
      <br />
      <Alert
        variant="warning"
        show={alertShow}
        onClose={removeAlert}
        dismissible
      >
        {fnaDelete.error === ""
          ? ` <p>Deleted ${fnaDelete.description}!</p>`
          : `${fnaDelete.error}`}
      </Alert>
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
                      handleModalShow(value.id, value.description);
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
        <Modal.Header closeButton>Do you want this entry gone?</Modal.Header>
        <Modal.Body>{deleteRec.description}</Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-outline-danger btn-sm mr-1"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="btn btn-outline-danger btn-sm mr-1"
            onClick={() => deleteEntry(deleteRec)}
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
    fnaDelete: state.fnaDelete,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFnaFromServer: (id) => {
      dispatch(deleteFnaFromServer(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListActivities);
