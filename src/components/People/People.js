import React, { Component } from "react";
import Person from "./Person/Person";

class People extends Component {
  render() {
    return (
      <div>
        {this.props.people.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => this.props.changed(event, person.id)}
              clicked={() => this.props.clicked(index)}
              position={index}
            />
          );
        })}
      </div>
    );
  }
}
export default People;
