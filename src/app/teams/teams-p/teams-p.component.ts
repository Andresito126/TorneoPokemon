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

  //MODALS
  selectedPokemon: Pokemon | null = null;
  showModal: boolean = false;

  

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

  // DELETE TEAM

  showDeleteModal: boolean = false; 
  selectedTeam: Team | null = null; 

  onDeleteTeam(team: Team) {
    this.selectedTeam = team; // asigna el equipo seleccionado
    this.showDeleteModal = true; // muestra el modal de eliminacion
  }
  

  confirmDelete() {
    this.teamService.deleteTeam(this.selectedTeam!.id_team!).subscribe(() => {
      console.log('equipo eliminado:', this.selectedTeam!.id_team); //  operador asercion no nula
      this.loadTeams();  
      this.closeDeleteModal(); 
    });
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.selectedTeam = null; 
  }

    //EDIT 

    isEditModalOpen: boolean = false;

    openEditModal(team: Team) {
      this.selectedTeam = team; 
      this.isEditModalOpen = true; 
    }
  
    
    closeEditModal() {
      this.isEditModalOpen = false;
      this.selectedTeam = null;
    }

    onTeamEdited(updatedTeam: Team) {
      console.log('Equipo actualizado:', updatedTeam);
      this.loadTeams();  
      this.closeEditModal();  
    }
  

}