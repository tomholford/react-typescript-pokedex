import React from 'react';
import PokemonType from '../models/pokemon_type';

const PokemonTypeBadge: React.FC<{ type: PokemonType }> = ({ type }) => {
  const badgeColor = (name: string) => {
    switch(name) {
      case 'fire':
        return 'is-danger';
      case 'water':
        return 'is-link';
      case 'grass':
        return 'is-success';
      case 'poison':
        return 'is-primary';
      case 'normal':
        return 'is-light';
      case 'steel':
          return 'is-light';
      case 'electric':
        return 'is-warning';
      case 'ghost':
        return 'is-white';
      case 'flying':
        return 'is-light';
      default:
        return 'is-light';
    }
  }

  return (
    <span className={['tag', 'is-light', badgeColor(type.name)].join(' ')}>{type.name}</span>
  );
}

export default PokemonTypeBadge;