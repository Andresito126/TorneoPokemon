import { Component, EventEmitter, Output } from '@angular/core';
import { Tournament } from '../../models/tournament';
import { TournamentService } from '../../services/tournament.service';
@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrl: './add-tournament.component.css'
})
export class AddTournamentComponent  {
  @Output() closeModal = new EventEmitter<void>();
  tournamentName = '';
  startDate: string | null = null;
  endDate: string | null = null;
  teams: any[] = [];  // Lista de equipos disponibles
  selectedTeams: number[] = []; // IDs de los equipos seleccionados

  @Output() tournamentCreated = new EventEmitter<void>();

  constructor(private tournamentService: TournamentService) {}

  ngOnInit(): void {
    this.loadTeams(); // Cargar los equipos al iniciar el componente
  }

  loadTeams(): void {
    this.tournamentService.getAllTeams().subscribe((data) => {
      this.teams = data;
    });
  }

  toggleTeamSelection(teamId: number): void {
    if (this.selectedTeams.includes(teamId)) {
      this.selectedTeams = this.selectedTeams.filter(id => id !== teamId);
    } else {
      this.selectedTeams.push(teamId);
    }
  }

  onSubmitTournament(): void {
    const tournamentData = {
      name: this.tournamentName,
      start_date: this.startDate,
      end_date: this.endDate,
      teamIds: this.selectedTeams, // Agregamos los IDs de equipos seleccionados
    };

    this.tournamentService.createTournament(tournamentData).subscribe(() => {
      this.tournamentCreated.emit();
    });
  }
  close() {
    this.closeModal.emit();
  }
}