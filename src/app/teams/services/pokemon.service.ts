import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _apiUrl = 'http://localhost:3000/pokemonTeam';

  constructor(private _http: HttpClient) {} 


  // obtener pokemon por id de equipo
  getPokemonsByTeamId(teamId: number): Observable<Pokemon[]> {
    console.log(`crgndo pokemon para el equipo id: ${teamId}`); 
    return this._http.get<Pokemon[]>(`${this._apiUrl}/getPokemonsByTeamId/${teamId}`);
}



  // añadir pokemon a un equipo
  addPokemonToTeam(teamId: number, pokemonId: number): Observable<any> {
    return this._http.post(`${this._apiUrl}/addPokemonToTeam`, { team_id: teamId, pokemon_id: pokemonId });
  }

  // eliminar pokemon de un equipo
  removePokemonFromTeam(id: number): Observable<any> {
    return this._http.delete(`${this._apiUrl}/removePokemonFromTeam/${id}`);
}
  


}
    
