import React from 'react';
import Pokemon from '../models/pokemon';
import PokemonType from '../models/pokemon_type';
import PokemonTypeBadge from './PokemonTypeBadge';

const PokemonListItem: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <div className="box">
      <article className="columns is-vcentered">
        <div className="column">
          <div className="content">
            <figure className="poke-image">
              <p className="image is-64x64">
                <img src={pokemon.spriteURL} alt=""/>
              </p>
            </figure>
          </div>
        </div>
        <div className="column">
          <div className="content">
            <p className="subtitle is-capitalized has-text-centered">{pokemon.displayName}</p>
          </div>
        </div>
        <div className="column">
          <div className="content">
            <div className="tags are-large">
              { pokemon.types?.map((type: PokemonType) => <PokemonTypeBadge key={type.key} type={type} />) }
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default PokemonListItem;