import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePComponent } from './home-p/home-p.component';
import { AboutCardComponent } from './about-card/about-card.component';



@NgModule({
  declarations: [
    HomePComponent,
    AboutCardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
