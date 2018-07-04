import React from "react";
import Radium from "radium";
import "./Person.css";

const Person = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
      backgroundColor: "red"
    }
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.clicked}> Hi, my name is {props.name} </p>
      <input value={props.name} onChange={props.changed} />
    </div>
  );
};

export default Person;
