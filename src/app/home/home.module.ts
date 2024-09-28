import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePComponent } from './home-p/home-p.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { SectionsCardsComponent } from './sections-cards/sections-cards.component';



@NgModule({
  declarations: [
    HomePComponent,
    AboutCardComponent,
    SectionsCardsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
