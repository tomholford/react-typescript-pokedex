import PokemonType from '../interfaces/pokemon_type';

export default class Pokemon {
  name: string;
  id?: number;
  types?: Array<PokemonType>;

  constructor(name: string) {
    this.name = name;
  }
}
