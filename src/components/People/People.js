import React, { Component } from "react";
import Person from "./Person/Person";

class People extends Component {
  constructor(props) {
    super(props);
    this.lastPersonRef = React.createRef();
  }

  componentDidMount() {
    this.lastPersonRef.current.focus();
  }
  render() {
    return this.props.people.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
          clicked={() => this.props.clicked(index)}
          position={index}
          ref={this.lastPersonRef}
        />
      );
    });
  }
}
export default People;
