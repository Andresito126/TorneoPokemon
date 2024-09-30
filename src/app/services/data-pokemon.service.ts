import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataPokemonService {

  constructor(private _http: HttpClient) { }

  //obtener los pokemones
    getPokemons(){
      return this._http.get(`https://pokeapi.co/api/v2/pokemon?limit=10`);
    }

    getDataPokemon(name:string){
      return this._http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }
}
