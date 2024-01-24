import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import router
import { RouterModule } from '@angular/router';
// import componenti
import { NavbarComponent } from './componenti/navbar/navbar.component';
import { HomepageComponent } from './componenti/homepage/homepage.component';
import { ListaPokemonComponent } from './componenti/lista-pokemon/lista-pokemon.component';
//import angular material
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    // import componenti
    NavbarComponent,
    HomepageComponent,
    ListaPokemonComponent,
    MatTabsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pokemon';



}
