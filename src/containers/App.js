import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    //We could also initialize the state.
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

//Static method so we add the word "static".
  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount(){
    console.log('[App.js] componentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
}

nameChangeHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };
  //const person = Object.assign({}, this.state.persons[personIndex])

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState( {persons: persons} );
}

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.slice(); //slide method creates a copy of the persons array before manipulating it.
  const persons = [...this.state.persons]; // a new array with the objects from the old array but not the old array itself.
  persons.splice(personIndex, 1); //removes 1 element from the array
  this.setState({persons: persons});
}

togglePersonHandler = (event) => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}


  render() {
    console.log('[App.js] render');
    let persons = null;


    if(this.state.showPersons){
      persons = (
        <Persons 
            persons= {this.state.persons}
            clicked= {this.deletePersonHandler}
            changed= {this.nameChangeHandler} 
        />
      );
  }

    return (
      <div className={classes.App}>
          <Cockpit 
            showPersons={this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersonHandler} />
          {persons}
      </div>
    );
    
  }
}

export default App;