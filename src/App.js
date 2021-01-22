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
    ],
    otherState: 'some other value'
  }


switchNameHandler = () => {
//console.log('Click');
// DON'T DO THIS:this.setstate.persons[0].name = 'Maximilian';
//The “setState()” is used to update this special state property. It will merge whatever it is defined there with the existing state.
//What React do is look at the first state and see which part of it was overwritten or changed.
    this.setState({
      persons:[
      { name: 'Maximilian', age:"100"},
      { name: 'Manu', age:"51"},
      { name: 'Stephanie', age:"52"},
    ]
  })
}


//Props are passed from outside
//<!-- {}: dynamic content. -->
  render(){ //Method render
    return (
        <div className="App">
          <h1> Hello World </h1>
          <p> This is really working </p>
          <button onClick={this.switchNameHandler}> Switch Name! </button> 
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My hobby is: swimming </Person>
        </div>
      );
  }
}

export default App;
