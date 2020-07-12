import React from 'react';
import Pokemon from '../models/pokemon';
import PokemonType from '../models/pokemon_type';
import PokemonTypeBadge from './PokemonTypeBadge';

const PokemonListItem: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <div className="box">
      <article className="level">
        <figure className="level-item">
          <p className="image is-64x64">
            {/* <img src={pokemon.spriteURL} alt=""/> */}
          </p>
        </figure>
        <div className="level-item">
          <div className="content">
            <p className="subtitle displayname">{pokemon.displayName}</p>
          </div>
        </div>
        <div className="level-item">
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