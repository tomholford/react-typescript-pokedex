import React, { useEffect, useState } from 'react';
import './App.css';

import Pokemon from './models/pokemon';
import PokemonList from './components/PokemonList';
import PokemonDataService from './services/pokemon_data_service';

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[] | null>([]);

  const dataService = new PokemonDataService();
  useEffect(() => {
    dataService.load()
      .then((pokemon: Pokemon[]) => setPokemon(pokemon));
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
