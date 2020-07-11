import React, { useEffect, useState } from 'react';
import './App.scss';

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
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;
