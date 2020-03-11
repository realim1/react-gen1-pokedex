import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { Searchbox } from './components/search-box/search-box.component';

import './App.css';
import axios from 'axios';

class App extends Component{
  
  constructor(){
    super();

    this.state = {
      searchField: "",
      pokemon: []
    };
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/realim1/pokemonGo-json/master/PokemonGo.json')
    .then(res => this.setState({pokemon: res.data }));
  }
  
  //Because of ES6 Arrow Function, we do not need to bind the this key word.
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {

    const { pokemon, searchField } = this.state;
    const filteredPokemon = pokemon.filter( pokemon => 
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
        <Searchbox
          placeholder='Search Pokemon'
          changeHandler={this.handleChange}
        />
        <CardList pokemon={filteredPokemon}/>
      </div>
      );
    };
}

export default App;
