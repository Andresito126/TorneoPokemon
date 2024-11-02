import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../teams/services/pokemon.service';

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.css'],
})
export class PokemonCardsComponent implements OnInit {
  pokemons: any[] = [];

  @Input() pokemon: any;
  constructor(private dataPokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadAllPokemons();
  }

  loadAllPokemons(): void {
    this.dataPokemonService.getAllPokemons().subscribe((response: any) => {
      response.results.forEach((result: { name: string }) => {
        this.dataPokemonService.getDataPokemon(result.name).subscribe((uniqResponse: any) => {
          this.pokemons.push(uniqResponse);
        });
      });
    });
  }
}
