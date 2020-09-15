import React, { Component } from 'react';
import './App.css';

class App extends Component{

  state = {
    character : [
      {name: 'Sky', id: 1},
      {name: 'Rubble', id: 2},
      {name: 'Chase', id: 3}
    ]
  }

  componentDidMount(){
    //fetch returns a promise
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) //
    .then(resp => console.log(resp))
  }

  render(){
    return (
      <div className="App">
        {
          this.state.character.map(character=> <h1 key={character.id}> {character.name} </h1>)
        }
      </div>
    );
  }

}

export default App;
