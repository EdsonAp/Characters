import React, { Component } from "react";
import "./App.css";
import CardList from "./Components/card-list-component.jsx";
import SearchBox from './Components/searchBox'

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

  searchHandler = (e) => {
    return(
      this.setState( { searchField: e.target.value } ),
      console.log(e.target.value)
    );
  }

  render() {
    //Destructure state
    const {characters, searchField} = this.state;
    //filter method using desctrucuted characters
    const filteredCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )

    return (
      <div className="App">
        <SearchBox searchHandler={this.searchHandler} placeholder='Search Character'/>
        <CardList characters={filteredCharacters}></CardList>
      </div>
    );
  }
}

export default App;
