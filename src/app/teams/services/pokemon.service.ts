import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _apiUrl = 'http://localhost:3000/pokemonTeam';

  constructor(private _http: HttpClient) {} 


getAllPokemons(): Observable<any> {
  return this._http.get<any>('https://pokeapi.co/api/v2/pokemon'); 
}


getDataPokemon(name: string): Observable<any> {
  return this._http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
}

  // obtener pokemon por id de equipo
  getPokemonsByTeamId(teamId: number): Observable<Pokemon[]> {
    return this._http.get<Pokemon[]>(`http://localhost:3000/pokemonTeam/getPokemonsByTeamId/${teamId}`);
  }

  // añadir pokemon a un equipo
  addPokemonToTeam(teamId: number, pokemonId: number): Observable<any> {
    return this._http.post(`${this._apiUrl}/addPokemonToTeam`, { team_id: teamId, pokemon_id: pokemonId });
  }

  // update un poke
  updatePokemonsByTeamId(teamId: number, pokemonIds: number[]): Observable<any> {
  return this._http.put(`${this._apiUrl}/updatePokemonsByTeamId/${teamId}`, { pokemon_ids: pokemonIds });
  }

  // eliminar pokemon de un equipo
  removePokemonFromTeam(id: number): Observable<any> {
    return this._http.delete(`${this._apiUrl}/removePokemonFromTeam/${id}`);
}
  


}
    
