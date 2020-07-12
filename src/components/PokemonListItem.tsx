import React from 'react';
import Pokemon from '../models/pokemon';
import PokemonType from '../models/pokemon_type';
import PokemonTypeBadge from './PokemonTypeBadge';

const PokemonListItem: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <div className="column is-full-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title is-capitalized">
          {pokemon.displayName}
          </p>
        </header>
        <div className="card-image">
          <figure className="image is-square">
            <img src={pokemon.spriteURL} alt=""/>
          </figure>
        </div>
        <div className="card-content">
          <div className="tags are-large">
            { pokemon.types?.map((type: PokemonType) => <PokemonTypeBadge key={type.key} type={type} />) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonListItem;