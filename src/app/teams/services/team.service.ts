import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private _apiUrl = 'http://localhost:3000/team';

  constructor(private http: HttpClient) { }

  // Método para crear un nuevo equipo
  createTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(`${this._apiUrl}`, team);
  }

}
