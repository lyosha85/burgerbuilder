import React, { Component } from "react";
import People from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";
import classes from "./App.css";
class App extends Component {
  state = {
    people: [
      { id: 0, name: "Alex", age: 22 },
      { id: 1, name: "Manu", age: 23 },
      { id: 2, name: "Sarah", age: 24 }
    ],
    otherState: "some other state",
    showPeople: true
  };

  handleNameChange = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.people[personIndex] };
    person.name = event.target.value;
    const people = [...this.state.people];
    people[personIndex] = person;
    this.setState({ people: people });
  };

  handlePeopleToggle = () => {
    this.setState({ showPeople: !this.state.showPeople });
  };

  deletePersonHandler = index => {
    const people = [...this.state.people];
    people.splice(index, 1);
    this.setState({ people: people });
  };

  render() {
    return (
      <div className={classes.App}>
        <Cockpit
          people={this.state.people}
          clicked={this.handlePeopleToggle}
          showPeople={this.state.showPeople}
        />
        {this.state.showPeople && (
          <People
            people={this.state.people}
            changed={this.handleNameChange}
            clicked={this.deletePersonHandler}
          />
        )}
      </div>
    );
  }
}

export default App;
