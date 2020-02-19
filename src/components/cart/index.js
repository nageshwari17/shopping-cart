import React, { Component, Fragment } from "react";
import { CURRENCYCODE } from "../../constants";
import CartItem from "./cartItem";

class Cart extends Component {
  render() {
    const { cartItem, addQty, removeQty, removeItem, editQty } = this.props;
    const currency = String.fromCharCode(CURRENCYCODE);
    let totalQty = 0;
    let totalPrice = 0;
    let toatlDiscount = 0;
    return (
      <div className="cart-item-wrapper d-flex flex-wrap">
        <div className="col-12 p-0 col-lg-9">
          {cartItem &&
            cartItem.length > 0 &&
            cartItem.map(item => {
              const discount = (item.price * item.discount) / 100;
              const offeredPrice = item.price - discount;
              totalQty += item.qty;
              totalPrice += item.price * item.qty;
              toatlDiscount += discount * item.qty;
              return (
                <div className="col-12 d-flex cart-items" key={item.id}>
                  <CartItem
                    addQty={addQty}
                    removeQty={removeQty}
                    removeItem={removeItem}
                    offeredPrice={offeredPrice}
                    item={item}
                    editQty={editQty}
                  />
                </div>
              );
            })}
        </div>
        <div className="col-12 p-0 col-lg-3">
          {cartItem && cartItem.length > 0 && (
            <div className="cart-details">
              <h5>PRICE DETAILS</h5>
              <div>
                <span>
                  Price ( {totalQty} {totalQty > 1 ? "items" : "item"} ) :
                </span>
                <span>
                  {currency}
                  {totalPrice}
                </span>
              </div>
              <div>
                <span>Discount :</span>{" "}
                <span>
                  {currency}
                  {toatlDiscount}
                </span>
              </div>
              <div className="total">
                <span>Total Payable :</span>{" "}
                <span>
                  {currency}
                  {totalPrice - toatlDiscount}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
