import APITypeDetail from '../interfaces/api_type_detail';

export default class PokemonType {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  get key(): string {
    return this.name;
  }

  static fromAPITypeDetail(parsedJson: APITypeDetail): PokemonType {
    return new PokemonType(parsedJson.type.name);
  }
}
