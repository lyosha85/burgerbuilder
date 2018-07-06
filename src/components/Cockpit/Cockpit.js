import React from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
  let headerClasses = [];
  let btnClass = "";

  if (props.people.length < 2) {
    headerClasses.push(classes.bold);
  }

  if (props.people.length < 3) {
    headerClasses.push(classes.red);
  }

  if (props.showPeople) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <p className={headerClasses.join(" ")}> Hi there</p>
      <button onClick={props.clicked} className={btnClass}>
        {" "}
        {props.showPeople ? "Hide" : "Show"}
        {props.people.length}
      </button>
    </div>
  );
};
export default Cockpit;
