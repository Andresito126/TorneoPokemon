import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { TournamentPageComponent } from './tournament-page/tournament-page.component';
import { TrainersModule } from '../trainers/trainers.module';
import { AddTournamentComponent } from './modals/add-tournament/add-tournament.component';
import { TournamentMatchesComponent } from './tournament-matches/tournament-matches.component';




@NgModule({
  declarations: [
    TournamentPageComponent,
    AddTournamentComponent,
    TournamentMatchesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TrainersModule
  ]
})
export class TournamentModule { }
