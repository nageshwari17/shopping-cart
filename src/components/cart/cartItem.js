import React, { Component } from "react";
import ProductDetails from "../common/productDetails";
import ImageThubnail from "../common/imageThubnail";

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
    return (
      <React.Fragment>
        <div className="item-img col-4">
          <ImageThubnail item={item} />
        </div>
        <div className="item-details col-8">
          <ProductDetails item={item} offeredPrice={offeredPrice} />
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
