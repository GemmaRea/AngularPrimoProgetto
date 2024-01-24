import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
//import models 
import { Team } from '../../model/team';
import { Allenatori } from '../../model/allenatori';
import { PokemonLista } from '../../model/pokemon.lista';
import { ListaPokemonComponent } from '../lista-pokemon/lista-pokemon.component';
import { FormSquadreComponent } from '../form-squadre/form-squadre.component';
import { PokemonApiService } from '../../servizi/pokemon-api.service';
//import angular material
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-squadre-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    ListaPokemonComponent,
    FormSquadreComponent,
    //material
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
  ],
  templateUrl: './squadre-pokemon.component.html',
  styleUrl: './squadre-pokemon.component.css'
})
export class SquadrePokemonComponent {
  //prendere variabile dal padre per assegnare pokemon ai team
   pokemonGroup: PokemonLista[] 

  // per mostrare i pokemon del team
  varVisualizzaPokemon : boolean = false
  //inizzializzazione allenatori
  allenatori: Allenatori[] = [
    { nome: "Archie", image: "../assets/immagini/aqua-allenatore.png" },
    { nome: "Lysandre", image: "../assets/immagini/flare-allenatore.png" },
    { nome: "Maxie", image: "../assets/immagini/magma-allenatore.png" },
    { nome: "N Ghetsis", image: "../assets/immagini/plasma-allenatore.png" },
    { nome: "Cyrus", image: "../assets/immagini/galactic-allenatore.png" },
    { nome: "Jessie", image: "../assets/immagini/rocket-allenatore.png" },
  ]
  team: Team[];


  //inizzializzazione team
  
//metodi

constructor(private pokemonHttp: PokemonApiService, private rotte: Router) {}
ngOnInit() {
  // metodo dei servizi per prendere valori dei pokemon
  this.pokemonHttp.pokemonLista$.subscribe((pokemonLista) => {
    this.pokemonGroup = pokemonLista;
  });
      // Metodo dei servizi per ottenere il team
      this.pokemonHttp.team$.subscribe((team) => {
        if (team && team.length > 0) {
          // Se il team ha valori, aggiorna il team
          this.team = team;
        } else {
          // Altrimenti, inizializza il team
          this.inizzializzazioneTeam();
        }
      });
   // metodo dei servizi per mettere a disposizione di altri componenti i valori
   this.pokemonHttp.setAllenatori(this.allenatori);
   
}
// metodo per inizzializzare nell'onInit
inizzializzazioneTeam(){
  this.team = [
    { nomeTeam: "Team-Aqua", nomeAllenatore: this.allenatori[0], imageTeam: " ../assets/immagini/team-aqua.png", pokemon: [this.pokemonGroup[0], this.pokemonGroup[1], this.pokemonGroup[3]] },
    { nomeTeam: "Team-Flare", nomeAllenatore: this.allenatori[2], imageTeam: " ../assets/immagini/team-flare.png", pokemon: [this.pokemonGroup[7], this.pokemonGroup[8], this.pokemonGroup[9]] },
    { nomeTeam: "Team-Magma", nomeAllenatore: this.allenatori[3], imageTeam: " ../assets/immagini/team_magma.png", pokemon: [this.pokemonGroup[10], this.pokemonGroup[11], this.pokemonGroup[12]] },
    { nomeTeam: "Team-Plasma", nomeAllenatore: this.allenatori[4], imageTeam: " ../assets/immagini/team-plasma.png", pokemon: [this.pokemonGroup[13], this.pokemonGroup[14], this.pokemonGroup[15]] },
    { nomeTeam: "Team-Galactic", nomeAllenatore: this.allenatori[1], imageTeam: " ../assets/immagini/team-galactic.png", pokemon: [this.pokemonGroup[4], this.pokemonGroup[5], this.pokemonGroup[6]] },
    { nomeTeam: "Team-Rocket", nomeAllenatore: this.allenatori[5], imageTeam: " ../assets/immagini/team rocket.png", pokemon: [this.pokemonGroup[16], this.pokemonGroup[17], this.pokemonGroup[18]] }
  ]
  this.pokemonHttp.setTeam(this.team);
}

// visualizza i pokemon all'interno delle card
visualizzaPokemon(){
  this.varVisualizzaPokemon = !this.varVisualizzaPokemon
}
//elimina team con indice dell array
eliminaTeam(indice: number) {
  //window. confirm fa una specie di allert e restituisce valore boolean
  const conferma = window.confirm('Sei sicuro di voler eliminare questo team?');
  if (conferma) {
    this.team.splice(indice, 1);
    this.pokemonHttp.setTeam(this.team);
  }
}
// metodo per aprire form su un altra rotta
  apriForm() {
 this.rotte.navigate(['/navbar/creaSquadra'])
  }
}
