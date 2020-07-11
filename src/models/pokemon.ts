import PokemonType from '../interfaces/pokemon_type';

export default class Pokemon {
  name: string;
  url: string;
  id?: number;
  types?: PokemonType[];

  constructor(name: string, url: string, id?: number, types?: PokemonType[]) {
    this.name = name;
    this.url = url;
    this.id = id;
    this.types = types;
    this.ensureID();
  }

  toJson(): string {
    return JSON.stringify(this);
  }

  static fromJson(json: string): Pokemon {
    const parsed = JSON.parse(json);

    return new Pokemon(parsed.name, parsed.url, parsed.id, parsed.types);
  }

  get key(): number | string {
    return this.id || this.name;
  }

  private ensureID() {
    if(this.id) {
      return;
    }

    const idRegex = /(?<=\/)(\d{1,3})/;
    const match = idRegex.exec(this.url);

    if(match !== null) {
      this.id = Number(match[0]);
    }
  }
}
