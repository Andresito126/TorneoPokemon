import { Component } from '@angular/core';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent {
   tournamentName: string = '';
  startDate: string = '';
  endDate: string = '';
  newTeamNames: string[] = ['', '', '', ''];
  teams: string[] = [];
  isModalOpen: boolean = true;

  addTeams() {
    this.newTeamNames.forEach((teamName) => {
      if (teamName) {
        this.teams.push(teamName);
      }
    });
    this.newTeamNames = ['', '', '', ''];
  }

  onSubmitTournament() {
    const tournament = {
      id_tournament: Date.now(),
      name: this.tournamentName,
      start_date: this.startDate,
      end_date: this.endDate,
      teams: this.teams,
      status: 'ongoing',
      matches: [],
    };

    const existingTournaments = JSON.parse(localStorage.getItem('tournaments') || '[]');
    existingTournaments.push(tournament);
    localStorage.setItem('tournaments', JSON.stringify(existingTournaments));

    this.tournamentName = '';
    this.startDate = '';
    this.endDate = '';
    this.teams = [];

    this.close();
  }

  close() {
    this.isModalOpen = false;
  }
  
}