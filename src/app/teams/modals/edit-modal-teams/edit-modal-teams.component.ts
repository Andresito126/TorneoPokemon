import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { PokemonService } from '../../services/pokemon.service'; 
@Component({
  selector: 'app-edit-modal-teams',
  templateUrl: './edit-modal-teams.component.html',
  styleUrls: ['./edit-modal-teams.component.css']
})
export class EditModalTeamsComponent implements OnInit {
  @Input() teamToEdit: any; 
  @Output() teamEdited = new EventEmitter<any>(); 
  @Output() closeModal = new EventEmitter<void>(); 
  
  arrayPokemons: any[] = [];  
  selectedPokemonId1: number | null = null; 
  selectedPokemonId2: number | null = null;  
  selectedPokemonId3: number | null = null; 
  selectedPokemonId4: number | null = null; 

  constructor(private teamService: TeamService, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.onGetAllPokemons(); 
    this.initializeSelectedPokemons();
  }

  // Obtener todos los pokémones del PokeAPI
  onGetAllPokemons(): void {
    this.pokemonService.getAllPokemons().subscribe(
      (data: any) => {
        console.log('datos de la pokeapi:', data); 
        if (data && data.results) {
          this.arrayPokemons = data.results.map((pokemon: any) => ({
            id_pokemon_team: 0,  // ID temporal
            pokemon_id: pokemon.url.split('/')[6],  
            pokemon_name: pokemon.name  
          }));
          console.log('Pokémons obtenidos:', this.arrayPokemons);
        } else {
          console.error('No se encontraron pokémones.');
        }
      },
      (error) => {
        console.error('Error al obtener los pokémones:', error);
      }
    );
  }

  initializeSelectedPokemons(): void {
    if (this.teamToEdit && this.teamToEdit.pokemon_ids) {
      this.selectedPokemonId1 = this.teamToEdit.pokemon_ids[0] || null;
      this.selectedPokemonId2 = this.teamToEdit.pokemon_ids[1] || null;
      this.selectedPokemonId3 = this.teamToEdit.pokemon_ids[2] || null;
      this.selectedPokemonId4 = this.teamToEdit.pokemon_ids[3] || null;
    }
  }

  
  onEditTeam(): void {
    const updatedTeam = {
      
      ...this.teamToEdit,
      pokemon_ids: [
        this.selectedPokemonId1,
        this.selectedPokemonId2,
        this.selectedPokemonId3,
        this.selectedPokemonId4
      ]
    };
    console.log('Equipo a actualizar:', updatedTeam);


    this.teamService.updateTeam(updatedTeam).subscribe(response => {

      this.teamEdited.emit(updatedTeam); 
      this.onClose();  
    }, error => {
      console.error('Error al editar el equipo:', error);
    });
  }

  onClose(): void {
    this.closeModal.emit();
  }
}
