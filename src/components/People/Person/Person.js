import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.clicked}> Hi, my name is {this.props.name} </p>
        <input value={this.props.name} onChange={this.props.changed} />
      </div>
    );
  }
}

export default Person;
