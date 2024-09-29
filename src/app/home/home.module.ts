import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePComponent } from './home-p/home-p.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { SectionsCardsComponent } from './sections-cards/sections-cards.component';
import { SectionPokemonsComponent } from './section-pokemons/section-pokemons.component';



@NgModule({
  declarations: [
    HomePComponent,
    AboutCardComponent,
    SectionsCardsComponent,
    SectionPokemonsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
