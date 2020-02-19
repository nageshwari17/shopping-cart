import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./plp.scss";

const Filter = props => {
  const [priceRang, SetPriceRange] = useState({ min: 0, max: 1000 });

  const handleOnClick = () => {
    props.hideModal();
    props.handleFilters(priceRang);
  };

  return (
    <React.Fragment>
      {props.mobileView && (
        <Modal show={props.isOpen}>
          <Modal.Header>
            <span className="fw-600">Filter Options</span>
          </Modal.Header>
          <Modal.Body>
            <div className="price-range">
              <InputRange
                maxValue={1000}
                minValue={0}
                value={priceRang}
                // classNames="col-5"
                onChange={value => SetPriceRange(value)}
              />
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
        <div className="price-range col-9">
          <InputRange
            maxValue={1000}
            minValue={0}
            value={priceRang}
            // classNames="col-5"
            onChange={value => SetPriceRange(value)}
          />
          <button
            className="btn btn-primary col-6 text-center fw-600"
            onClick={handleOnClick}
          >
            APPLY
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Filter;
