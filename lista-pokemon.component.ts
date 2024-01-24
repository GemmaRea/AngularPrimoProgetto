import { Component, } from '@angular/core';
//import per cambi rotta
import { RouterModule } from '@angular/router';
import { PokemonApiService } from '../../servizi/pokemon-api.service';
import { HttpClientModule, } from '@angular/common/http';
//import pipe che non funzionano =( )
import { CentimetriPipe } from '../../pipe/centimetri.pipe';
import { ChilogrammiPipe } from '../../pipe/chilogrammi.pipe';
// import model e componenti
import { PokemonLista } from '../../model/pokemon.lista';
import { SquadrePokemonComponent } from '../squadre-pokemon/squadre-pokemon.component';
//import angular material
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-lista-pokemon',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
    ChilogrammiPipe,
    CentimetriPipe,
    MatTableModule,
    SquadrePokemonComponent 
  ],
  templateUrl: './lista-pokemon.component.html',
  styleUrl: './lista-pokemon.component.css'
})
export class ListaPokemonComponent {

  //variabile per salvare l'array di pokemon ricevuti
  pokemon: any[]
  // inizzializzazione model costruito per salvare tutte le caratteristiche dei pokemon
  pokemonLista: PokemonLista[]
  // array delle colonne per visualizzare tabella in angular material
  displayedColumns: string[] = ['id', 'name', 'image', 'experience', 'height', 'weight'];


  constructor(private pokemonHttp: PokemonApiService) {
  }

// metodi
//le get nell'oninit
  ngOnInit() {
    // metodo per prendere nome e url
    this.pokemonHttp.getPokemonName().subscribe({
      next: (result) => {
        console.log("Il metodo è andato a buon fine");
        this.pokemon = Object.values(result['results']);
        // console.log(this.pokemon);
        this.pokemonLista = this.pokemon.map((pokemon: any) => {
          return {
            name: pokemon.name,
            url: pokemon.url,
          };
        });
        //altro metodo get per prendere altre specifiche {{per prendere anche la proprietà e quindi roccia, fuoco, acqua bisognerebbe fare un altra get  dall'url species
        this.pokemonLista.forEach((pokemon: PokemonLista) => {
          this.pokemonHttp.getPokemonImage(pokemon.url).subscribe({
            next: (res: any) => {
              pokemon.id = res.id
              pokemon.image = res.sprites.front_default;
              pokemon.experience = res.base_experience
              pokemon.height = res.height
              pokemon.weight = res.weight
              // metodo dei servizi per dare il valore di pokemon lista ad altri componenti
              this.pokemonHttp.updatePokemonLista(this.pokemonLista)
            },
            error: (error) => {
              console.log("Il metodo per le specifiche non è andato a buon fine", error);
            }
          });
        }); // Chiudi la parentesi mancante
      },
      error: (error) => {
        console.log("Il metodo non è andato a buon fine", error);
      }
    });
  }

}

