import { Component, OnInit } from '@angular/core';
import { PokemonBlacklist } from '../models/pokemon-blacklist';
import { PokemonBlacklistService } from '../services/pokemon-blacklist.service';
@Component({
  selector: 'app-black-list-page',
  templateUrl: './black-list-page.component.html',
  styleUrl: './black-list-page.component.css'
})
export class BlackListPageComponent implements OnInit{
  blacklist: PokemonBlacklist[] = [];
  pokemonIdToAdd: number | null = null;
  searchQuery: string = '';

  constructor(private blacklistService: PokemonBlacklistService) {}

  ngOnInit(): void {
    this.loadBlacklist();
  }

  loadBlacklist(): void {
    this.blacklistService.getBlacklist().subscribe(
      (data) => (this.blacklist = data)
    );
  }

  addPokemon(): void {
    if (this.pokemonIdToAdd) {
      this.blacklistService.addPokemonToBlacklist(this.pokemonIdToAdd).subscribe(
        (newPokemon) => {
          this.blacklist.push(newPokemon);
          this.pokemonIdToAdd = null;
        }
      );
    }
  }

  removePokemon(id_blacklist: number): void {
    this.blacklistService.removePokemonFromBlacklist(id_blacklist).subscribe(() => {
      this.blacklist = this.blacklist.filter((pokemon) => pokemon.id_blacklist !== id_blacklist);
    });
  }

  filteredBlacklist(): PokemonBlacklist[] {
    return this.blacklist.filter(pokemon =>
      pokemon.pokemon_name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}