import React, { Component } from "react";
import People from "../components/People/People";
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
    let headerClasses = [];

    if (this.state.people.length < 2) {
      headerClasses.push(classes.bold);
    }

    if (this.state.people.length < 3) {
      headerClasses.push(classes.red);
    }

    return (
      <div className={classes.App}>
        <p className={headerClasses.join(" ")}> Hi there</p>
        <button onClick={this.handlePeopleToggle}>
          {" "}
          {this.state.showPeople ? "Hide" : "Show"}
          {this.state.people.length}
        </button>

        <People
          people={this.state.people}
          changed={this.handleNameChange}
          clicked={this.deletePersonHandler}
        />
      </div>
    );
  }
}

export default App;
