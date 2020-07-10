import APIListResponse from '../interfaces/api_list_response';
import APIListResponseItem from '../interfaces/api_list_response_item';
import Pokemon from '../models/pokemon';

export default class PokedexAPIService {
  static readonly URI = 'https://pokeapi.co/api/v2/pokemon';

  async getPokemon(limit = 151): Promise<Array<Pokemon>> {
    const url = `${PokedexAPIService.URI}?limit=${limit}`;
    const response = await fetch(url);
    const parsed: APIListResponse = await response.json();
    const pokemon = parsed.results.map((i: APIListResponseItem) => new Pokemon(i.name));

    return pokemon;
  }
}
