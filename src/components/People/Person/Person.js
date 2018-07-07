import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  constructor(props) {
    super(props);
    this.nameInputElement = React.createRef();
  }

  componentDidMount() {
    if (this.props.position === 0) {
      this.nameInputElement.current.focus();
    }
  }

  focus() {
    this.nameInputElement.current.focus();
  }

  render() {
    return (
      <Aux classes={classes.Person}>
        <p onClick={this.props.clicked}> Hi, my name is {this.props.name} </p>
        <input
          ref={this.nameInputElement}
          value={this.props.name}
          onChange={this.props.changed}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  position: PropTypes.number
};

export default withClass(Person, classes.Person);
