import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button";
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
      <p>Price: {props.totalPrice}</p>
      <p>Checkout?</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseProceedeed} btnType="Success">
        PROCEED
      </Button>
    </Aux>
  );
};

export default orderSummary;
