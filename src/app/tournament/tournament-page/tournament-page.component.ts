import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'app-tournament-page',
  templateUrl: './tournament-page.component.html',
  styleUrl: './tournament-page.component.css'
})
export class TournamentPageComponent implements OnInit{
  showAddTournamentModal = false;
  tournaments: any[] = [];
  selectedTournamentMatches: any[] = [];
  selectedTournamentId: number | null = null;

  constructor(private tournamentService: TournamentService) {}

  ngOnInit(): void {
    this.loadTournaments();
  }


  loadTournaments(): void {
    this.tournaments = this.tournamentService.getAllTournaments();
  }


  openModal(): void {
    this.showAddTournamentModal = true;
  }

  closeModal(): void {
    this.showAddTournamentModal = false;
  }

  viewMatches(tournamentId: number): void {
    this.selectedTournamentId = tournamentId;
    this.selectedTournamentMatches = this.tournamentService.getMatchesByTournamentId(tournamentId);
  }

  deleteTournament(tournamentId: number): void {
    this.tournamentService.deleteTournament(tournamentId);
    this.loadTournaments();  
  }

  setWinner(matchId: number): void {
    if (this.selectedTournamentId) {
      this.tournamentService.setWinner(this.selectedTournamentId, matchId);
      this.viewMatches(this.selectedTournamentId); 
    }
  }
}