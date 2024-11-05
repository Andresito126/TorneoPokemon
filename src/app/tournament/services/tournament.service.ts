import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private storageKey = 'tournaments';

  constructor() { //pal local
    if (!localStorage.getItem(this.storageKey)) {
      const initialTeams = [
        { id_team: 1, team_name: 'Team Rocket' },
        { id_team: 2, team_name: 'Team Aqua' },
        { id_team: 3, team_name: 'Team Magma' }
      ];
      localStorage.setItem(this.storageKey, JSON.stringify(initialTeams));
    }
  }

  getTeams(): any[] {
    const teams = localStorage.getItem(this.storageKey);
    return teams ? JSON.parse(teams) : [];
  }
  getAllTournaments(): any[] {
    const tournaments = localStorage.getItem(this.storageKey);
    return tournaments ? JSON.parse(tournaments) : [];
  }

  addTournament(tournament: any): void {
    const tournaments = this.getAllTournaments();
    tournaments.push(tournament);
    localStorage.setItem(this.storageKey, JSON.stringify(tournaments));
  }

  deleteTournament(tournamentId: number): void {
    const tournaments = this.getAllTournaments().filter(t => t.id_tournament !== tournamentId);
    localStorage.setItem(this.storageKey, JSON.stringify(tournaments));
  }

  getMatchesByTournamentId(tournamentId: number): any[] {
    const tournaments = this.getAllTournaments();
    const tournament = tournaments.find(t => t.id_tournament === tournamentId);
    return tournament ? tournament.matches || [] : [];
  }

  setWinner(tournamentId: number, matchId: number): void {
    const tournaments = this.getAllTournaments();
    const tournament = tournaments.find(t => t.id_tournament === tournamentId);
    if (tournament && tournament.matches) {
      const match = tournament.matches.find((m: { id: number; }) => m.id === matchId);
      if (match) {
        match.status = 'completed'; 
      }
    }
    localStorage.setItem(this.storageKey, JSON.stringify(tournaments));
  }
}
