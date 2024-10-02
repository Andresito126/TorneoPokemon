import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePComponent } from './home/home-p/home-p.component';
import { PokemonPComponent } from './pokemons/pokemon-p/pokemon-p.component';
import { TrainersPComponent } from './trainers/trainers-p/trainers-p.component';

const routes: Routes = [
  {path:'', component:HomePComponent},
  {path: 'pokemons', component:PokemonPComponent},
  {path: 'trainers', component:TrainersPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
