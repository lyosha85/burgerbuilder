import React from "react";
import classes from "./Cockpit.css";
import Aux from "../../hoc/Aux";

const Cockpit = props => {
  let headerClasses = [];
  let btnClass = classes.Button;

  if (props.people.length < 2) {
    headerClasses.push(classes.bold);
  }

  if (props.people.length < 3) {
    headerClasses.push(classes.red);
  }

  if (props.showPeople) {
    btnClass = [classes.Button, classes.Red].join(" ");
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={headerClasses.join(" ")}> Hi there</p>
      <button onClick={props.clicked} className={btnClass}>
        {" "}
        {props.showPeople ? "Hide" : "Show"}
        {props.people.length}
      </button>
      <button onClick={props.login}> Login </button>
    </Aux>
  );
};
export default Cockpit;
