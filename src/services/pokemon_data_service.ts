import Pokemon from "../models/pokemon";
import PokedexAPIService from "./pokedex_api_service";
import PokemonType from "../models/pokemon_type";

class PokemonDataService {
  static readonly MAX_POKEMON_ID = 152;

  private _pokemon: Pokemon[] = [];

  async load(): Promise<Pokemon[]> {
    if(!this.isCached) {
      this._pokemon = await this.loadFromAPI();
      await this.loadTypes();
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

  private async loadTypes() {
    const queue = this._pokemon.map((p: Pokemon) => this.updateTypes(p));

    return Promise.all(queue);
  }

  async updateTypes(pokemon: Pokemon) {
    if(pokemon.types) {
      return;
    }

    const api = new PokedexAPIService();

    return api.getTypes(pokemon).then((types: PokemonType[]) => { 
      pokemon.types = types;
    })
  }

  private populateCache() {
    this._pokemon.forEach((p: Pokemon) => {
      this.updateCache(p);
    })
  }

  updateCache(pokemon: Pokemon) {
    if(pokemon.id !== undefined) {
      localStorage.setItem(pokemon.id.toString(), pokemon.toJson());
    }
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