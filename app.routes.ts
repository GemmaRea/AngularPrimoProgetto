import { Routes } from '@angular/router';
import { HomepageComponent } from './componenti/homepage/homepage.component';
import { NavbarComponent } from './componenti/navbar/navbar.component';
import { SquadrePokemonComponent } from './componenti/squadre-pokemon/squadre-pokemon.component';
import { FormSquadreComponent } from './componenti/form-squadre/form-squadre.component';
import { ListaPokemonComponent } from './componenti/lista-pokemon/lista-pokemon.component';

export const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    {
      path: 'navbar',
      component: NavbarComponent,
      children: [
         { path: '', redirectTo: 'lista', pathMatch: 'full' },
        { path: 'lista', component: ListaPokemonComponent },
        { path: 'squadra', component: SquadrePokemonComponent },
        { path: 'creaSquadra', component: FormSquadreComponent },
      ],
    },
    { path: 'homepage', component: HomepageComponent },
  ];
