import { PokemonLista } from "./pokemon.lista";
import { Allenatori } from "./allenatori";

export class Team {
  nomeTeam: string;
  nomeAllenatore: Allenatori;
  imageTeam: string
  pokemon: PokemonLista[];

  constructor(nomeTeam: string, nomeAllenatore: Allenatori, imageTeam: string,  pokemon: PokemonLista[]) {
    this.nomeTeam = nomeTeam;
    this.nomeAllenatore = nomeAllenatore;
    this.imageTeam =imageTeam;
    this.pokemon = [];
  }
}