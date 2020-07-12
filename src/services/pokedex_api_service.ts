import APIListResponse from '../interfaces/api_list_response';
import APIListResponseItem from '../interfaces/api_list_response_item';
import Pokemon from '../models/pokemon';
import PokemonType from '../models/pokemon_type';
import APIDetailResponse from '../interfaces/api_detail_response';
import APITypeDetail from '../interfaces/api_type_detail';

export default class PokedexAPIService {
  static readonly URI = 'https://pokeapi.co/api/v2/pokemon';

  async getPokemon(limit = 151): Promise<Pokemon[]> {
    const url = `${PokedexAPIService.URI}?limit=${limit}`;
    const response = await fetch(url);
    const parsed: APIListResponse = await response.json();
    const pokemon = parsed.results.map((i: APIListResponseItem) => new Pokemon(i.name, i.url));

    return pokemon;
  }

  async getTypes(pokemon: Pokemon): Promise<PokemonType[]> {
    const url = `${PokedexAPIService.URI}/${pokemon.id}`;
    const response = await fetch(url);
    const parsed: APIDetailResponse = await response.json();
    const types = parsed.types.map((i: APITypeDetail) =>  PokemonType.fromAPITypeDetail(i));

    return types;
  }
}
