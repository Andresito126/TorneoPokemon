import { Component, OnInit } from '@angular/core';
import { DataPokemonService } from '../../services/data-pokemon.service';

@Component({
  selector: 'app-pokemon-p',
  templateUrl: './pokemon-p.component.html',
  styleUrl: './pokemon-p.component.css'
})
export class PokemonPComponent implements OnInit {

  constructor(private dataPokemonService: DataPokemonService){}

  ngOnInit(): void {
      this.dataPokemonService.getPokemons().subscribe((response:any)=>{
        console.log(response);
      });

      }
  }


