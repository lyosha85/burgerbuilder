import React, { Component } from "react";
import People from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";
import classes from "./App.css";
import Aux from "../hoc/Aux";
import withClass from "../hoc/withClass";

export const AuthContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { id: 0, name: "Alex", age: 22 },
        { id: 1, name: "Manu", age: 23 },
        { id: 2, name: "Sarah", age: 24 }
      ],
      otherState: "some other state",
      showPeople: true,
      toggleClickedCount: 0,
      authenticated: false
    };
  }

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
    this.setState((prevState, props) => {
      return {
        showPeople: !prevState.showPeople,
        toggleClickedCount: prevState.toggleClickedCount + 1
      };
    });
  };

  deletePersonHandler = index => {
    const people = [...this.state.people];
    people.splice(index, 1);
    this.setState({ people: people });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    return (
      <Aux>
        <Cockpit
          appTitle={this.props.title}
          people={this.state.people}
          clicked={this.handlePeopleToggle}
          showPeople={this.state.showPeople}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {this.state.showPeople && (
            <People
              people={this.state.people}
              changed={this.handleNameChange}
              clicked={this.deletePersonHandler}
            />
          )}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
