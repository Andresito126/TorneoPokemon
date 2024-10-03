import { Component, Output, EventEmitter } from '@angular/core';
import { Team } from '../../models/team';
import { TeamService } from '../../services/team.service';
@Component({
  selector: 'app-add-modal-teams',
  templateUrl: './add-modal-teams.component.html',
  styleUrl: './add-modal-teams.component.css'
})
export class AddModalTeamsComponent {
  constructor(private teamService: TeamService) {} 

  @Output() teamAdded = new EventEmitter<Team>();
  @Output() closeModal = new EventEmitter<void>();

   // cerrar modal
 onClose() {
    this.closeModal.emit();  
  }

  // variables para el formulario team
  team_name: string = '';
  creation_date: Date = new Date();
  battle_points: number = 0;
  description: string = '';
  total_pokemon: number = 0;
 

  // enviar el formulario
  onSubmit() {
    const newTeam: Team = {
      team_name: this.team_name,
      creation_date: this.creation_date,
      battle_points: this.battle_points,
      description: this.description,
      total_pokemon: this.total_pokemon,
      pokemons: [] 
    };

    // llamar al servicio
    this.teamService.createTeam(newTeam).subscribe(
      (response: Team) => {
        console.log('team creado:', response);
        // emitir el evento del neuvo team
        this.teamAdded.emit(response);
        this.resetForm();  
      },
      (error) => {
        console.error('error al crear el team:', error);
      }
    );
  }

  //  limpiar el formulario
  resetForm() {
    this.team_name = '';
    this.creation_date = new Date();
    this.battle_points = 0;
    this.description = '';
    this.total_pokemon = 0;
  }
}