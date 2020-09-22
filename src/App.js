import React, { Component } from 'react';
import './App.css';
import CardList from './Components/card-list-component.jsx'

class App extends Component{

  state = {
    character : []
  }

  componentDidMount(){
    //fetch returns a promise
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) //
    .then(resp => this.setState({ character: resp}))
  }

  render(){
    return (
      <div className="App">
      <CardList name='Edson'>
        {this.state.character.map(character=> <h1 key={character.id}> {character.name} </h1>)}
      </CardList>
      </div>  
    );
  }

}

export default App;
