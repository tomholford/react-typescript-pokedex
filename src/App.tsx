import React, { useState } from 'react';
import './App.css';

import PokedexAPIService from './services/pokedex_api_service';
import Pokemon from './models/pokemon';
import PokemonList from './components/PokemonList';

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[] | null>([]);

  const api = new PokedexAPIService();
  api.getPokemon().then((pokemon: Pokemon[]) => setPokemon(pokemon));

  return (
    <div className="App">
      <header className="App-header">
        <PokemonList pokemon={pokemon} />
      </header>
    </div>
  );
}

export default App;
