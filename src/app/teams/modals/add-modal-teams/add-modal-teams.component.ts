import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { TeamService } from '../../services/team.service';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { forkJoin } from 'rxjs'; //para poder soportar varios observables peticionnes 

@Component({
  selector: 'app-add-modal-teams',
  templateUrl: './add-modal-teams.component.html',
  styleUrls: ['./add-modal-teams.component.css']
})
export class AddModalTeamsComponent implements OnInit {

  @Output() teamAdded = new EventEmitter<Team>();
  @Output() closeModal = new EventEmitter<void>();

  constructor(private teamService: TeamService, private pokemonService: PokemonService) {}

  // variables para el formulario team
  trainer_id: number = 0; 
  team_name: string = '';
  creation_date: Date = new Date(); // inicializa creation_date como un objeto Date
  battle_points: number = 0;
  description: string = '';
  total_pokemon: number = 0;

  // variables para la sleccion  de Pokemon
  arrayPokemons: Pokemon[] = [];
  selectedPokemonId1: number = 0; 
  selectedPokemonId2: number = 0; 
  selectedPokemonId3: number = 0; 
  selectedPokemonId4: number = 0; 
  

  ngOnInit() {
    this.onGetAllPokemons(); 
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
      pokemons: [
        {
          pokemon_id: this.selectedPokemonId1,
          id_pokemon_team: 0,
          pokemon_name: ''
        },
        {
          pokemon_id: this.selectedPokemonId2,
          id_pokemon_team: 0,
          pokemon_name: ''
        },
        {
          pokemon_id: this.selectedPokemonId3,
          id_pokemon_team: 0,
          pokemon_name: ''
        },
        {
          pokemon_id: this.selectedPokemonId4,
          id_pokemon_team: 0,
          pokemon_name: ''
        }
      ]  
    };

    this.teamService.createTeam(newTeam).subscribe(
      (response: Team) => {
        const teamId = response.id_team;
        if (teamId) {
          //get los ids 
          const pokemonIds = [
            this.selectedPokemonId1,
            this.selectedPokemonId2,
            this.selectedPokemonId3,
            this.selectedPokemonId4
          ];

          // para crear un observable en cada pokemon
          const pokemonAddObservables = pokemonIds.map(pokemonId => 
            this.pokemonService.addPokemonToTeam(teamId, pokemonId)
          );

          //espera a que se añadan todos
          forkJoin(pokemonAddObservables).subscribe(
            (pokemonResponses) => {
              console.log('Pokemons añadidos al equipo:', pokemonResponses);
              alert('Pokemons añadidos '); 
              this.teamAdded.emit(response);
              this.resetForm();
              this.onClose(); 
            },
            (pokemonError) => {
              console.error('Error al añadir los Pokémon al equipo:', pokemonError);
              alert('Error al añadir los Pokemon al equipo'); 
            }
          );
        } else {
          console.error('El id del equipo no se encontro:', response);
        }
      },
      (error) => {
        console.error('error al crear el equipo:', error);
        alert('Error al crear el equipo. Verifica los datos '); 
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
    this.selectedPokemonId1 = 0;
    this.selectedPokemonId2 = 0;
    this.selectedPokemonId3 = 0;
    this.selectedPokemonId4 = 0;
  }

  onGetAllPokemons(): void {
    this.pokemonService.getAllPokemons().subscribe(
      (data: any) => {
        console.log('datos de la pokeappi:', data); 
        if (data && data.results) {
            this.arrayPokemons = data.results.map((pokemon: any) => ({
                id_pokemon_team: 0, 
                pokemon_id: pokemon.url.split('/')[6], 
                pokemon_name: pokemon.name
            }));
            console.log('pokemons obtenidos:', this.arrayPokemons);
        } else {
            console.error('no hay pokémons.');
        }
      },
      (error) => {
        console.error('error al obtener los pokemones:', error);
      }
    );
  }
}
