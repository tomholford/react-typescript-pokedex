import Pokemon from "../models/pokemon";
import PokedexAPIService from "./pokedex_api_service";

class PokemonDataService {
  static readonly MAX_POKEMON_ID = 152;

  pokemon: Pokemon[] = [];

  async init(): Promise<void> {
    if(this.isCached) {
      this.loadFromCache();
    } else {
      await this.cacheData();
    }
  }

  async cacheData(){
    const api = new PokedexAPIService();

    api.getPokemon().then((pokemon: Pokemon[]) => {
      pokemon.forEach((p: Pokemon) => {
        if(p.id !== undefined) {
          localStorage.setItem(p.id.toString(), p.toJson());
        }
      })
    });
  }

  get getPokemon(): Pokemon[] {
    return this.pokemon;
  }

  loadFromCache() {
    let output = [];
    for (let i = 1; i < PokemonDataService.MAX_POKEMON_ID; i++) {
      const json = localStorage.getItem(i.toString());

      if(json !== null) {
        output.push(Pokemon.fromJson(json))
      }
    }

    this.pokemon = output;
  }

  private get isCached(): boolean {
    return localStorage.getItem('1') !== null;
  }
}

export default PokemonDataService;