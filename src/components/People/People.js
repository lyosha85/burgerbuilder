import React from "react";
import Person from "./Person/Person";

const People = props => (
  <div>
    {props.people.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => props.changed(event, person.id)}
          clicked={() => props.clicked(index)}
        />
      );
    })}
  </div>
);
export default People;
