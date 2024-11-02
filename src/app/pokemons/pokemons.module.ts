import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPComponent } from './pokemon-p/pokemon-p.component';
import { PokemonCardsComponent } from './pokemon-cards/pokemon-cards.component';



@NgModule({
  declarations: [
    PokemonPComponent,
    PokemonCardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PokemonCardsComponent
  ]
})
export class PokemonsModule { }
