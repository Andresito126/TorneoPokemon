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
  @Output() tournamentAdded = new EventEmitter<void>(); 

  newTournament: Tournament = {
    name: '',
    start_date: new Date(),
    end_date: new Date(),
    status: 'ongoing'
  };

  constructor(private tournamentService: TournamentService) {}



  onSubmitTournament() {
    this.tournamentService.addTournament(this.newTournament).subscribe(() => {
      this.tournamentAdded.emit(); 
      this.close();
    });
  }

  close() {
    this.closeModal.emit();
  }
}