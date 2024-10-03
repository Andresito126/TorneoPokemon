import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Team } from '../models/team';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon';
@Component({
  selector: 'app-teams-p',
  templateUrl: './teams-p.component.html',
  styleUrl: './teams-p.component.css'
})
export class TeamsPComponent implements OnInit {


  constructor(private teamService: TeamService, private pokemonService: PokemonService) {}
  teams: Team[] = []; 
  pokemons: Pokemon[] = [];

  ngOnInit(): void {
    this.loadTeams();  
  }


  loadTeams() {
    this.teamService.getTeams().subscribe(
        (data: Team[]) => {
            this.teams = data;
            console.log('equipos cargados:', this.teams);
            
            // cargar pokemon
            this.teams.forEach(team => {
                this.loadPokemonsByTeamId(team.id_team ?? 0); // valor de 0 prede
            });
        },
        (error) => {
            console.error('error al cargar los equipos:', error);
        }
    );
}
loadPokemonsByTeamId(teamId: number) {
  this.pokemonService.getPokemonsByTeamId(teamId).subscribe(
      (pokemons: Pokemon[]) => {
          const team = this.teams.find(t => t.id_team === teamId);
          if (team) {
              team.pokemons = pokemons;
              console.log(`pokemons${teamId}:`, pokemons);
          } else {
              console.error(`equipo ${teamId} no encontrado`);
          }
      },
      (error) => {
          console.error(`error${teamId}:`, error);
      }
  );
}



// eliminar un pokemon de un equipo
onDeletePokemon(pokemonId: number) {
  this.pokemonService.removePokemonFromTeam(pokemonId).subscribe(() => {
      console.log('pokemon eliminado:', pokemonId);
      this.loadTeams();  // recargar los equipos después de eliminar un pokemon
  }, (error) => {
      console.error('error al eliminar pokemon:', error);
  });
}


  // Eliminar un equipo
  onDeleteTeam(teamId?: number) {
    if (teamId) {  // verifica que team id no sea undefined
      this.teamService.deleteTeam(teamId).subscribe(() => {
        console.log('equipo eliminado:', teamId);
        this.loadTeams();  // eecargar los equipos de eliminar un equipo
      });
    }
  }

  


  //MODALS
  selectedPokemon: Pokemon | null = null;
  showModal: boolean = false;
  showEditModal: boolean = false;
  showDeleteConfirmation: boolean = false;
  

          //OPEN MODAL ADD TRAINER
  openModal() {
    this.showModal = true; 
  }

  onClose() {
    this.showModal = false;
  }

  onTeamAdded(team: Team) {
    console.log('Nuevo equipo añadido:', team);
    this.loadTeams();  // recargar los equipos despues de añadir 
  }


            //OPEN MODAL POKEMONS ADD-EDIT-DELETE
  
    openEditModal() {
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
    this.selectedPokemon = null;
  }

  closeDeleteConfirmation() {
    this.showDeleteConfirmation = false;
    this.selectedPokemon = null;
  }

  openDeleteConfirmation(pokemon: Pokemon) {
    // logica para abrir la confirmacion de eliminacion
    console.log('eliminar pokemon:', pokemon);
  }

  // añadir un pokemon a un equipo
  onAddPokemonToTeam(teamId: number, pokemonId: number) {
    this.pokemonService.addPokemonToTeam(teamId, pokemonId).subscribe(() => {
      console.log('pokemon añadido al equipo:', pokemonId);
      this.loadTeams(); // recargar los equipos
    });
  }
}

