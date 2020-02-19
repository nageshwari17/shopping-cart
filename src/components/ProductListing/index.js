import React, { Fragment, useState } from "react";
import { CURRENCYCODE } from "../../constants";
import Sort from "./sortModal";
import Filter from "./filter";

const ProductListing = props => {
  const { items, addTocart, handleSort, handleFilters } = props;
  const currency = String.fromCharCode(CURRENCYCODE);
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const showFilterModal = () => {
    setIsFilterOpen(true);
  };

  const hideFilterModal = () => {
    setIsFilterOpen(false);
  };

  return (
    <Fragment>
      <div className="d-flex flex-wrap">
        <div className="filter-sort-wrapper col-12 col-md-3 col-lg-2">
          <div className="row">
            {props.mobileView && (
              <div className="sort col-6 text-center">
                <h5 onClick={showModal} className="cursor-pointer">
                  <i className="fa fa-sort" aria-hidden="true" /> Sort
                </h5>
              </div>
            )}

            <div className="filters col-6 col-lg-12 text-center">
              {props.mobileView && (
                <h5 onClick={showFilterModal} className="cursor-pointer">
                  <i className="fa fa-filter fa-2" aria-hidden="true" />
                  Filter
                </h5>
              )}
              {!props.mobileView && <h5 onClick={showFilterModal}>Filters</h5>}

              <Filter
                handleSort={handleSort}
                isOpen={isFilterOpen}
                hideModal={hideFilterModal}
                handleFilters={handleFilters}
                mobileView={props.mobileView}
              />
            </div>
          </div>
        </div>
        <div className="plp-wrapper col-12 col-md-9 col-lg-10">
          <Sort
            handleSort={handleSort}
            isOpen={isOpen}
            hideModal={hideModal}
            mobileView={props.mobileView}
          />
          <div className="row productlist">
            {items.map(item => {
              const offeredPrice =
                item.price - (item.price * item.discount) / 100;
              return (
                <div key={item.id} className="col-6 col-md-20">
                  <img
                    src={item.img_url}
                    className="img-fluid product-img"
                    alt={item.name}
                  />
                  <div className="list-bottom">
                    <span className="product-name">{item.name}</span>
                    <div className="product price">
                      {item.discount !== undefined && item.discount > 0 && (
                        <span className="offeredPrice fw-600">
                          {currency} {offeredPrice}
                        </span>
                      )}
                      <span
                        className={`actualPrice ${
                          item.discount && item.discount
                            ? "strickout"
                            : "fw-600 p-0"
                        }`}
                      >
                        {currency} {item.price}
                      </span>
                      {item.discount !== undefined && item.discount > 0 && (
                        <span className="discount fw-600">
                          {item.discount}% off
                        </span>
                      )}
                    </div>
                    <div className="cart-btn text-center">
                      <button
                        className="btn btn-primary addtocart"
                        onClick={() => addTocart(item.id)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductListing;
