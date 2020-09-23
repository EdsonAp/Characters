import React, { Component } from 'react';
import './App.css';
import CardList from './Components/card-list-component.jsx'


class App extends Component{

  state = {
    characters : []
  }

  componentDidMount(){
    //fetch returns a promise
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) //
    .then(resp => this.setState({ characters: resp}))
  }

  render(){
    return (
      <div className="App">
      <CardList characters={this.state.characters}>
      </CardList>
      </div>  
    );
  }

}

export default App;
