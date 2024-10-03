import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private _apiUrl = 'http://localhost:3000/team';

  constructor(private _http: HttpClient) { }

// crear un nuevo equipo
createTeam(team: Team): Observable<Team> {
  return this._http.post<Team>(`${this._apiUrl}/getTeams`, team);
}

// obtener todos los equipos
getTeams(): Observable<Team[]> {
  return this._http.get<Team[]>('http://localhost:3000/team/getTeams');
}

// obtener un equipo por ID
getTeamById(id: number): Observable<Team> {
  return this._http.get<Team>(`${this._apiUrl}/${id}`);
}

// actualizar un equipo
updateTeam(id: number, team: Team): Observable<Team> {
  return this._http.put<Team>(`${this._apiUrl}/${id}`, team);
}

// eliminar un equipo
deleteTeam(id: number): Observable<void> {
  return this._http.delete<void>(`${this._apiUrl}/${id}`);
}

}
