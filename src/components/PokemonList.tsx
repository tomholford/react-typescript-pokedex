import React from 'react';
import Pokemon from '../models/pokemon';
import PokemonListItem from './PokemonListItem';

const PokemonList: React.FC<{ pokemon: Pokemon[] | null }> = ({ pokemon }) => {
  return (
    <div className="">
      { pokemon?.map((p) => <PokemonListItem pokemon={p} key={p.key} />) }
    </div>
  );
}

export default PokemonList;