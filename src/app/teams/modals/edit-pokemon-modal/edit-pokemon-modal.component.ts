import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-edit-pokemon-modal',
  templateUrl: './edit-pokemon-modal.component.html',
  styleUrl: './edit-pokemon-modal.component.css'
})
export class EditPokemonModalComponent implements OnInit {
  @Input() pokemonTeam: any;  
  @Output() pokemonsUpdated = new EventEmitter<number[]>();  
  @Output() closeModal = new EventEmitter<void>();  

  arrayPokemons: any[] = [];
  selectedPokemonId1: number | null = null;
  selectedPokemonId2: number | null = null;
  selectedPokemonId3: number | null = null;
  selectedPokemonId4: number | null = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.onGetAllPokemons();  
    this.initializeSelectedPokemons();  
  }

  onGetAllPokemons(): void {
    this.pokemonService.getAllPokemons().subscribe(
      (data: any) => {
        if (data && data.results) {
          this.arrayPokemons = data.results.map((pokemon: any) => ({
            pokemon_id: pokemon.url.split('/')[6],
            pokemon_name: pokemon.name
          }));
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
    
    if (this.pokemonTeam && this.pokemonTeam.length >= 4) {
      this.selectedPokemonId1 = this.pokemonTeam[0] || null;
      this.selectedPokemonId2 = this.pokemonTeam[1] || null;
      this.selectedPokemonId3 = this.pokemonTeam[2] || null;
      this.selectedPokemonId4 = this.pokemonTeam[3] || null;
    }
  }

  onEditPokemons(): void {
    const selectedPokemons = [
      this.selectedPokemonId1,
      this.selectedPokemonId2,
      this.selectedPokemonId3,
      this.selectedPokemonId4
    ].filter(id => id !== null);  

    
    this.pokemonsUpdated.emit(selectedPokemons);
    this.onClose();  
  }

  onClose(): void {
    this.closeModal.emit();  
  }
}