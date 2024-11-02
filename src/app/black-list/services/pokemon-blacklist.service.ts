import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonBlacklist } from '../models/pokemon-blacklist';

@Injectable({
  providedIn: 'root'
})
export class PokemonBlacklistService {
  private apiUrl = 'http://localhost:3000/blacklist';

  constructor(private http: HttpClient) {}

  // get los poke en la blacklist
  getBlacklist(): Observable<PokemonBlacklist[]> {
    return this.http.get<PokemonBlacklist[]>(`${this.apiUrl}/getBlacklist`);
  }

  // add un poke a la blacklist
  addPokemonToBlacklist(pokemon_id: number): Observable<PokemonBlacklist> {
    return this.http.post<PokemonBlacklist>(`${this.apiUrl}/add`, { pokemon_id });
  }

  // eliminar un pokemon de la blacklist
  removePokemonFromBlacklist(id_blacklist: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove/${id_blacklist}`);
  }
}