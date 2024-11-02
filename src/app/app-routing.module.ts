import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePComponent } from './home/home-p/home-p.component';
import { PokemonPComponent } from './pokemons/pokemon-p/pokemon-p.component';
import { TrainersPComponent } from './trainers/trainers-p/trainers-p.component';
import { TeamsPComponent } from './teams/teams-p/teams-p.component';
import { BlackListPageComponent } from './black-list/black-list-page/black-list-page.component';

const routes: Routes = [
  {path:'', component:HomePComponent},
  {path: 'pokemons', component:PokemonPComponent},
  {path: 'trainers', component:TrainersPComponent},
  {path: 'teams', component:TeamsPComponent},
  {path: 'blackList', component:BlackListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
