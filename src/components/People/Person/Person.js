import React, { Component } from "react";
import classes from "./Person.css";
import WithClass from "../../../hoc/withClass";

class Person extends Component {
  render() {
    return (
      <WithClass classes={classes.Person}>
        <p onClick={this.props.clicked}> Hi, my name is {this.props.name} </p>
        <input value={this.props.name} onChange={this.props.changed} />
      </WithClass>
    );
  }
}

export default Person;
