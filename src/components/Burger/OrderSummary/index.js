import React from "react";
import Aux from "../../../hoc/Aux";
const orderSummary = props => {
  const orderSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>
        :
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h1>Your Order</h1>
      <ul>{orderSummary}</ul>
      <p>Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
