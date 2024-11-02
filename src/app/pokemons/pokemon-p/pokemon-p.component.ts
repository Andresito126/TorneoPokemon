import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../teams/services/pokemon.service';
@Component({
  selector: 'app-pokemon-p',
  templateUrl: './pokemon-p.component.html',
  styleUrl: './pokemon-p.component.css',
})
export class PokemonPComponent implements OnInit {
  @Input() pokemon: any; 
  pokemons: any[] = [];

  constructor(private dataPokemonService: PokemonService) {}

  
  ngOnInit(): void {

  }
}
