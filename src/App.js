import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  render(){
    return (
        <div className="App">
          <h1> Hello World </h1>
          <p> This is really working </p>
          <Person name="Manu" age="25"/>
          <Person name="Marie" age="33" />
          <Person name="Carl" age="22"> My hobby is: swimming </Person>
        </div>
      );
  }
}

export default App;
