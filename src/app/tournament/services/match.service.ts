// match.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private tournamentStorageKey = 'tournaments';

  addMatch(tournamentId: number, match: any): void {
    const tournaments = JSON.parse(localStorage.getItem(this.tournamentStorageKey) || '[]');
    const tournament = tournaments.find((t: any) => t.id_tournament === tournamentId);
    if (tournament) {
      match.id = Date.now(); 
      tournament.matches.push(match);
      localStorage.setItem(this.tournamentStorageKey, JSON.stringify(tournaments));
    }
  }
  
  getMatchesByTournamentId(tournamentId: number): any[] {
    const tournaments = JSON.parse(localStorage.getItem(this.tournamentStorageKey) || '[]');
    const tournament = tournaments.find((t: any) => t.id_tournament === tournamentId);
    return tournament ? tournament.matches || [] : [];
  }
}