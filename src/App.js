import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

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
    let people = null;

    const style = {
      backgroundColor: "green",
      padding: "10px",
      margin: "20px",
      cursor: "pointer"
    };

    if (this.state.showPeople) {
      style.backgroundColor = "red";
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.handleNameChange(event, person.id)}
                clicked={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    let headerClasses = [];

    if (this.state.people.length < 2) {
      headerClasses.push("red");
    }

    if (this.state.people.length < 3) {
      headerClasses.push("bold");
    }

    return (
      <div className="App">
        <p className={headerClasses.join(" ")}> Hi there</p>
        <button onClick={this.handlePeopleToggle} style={style}>
          {" "}
          {this.state.showPeople ? "Hide" : "Show"}
          {this.state.people.length}
        </button>

        {people}
      </div>
    );
  }
}

export default App;