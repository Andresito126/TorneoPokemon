import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../teams/services/pokemon.service';
@Component({
  selector: 'app-pokemon-p',
  templateUrl: './pokemon-p.component.html',
  styleUrl: './pokemon-p.component.css',
})
export class PokemonPComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private dataPokemonService: PokemonService) {}

  
  ngOnInit(): void {
    this.dataPokemonService.getAllPokemons().subscribe((response: any) => {
      response.results.forEach((result: { name: string }) => {
        this.dataPokemonService
          .getDataPokemon(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
            console.log(this.pokemons);
          });
      });
    });
  }
}
