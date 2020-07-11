import React, { useEffect, useState } from 'react';
import './App.css';

import Pokemon from './models/pokemon';
import PokemonList from './components/PokemonList';
import PokemonDataService from './services/pokemon_data_service';

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[] | null>([]);
  const dataService = new PokemonDataService();

  // empty dependency array to ensure it only triggers once
  useEffect(() => {
    dataService.init()
      .then(() => setPokemon(dataService.getPokemon))
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <header className="App-header">
        <PokemonList pokemon={pokemon} />
      </header>
    </div>
  );
}

export default App;
  