import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { Match } from '../models/match';
@Component({
  selector: 'app-tournament-matches',
  templateUrl: './tournament-matches.component.html',
  styleUrl: './tournament-matches.component.css'
})
export class TournamentMatchesComponent implements  OnInit{
 @Input() tournamentId!: number;  
  matches: any[] = [];
  teams: any[] = []; 
  team1_id!: number;
  team2_id!: number;
  winner!: string;
  tournamentWinner!: string;

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    if (this.tournamentId) {
      this.loadMatches();
      this.loadTeams();
      this.loadTournamentWinner();
    }
  }

  loadMatches(): void {
    this.matches = this.matchService.getMatchesByTournamentId(this.tournamentId);
  }

  loadTeams(): void {
    const tournaments = JSON.parse(localStorage.getItem('tournaments') || '[]');
    const tournament = tournaments.find((t: any) => t.id_tournament === this.tournamentId);
    this.teams = tournament ? tournament.teams : [];
  }

  loadTournamentWinner(): void {
    const tournamentData = JSON.parse(localStorage.getItem('tournaments') || '[]');
    const tournament = tournamentData.find((t: any) => t.id_tournament === this.tournamentId);
    this.tournamentWinner = tournament ? tournament.winner : '';
  }

  onSubmitMatch(): void {
    const match = {
      team1_id: this.team1_id,
      team2_id: this.team2_id,
      score: "0 - 0", 
      date: new Date().toLocaleString(),
      winner: this.winner
    };
    this.matchService.addMatch(this.tournamentId, match);
    this.loadMatches();
  }

  declareTournamentWinner(): void {
    this.saveTournamentWinner(); 
  }

  saveTournamentWinner(): void {
    const tournaments = JSON.parse(localStorage.getItem('tournaments') || '[]');
    const tournament = tournaments.find((t: any) => t.id_tournament === this.tournamentId);
    if (tournament) {
      tournament.winner = this.tournamentWinner;
      localStorage.setItem('tournaments', JSON.stringify(tournaments));
      this.tournamentWinner = tournament.winner; 
    }
  }
}