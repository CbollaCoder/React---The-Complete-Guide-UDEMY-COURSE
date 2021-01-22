import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{

//state belongs to the class-based component
  state = {
    persons:[
      { name: 'Max', age:"50"},
      { name: 'Manu', age:"51"},
      { name: 'Stephanie', age:"52"},
    ]
  }

//Props are passed from outside
  render(){ //Method render
    return (
        <div className="App">
          <h1> Hello World </h1>
          <p> This is really working </p>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My hobby is: swimming </Person>
        </div>
      );
  }
}

export default App;
