import React from "react";
import classes from "./Person.css";

const Person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.clicked}> Hi, my name is {props.name} </p>
      <input value={props.name} onChange={props.changed} />
    </div>
  );
};

export default Person;
