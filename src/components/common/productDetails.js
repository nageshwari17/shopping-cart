import React from "react";
import { CURRENCYCODE } from "../../constants";

const ProductDetails = props => {
  const currency = String.fromCharCode(CURRENCYCODE);
  const { item, offeredPrice } = props;
  return (
    <React.Fragment>
      <span className="product-name">{item.name}</span>
      <div className="product price">
        {item.discount !== undefined && item.discount > 0 && (
          <span className="offeredPrice fw-600">
            {currency}
            {offeredPrice}
          </span>
        )}
        <span
          className={`actualPrice ${
            item.discount && item.discount ? "strickout" : "fw-600 p-0"
          }`}
        >
          {currency}
          {item.price}
        </span>
        {item.discount !== undefined && item.discount > 0 && (
          <span className="discount fw-600">{item.discount}% off</span>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
