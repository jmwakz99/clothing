import React from "react";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../checkout-item/checkout-item.component";

import {
  selectCartTotal,
  selectCartItems,
} from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";

const Checkout = ({ cartItems, total, dispatch }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span className="product">product</span>
      </div>
      <div className="header-block">
        <span>description</span>
      </div>
      <div className="header-block">
        <span>quantity</span>
      </div>
      <div className="header-block">
        <span>price</span>
      </div>
      <div className="header-block">
        <span className="remove">remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <div>
      <StripeCheckoutButton price={total} />
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
