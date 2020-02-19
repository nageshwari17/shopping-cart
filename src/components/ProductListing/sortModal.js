import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./plp.scss";

const Sort = props => {
  const [sortValue, setSortValue] = useState();

  const handleOnChange = e => {
    setSortValue(e.target.value);
  };

  const handleOnClick = () => {
    props.hideModal();
    props.handleSort(sortValue);
  };

  const handleOnClickBtn = value => {
    setSortValue(value);
    props.hideModal();
    props.handleSort(value);
  };

  return (
    <React.Fragment>
      {props.mobileView && (
        <Modal show={props.isOpen}>
          <Modal.Header>
            <span className="fw-600">Sort Options</span>
          </Modal.Header>
          <Modal.Body>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                name="sortProduct"
                value="HL"
                id="HL"
                checked={sortValue === "HL"}
                onChange={handleOnChange}
              />
              <label className="custom-control-label" htmlFor="HL">
                Price --High to Low
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                name="sortProduct"
                id="LH"
                value="LH"
                checked={sortValue === "LH"}
                onChange={handleOnChange}
              />
              <label className="custom-control-label" htmlFor="LH">
                Price --Low to High
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                name="sortProduct"
                id="discount"
                value="discount"
                checked={sortValue === "discount"}
                onChange={handleOnChange}
              />
              <label className="custom-control-label" htmlFor="discount">
                Discout
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="col-12 d-flex p-0">
              <button
                className="btn btn-link col-6 p-0 text-center fw-600"
                onClick={props.hideModal}
              >
                CANCEL
              </button>
              <button
                className="btn btn-link col-6 p-0 text-center fw-600"
                onClick={handleOnClick}
              >
                APPLY
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      )}
      {!props.mobileView && (
        <div className="desk-sort">
          <span className="fw-600">Sort by</span>
          <button
            className={`btn btn-link ${sortValue === "HL" ? "active" : ""} `}
            onClick={() => handleOnClickBtn("HL")}
          >
            Price --High to Low
          </button>
          <button
            className={`btn btn-link ${sortValue === "LH" ? "active" : ""} `}
            onClick={() => handleOnClickBtn("LH")}
          >
            Price --Low to High
          </button>
          <button
            className={`btn btn-link ${
              sortValue === "discount" ? "active" : ""
            } `}
            onClick={() => handleOnClickBtn("discount")}
          >
            Price --Discount
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Sort;
