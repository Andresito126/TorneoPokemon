import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'app-tournament-page',
  templateUrl: './tournament-page.component.html',
  styleUrl: './tournament-page.component.css'
})
export class TournamentPageComponent implements OnInit{
  showModal: boolean = false;
  showAddTournamentModal = false;
  tournaments: any[] = [];
  selectedTournamentMatches: any[] = [];

  constructor(private tournamentService: TournamentService) {}

  ngOnInit(): void {
    this.loadTournaments();
  }

  loadTournaments(): void {
    this.tournamentService.getAllTournaments().subscribe((data) => {
      this.tournaments = data;
    });
  }

  openModal() {
    this.showAddTournamentModal = true; 
  }

  closeModal() {
    this.showAddTournamentModal = false;
  }

  viewMatches(tournamentId: number): void {
    console.log(` partidos del torneo: ${tournamentId}`);
  }

  deleteTournament(tournamentId: number): void {
    this.tournamentService.deleteTournament(tournamentId).subscribe(() => {
      this.tournaments = this.tournaments.filter(
        (tournament) => tournament.id_tournament !== tournamentId
      );
      console.log(`Torneo con ID ${tournamentId} eliminado`);
    });
  }
  setWinner(matchId: number): void {

    this.tournamentService.setWinner(matchId).subscribe(() => {

      this.viewMatches(this.selectedTournamentMatches[0]?.id_tournament); 
    });
  }
}