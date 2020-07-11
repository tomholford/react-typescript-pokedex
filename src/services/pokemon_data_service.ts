import Pokemon from "../models/pokemon";
import PokedexAPIService from "./pokedex_api_service";

class PokemonDataService {
  static readonly MAX_POKEMON_ID = 152;

  private _pokemon: Pokemon[] = [];

  async load(): Promise<Pokemon[]> {
    if(!this.isCached) {
      this._pokemon = await this.loadFromAPI();
      this.populateCache();
    } else {
      this.loadFromCache();
    }

    return this.getPokemon;
  }

  get getPokemon(): Pokemon[] {
    return this._pokemon;
  }

  private async loadFromAPI(): Promise<Pokemon[]> {
    const api = new PokedexAPIService();
    
    return api.getPokemon().then((pokemon: Pokemon[]) => pokemon);
  }

  private populateCache() {
    this._pokemon.forEach((p: Pokemon) => {
      if(p.id !== undefined) {
        localStorage.setItem(p.id.toString(), p.toJson());
      }
    })
  }

  async loadFromCache() {
    let output = [];
    for (let i = 1; i < PokemonDataService.MAX_POKEMON_ID; i++) {
      const json = localStorage.getItem(i.toString());

      if(json !== null) {
        output.push(Pokemon.fromJson(json))
      }
    }

    this._pokemon = output;
  }

  private get isCached(): boolean {
    return localStorage.getItem('1') !== null;
  }
}

export default PokemonDataService;