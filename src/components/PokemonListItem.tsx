import React from 'react';
import Pokemon from '../models/pokemon';

const PokemonListItem: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <li><strong>{pokemon.name}</strong> - <span>{pokemon.id}</span></li>
  );
}

export default PokemonListItem;