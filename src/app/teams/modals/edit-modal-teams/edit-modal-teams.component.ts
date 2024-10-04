import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-edit-modal-teams',
  templateUrl: './edit-modal-teams.component.html',
  styleUrls: ['./edit-modal-teams.component.css']
})
export class EditModalTeamsComponent implements OnInit {
  @Input() teamToEdit: any;
  @Output() teamEdited = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<void>();

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {}

  onEditTeam(): void {
    const updatedTeam = { ...this.teamToEdit };

    this.teamService.updateTeam(updatedTeam).subscribe(
      (response) => {
        this.teamEdited.emit(updatedTeam);
        this.onClose();
      },
      (error) => {
        console.error('Error al editar el equipo:', error);
      }
    );
  }

  onClose(): void {
    this.closeModal.emit();
  }
}
