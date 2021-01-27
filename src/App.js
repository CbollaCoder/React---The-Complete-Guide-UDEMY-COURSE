import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//There is two ways of adding styling
//1. By adding a css class
//2. INLINE STYLES: By adding a prop in the based-class component but there are some restrictions of not being able to leverage the full power css.
//3. Global in the App.css

class App extends Component {

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

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
// Important: always update state in an inmutable fashion without mutating the original state first.
//Create a copy and then update the state with said state.

togglePersonHandler = (event) => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    const style= {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person
            click={() => this.deletePersonHandler(index)} 
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}
             />
            })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;