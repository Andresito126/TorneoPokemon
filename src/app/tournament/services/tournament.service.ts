import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tournament } from '../models/tournament';


@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  private apiUrl = 'http://localhost:3000/tournaments';

  constructor(private http: HttpClient) {}

  getAllTournaments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  addTournament(tournament: Tournament): Observable<Tournament> {
    return this.http.post<Tournament>(this.apiUrl, tournament);
  }

  deleteTournament(tournamentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${tournamentId}`);
  }
  setWinner(matchId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/matches/${matchId}/winner`, {}); 
  }
}
