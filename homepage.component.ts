import { Component } from '@angular/core';
//import router
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
//import angular material
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private rotta: Router) {

  }

  //metodo per andare alla navbar
  cambioRottaNavbar() {
    this.rotta.navigate(['/navbar'])
  }
  //metodo per aggiornare home page
  cambioRottaHomepage() {
    this.rotta.navigate(['/homapage'])
  }
  //metodo per raggiungere pokedex
  cambioRottaListaPokemon() {
    this.rotta.navigate(['/navbar'])
  }
   //metodo per raggiungere creazione team
   cambioRottaForm() {
    this.rotta.navigate(['/navbar/creaSquadra'])
  }
}

