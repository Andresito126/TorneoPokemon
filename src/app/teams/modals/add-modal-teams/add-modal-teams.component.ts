import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-add-modal-teams',
  templateUrl: './add-modal-teams.component.html',
  styleUrls: ['./add-modal-teams.component.css']
})
export class AddModalTeamsComponent implements OnInit {

  @Output() teamAdded = new EventEmitter<Team>();
  @Output() closeModal = new EventEmitter<void>();

  constructor(private teamService: TeamService) {}

  // variables para el formulario team
  trainer_id: number = 0; 
  team_name: string = '';
  creation_date: Date = new Date(); // Inicializa creation_date como un objeto Date
  battle_points: number = 0;
  description: string = '';
  total_pokemon: number = 0;

  ngOnInit() {
  }

  onClose() {
    this.closeModal.emit();  
  }

  onDateChange(value: string) {
    this.creation_date = new Date(value);  // convertir a objeto Date
  }

  onSubmit() {
    console.log('Formulario enviado');
    console.log('Valores del formulario:');
    console.log('Trainer ID:', this.trainer_id); 
    console.log('Team Name:', this.team_name);
    console.log('Creation Date:', this.creation_date);
    console.log('Battle Points:', this.battle_points);
    console.log('Description:', this.description);
    console.log('Total Pokémon:', this.total_pokemon);
  
    const newTeam: Team = {
      trainer_id: this.trainer_id,
      team_name: this.team_name,
      creation_date: this.creation_date.toISOString(),
      battle_points: this.battle_points,
      description: this.description,
      total_pokemon: this.total_pokemon,
      pokemons: []  
    };
  
    this.teamService.createTeam(newTeam).subscribe(
      (response: Team) => {
        this.teamAdded.emit(response);
        this.resetForm();
        this.onClose(); // cierra el modal despues de agregar el equipo
      },
      (error) => {
        console.error('error al crear el equipo:', error);
      }
    );
  }

  resetForm() {
    this.trainer_id = 0; // eeinicia el id del entrenador
    this.team_name = '';
    this.creation_date = new Date();  // reiniciar como objeto date
    this.battle_points = 0;
    this.description = '';
    this.total_pokemon = 0;
  }
}
