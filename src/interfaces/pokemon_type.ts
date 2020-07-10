import PokemonTypeDetail from './pokemon_type_detail';

export default interface PokemonType {
  slot: number;
  type: Array<PokemonTypeDetail>;
}
