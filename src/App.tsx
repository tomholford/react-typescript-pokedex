import React, { useEffect, useState } from 'react';
import './App.scss';

import Pokemon from './models/pokemon';
import PokemonList from './components/PokemonList';
import PokemonDataService from './services/pokemon_data_service';

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon[] | null>([]);
  const dataService = new PokemonDataService();

  useEffect(() => {
    dataService.load()
      .then((pokemon: Pokemon[]) => {
        setPokemon(pokemon);
        setDataLoaded(true);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      { 
        dataLoaded ? 
          <PokemonList pokemon={pokemon} /> :
          <div className="container">
            <div className="content">
              <progress className="progress is-small is-primary" max="100"></progress> 
            </div>
          </div>
      }
    </div>
  );
}

export default App;
