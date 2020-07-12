import React, { useEffect, useState } from 'react';
import './App.scss';

import Pokemon from './models/pokemon';
import PokemonList from './components/PokemonList';
import PokemonDataService from './services/pokemon_data_service';
import SearchBox from './components/SearchBox';

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon[] | null>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[] | null>([]);
  const dataService = new PokemonDataService();

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  }

  const filterPokemon = () => {
    if(searchQuery === '') {
      setFilteredPokemon(pokemon);
      return;
    }

    const output = pokemon?.filter((p: Pokemon) => p.name.includes(searchQuery) || p.id?.toString().includes(searchQuery)) || [];
    setFilteredPokemon(output);
  }

  useEffect(() => {
    dataService.load()
      .then((pokemon: Pokemon[]) => {
        setPokemon(pokemon);
        setFilteredPokemon(pokemon);
        setDataLoaded(true);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    filterPokemon();
  }, [searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container">
        <h1 className="title">
          Pokedex
        </h1>
      { 
        dataLoaded ? 
          <React.Fragment>
            <div className="content">
              <p>Showing {filteredPokemon?.length || 0} result(s).</p>
            </div>
            <SearchBox onChange={onSearch} />
            <PokemonList pokemon={filteredPokemon} />
          </React.Fragment> :
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
