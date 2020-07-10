import React from 'react';
import './App.css';

import PokedexAPIService from './services/pokedex_api_service';
import Pokemon from './models/pokemon';

function App() {
  const api = new PokedexAPIService();

  api.getPokemon().then((pokemon: Pokemon[]) => console.log(pokemon));

  return (
    <div className="App">
      <header className="App-header">
        <p>pokeman</p>
      </header>
    </div>
  );
}

export default App;
