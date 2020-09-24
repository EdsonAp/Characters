import React, { Component } from "react";
import "./App.css";
import CardList from "./Components/card-list-component.jsx";

class App extends Component {
  state = {
    characters: [],
    searchField: ''
  };

  componentDidMount() {
    //fetch returns a promise
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) //
      .then((resp) => this.setState({ characters: resp }));
  }

  render() {
    return (
      <div className="App">
        <input type='search' placeholder='search characters' 
          onChange={e => this.setState({ searchField: e.target.value},
         () => console.log(this.state.searchField))}/>
        <CardList characters={this.state.characters}></CardList>
      </div>
    );
  }
}

export default App;
