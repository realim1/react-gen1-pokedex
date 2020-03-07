import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';
import axios from 'axios';

class App extends Component{
  
  constructor(){
    super();

    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/realim1/pokemonGo-json/master/PokemonGo.json')
    .then(res => this.setState({pokemon: res.data }));
  }
  
  
  render() {
    return (
      <div className='App'>
        <CardList name="Markus">
          {this.state.pokemon.map(pokemon => (
            <h1 key={pokemon.id}> {pokemon.name} </h1>
          ))}
        </CardList>
      </div>
      );
    };
}

export default App;
