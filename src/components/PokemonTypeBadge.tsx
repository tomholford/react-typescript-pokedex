import React from 'react';
import PokemonType from '../models/pokemon_type';

const PokemonTypeBadge: React.FC<{ type: PokemonType }> = ({ type }) => {
  return (
    <span className="tag is-link is-light">{type.name}</span>
  );
}

export default PokemonTypeBadge;