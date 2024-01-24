import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Team } from '../model/team';
import { Allenatori } from '../model/allenatori';
import { PokemonLista } from '../model/pokemon.lista';
@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
//Il motivo principale per cui si utilizza un BehaviorSubject in questo contesto è
// per creare un punto di comunicazione centralizzato tra i diversi componenti o 
//parti dell'applicazione che desiderano condividere o ricevere aggiornamenti su un determinato dato.
  private pokemonListaSource = new BehaviorSubject<PokemonLista[]>([]);
  pokemonLista$ = this.pokemonListaSource.asObservable();

  private allenatoriSource = new BehaviorSubject<Allenatori[]>([]);
  allenatori$ = this.allenatoriSource.asObservable();

  private teamSource = new BehaviorSubject<Team[]>([]);
  team$ = this.teamSource.asObservable();
  
  constructor(private http: HttpClient) { }
  private getPokemon =`https://pokeapi.co/api/v2/pokemon?limit=$%7b30%7d`

  getPokemonName(): Observable<any[]>{
    return this.http.get<any[]>( this.getPokemon)
    }
    getPokemonImage( pokemon: string) :Observable<any[]>{
      return this.http.get<any[]>(pokemon)
}
  // Metodo per aggiornare il pokemonLista nel servizio
  updatePokemonLista(pokemonLista: PokemonLista[]) {
    this.pokemonListaSource.next(pokemonLista);
  }

  setAllenatori(allenatori: Allenatori[]) {
    this.allenatoriSource.next(allenatori);
  }

  setTeam(team: Team[]) {
    this.teamSource.next(team);
  }

}
