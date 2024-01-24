import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import router
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
//import angular material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
//import componenti
import { ListaPokemonComponent } from '../lista-pokemon/lista-pokemon.component';
import { SquadrePokemonComponent } from '../squadre-pokemon/squadre-pokemon.component';
import { FormSquadreComponent } from '../form-squadre/form-squadre.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule ,
    //import router
    RouterOutlet,
    RouterModule ,
    //import componenti
    FormSquadreComponent ,
    SquadrePokemonComponent ,
    ListaPokemonComponent,
    //angular material
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
// variabili
apriSideNav: boolean = true

  constructor(private rotte : Router) {

  }
  cambiaRottaLista(){
    this.rotte.navigate(['navbar/lista'])
  }
  cambiaRottaSquadre(){
    this.rotte.navigate(['navbar/squadra'])
  }
  cambiaRottaForm(){
    this.rotte.navigate(['navbar/creaSquadra'])
  }
  cambioRottaHomePage(){
    this.rotte.navigate(['/homepage'])
  }
  //metodo per visualizzare descrizione icona
  screen(){
   if(this.apriSideNav){
    return  'Visualizza fullscreen'
   } else{
    return  'Mostra barra navigazione'
   }
   ;
  }
}
