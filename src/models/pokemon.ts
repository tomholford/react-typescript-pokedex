import PokemonType from '../interfaces/pokemon_type';

export default class Pokemon {
  name: string;
  url: string;
  id?: number;
  types?: Array<PokemonType>;

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
    this.setId();
  }

  private setId() {
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
