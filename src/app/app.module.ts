import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsModule } from './pokemons/pokemons.module';
import { TrainersModule } from './trainers/trainers.module';
import { FormsModule } from '@angular/forms';
import { TeamsModule } from './teams/teams.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    //para usar los servicios http
    HttpClientModule,
    PokemonsModule,
    TrainersModule,
    FormsModule,
    TeamsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
