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
        <CardList pokemon={this.state.pokemon}/>
      </div>
      );
    };
}

export default App;
