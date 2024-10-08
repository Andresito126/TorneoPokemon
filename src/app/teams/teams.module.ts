import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsPComponent } from './teams-p/teams-p.component';
import { TrainersModule } from '../trainers/trainers.module';
import { AddModalTeamsComponent } from './modals/add-modal-teams/add-modal-teams.component';
import { EditModalTeamsComponent } from './modals/edit-modal-teams/edit-modal-teams.component';
import { DeleteModalTeamsComponent } from './modals/delete-modal-teams/delete-modal-teams.component';
import { FormsModule } from '@angular/forms';
import { EditPokemonModalComponent } from './modals/edit-pokemon-modal/edit-pokemon-modal.component';



@NgModule({
  declarations: [
    TeamsPComponent,
    AddModalTeamsComponent,
    EditModalTeamsComponent,
    DeleteModalTeamsComponent,
    EditPokemonModalComponent
  ],
  imports: [
    CommonModule,
    TrainersModule,
    FormsModule
  ],
})
export class TeamsModule { }
