import React, { Component } from "react";
import { CURRENCYCODE } from "../../constants";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1
    };
  }
  editQty = e => {
    this.setState({
      qty: e.target.value
    });
    this.props.editQty(e, this.props.item.id);
  };
  addQty = () => {
    this.setState({
      qty: this.props.item.qty + 1
    });
    this.props.addQty(this.props.item.id);
  };
  removeItem = () => {
    this.props.removeItem(this.props.item.id);
  };
  removeQty = () => {
    this.setState({
      qty: this.props.item.qty - 1
    });
    this.props.removeQty(this.props.item.id);
  };

  render() {
    const { item, offeredPrice } = this.props;

    const currency = String.fromCharCode(CURRENCYCODE);
    return (
      <React.Fragment>
        <div className="item-img col-4">
          <img
            src={item.img_url}
            alt={item.name}
            className="img-fluid product-img"
          />
        </div>
        <div className="item-details col-8">
          <span className="product-name">{item.name}</span>
          <div className="product price">
            {item.discount && item.discount > 0 && (
              <span className="offeredPrice fw-600">
                {currency} {offeredPrice}
              </span>
            )}
            <span
              className={`actualPrice ${
                item.discount && item.discount ? "strickout" : "fw-600 p-0"
              }`}
            >
              {currency} {item.price}
            </span>
            {item.discount && item.discount > 0 && (
              <span className="discount fw-600">{item.discount}% off</span>
            )}
          </div>
          <div className="qtyBox d-flex">
            <button
              className="btn btn-link fa fa-minus"
              onClick={this.removeQty}
            />
            <input
              type="text"
              value={this.state.qty}
              className="form-control"
              onChange={e => {
                this.editQty(e, item.id);
              }}
            />
            <button className="btn btn-link fa fa-plus" onClick={this.addQty} />
          </div>
          <button className="btn btn-link fw-600" onClick={this.removeItem}>
            REMOVE
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default CartItem;
