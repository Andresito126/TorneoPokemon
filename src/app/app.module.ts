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
import { AddModalComponent } from './modals/add-modal/add-modal.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import { EditModalComponent } from './modals/edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    AddModalComponent,
    DeleteModalComponent,
    EditModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    //para usar los servicios http
    HttpClientModule,
    PokemonsModule,
    TrainersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
