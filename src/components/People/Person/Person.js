import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  render() {
    return (
      <Aux classes={classes.Person}>
        <p onClick={this.props.clicked}> Hi, my name is {this.props.name} </p>
        <input value={this.props.name} onChange={this.props.changed} />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
