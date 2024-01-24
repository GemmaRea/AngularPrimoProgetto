import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
//import per form
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, } from '@angular/forms';
//import router
import { Router } from '@angular/router';
//import angular material
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
//import model e componenti
import { PokemonLista } from '../../model/pokemon.lista';
import { Allenatori } from '../../model/allenatori';
import { Team } from '../../model/team';
import { PokemonApiService } from '../../servizi/pokemon-api.service';

@Component({
  selector: 'app-form-squadre',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule ,
    //angular
    MatStepperModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule

  ],
  templateUrl: './form-squadre.component.html',
  styleUrl: './form-squadre.component.css'
})
export class FormSquadreComponent {
  // variabili per prendere i valori nell'onInit
  listaPokemon: PokemonLista[]
  listaAllenatori: Allenatori[]
  listaTeam: Team[]
  // variabile per gestire  il crea ed il modifica
  isCrea : boolean 
  // variabile per mostra il form di crea team
  visualizzaForm: boolean = false
  //varibile per assegnare indice dall'input nella scelta modifica
  indice: number
  //variabile per il form group
  actionForm: FormGroup


  constructor(private creaTeam: FormBuilder, private pokemonHttp: PokemonApiService, private rotte: Router) {
    // creazione dei validation per il form
    this.actionForm = this.creaTeam.group({
      nomeTeam: ["", Validators.required],
      nomeAllenatore: [null, Validators.required],
      imageTeam: ["/assets/immagini/crea-team.png", Validators.required],
      pokemon: this.creaTeam.array([
        [null, Validators.required], 
        [null, Validators.required], 
        [null, Validators.required]  
      ])

    })
  }


  ngOnInit() {
    // Sottoscriviti agli aggiornamenti del pokemonGroup
    this.pokemonHttp.pokemonLista$.subscribe((pokemonGroup) => {
      this.listaPokemon = pokemonGroup;
      
      
        // Sottoscriviti agli aggiornamenti degli allenatori
        this.pokemonHttp.allenatori$.subscribe((allenatori) => {
          this.listaAllenatori = allenatori;
        });
    
        // Sottoscriviti agli aggiornamenti del team
        this.pokemonHttp.team$.subscribe((team) => {
          this.listaTeam = team;
        });
    });
    
    } 
    //metodo collegato al submit del form
     inviaForm() {
      if (this.isCrea === true && this.actionForm.valid) {
        const nuovoTeam = {
          nomeTeam: this.actionForm.value.nomeTeam,
          nomeAllenatore: this.actionForm.value.nomeAllenatore,
          imageTeam: this.actionForm.value.imageTeam,
          pokemon: this.actionForm.value.pokemon
        }
        console.log("il form è stato compilato correttamente")
        console.log(this.actionForm.value)
        this.listaTeam.unshift(nuovoTeam)
        console.log(this.listaTeam) 
        
      }
      else if (this.isCrea === false && this.actionForm.valid) {
        console.log("il form è stato compilato correttamente")
        console.log(this.actionForm.value)
        console.log(this.indice)
        this.listaTeam[this.indice] = this.actionForm.value
        console.log(this.listaTeam) 
        
      }
      else {
        console.log("il form non è stato compilato correttamente")
      }
      if(this.actionForm.valid){
        // se il form è valido resetto il form passo i valori aggiornati dei team e riporto al componente squadra per visualizzare le modifiche o le aggiunte
        this.actionForm.reset()
        this.pokemonHttp.setTeam(this.listaTeam) 
        this.rotte.navigate(['/navbar/squadra'])
      }
     
    }
   

//funzione modifica del primo form
modifica() {
  const conferma = window.confirm('Sei sicuro di voler modificare questo team?');
  if (conferma) {
  this.isCrea = false;
  this.visualizzaForm = true;
  if (this.indice >= 0 && this.indice< this.listaTeam.length) {
    // Aggiorna i valori del form basati sull'indice grazie a patchValue
    this.actionForm.patchValue({
      nomeTeam: this.listaTeam[this.indice].nomeTeam,
      nomeAllenatore: this.listaTeam[this.indice].nomeAllenatore,
      imageTeam: this.listaTeam[this.indice].imageTeam,
      pokemon: this.listaTeam[this.indice].pokemon
    });
  } else {
    // L'input dell'utente non è un indice valido
    console.error("L'input dell'utente non è un indice valido");
  }
}
}
//funzione crea del primo form
crea(){
  this.isCrea = true
  this.visualizzaForm = true
}
//per annullare il form metto reset al form e ritorno al primo form di input
  annullaOperazione() {
   this.actionForm.reset();
   this.visualizzaForm = false
  }

}