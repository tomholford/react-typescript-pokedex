import React from 'react';
import Pokemon from '../models/pokemon';
import PokemonListItem from './PokemonListItem';

const PokemonList: React.FC<{ pokemon: Pokemon[] | null }> = ({ pokemon }) => {
  return (
    <ul>
      { pokemon?.map((p) => <PokemonListItem pokemon={p} />) }
    </ul>
  );
}

export default PokemonList;