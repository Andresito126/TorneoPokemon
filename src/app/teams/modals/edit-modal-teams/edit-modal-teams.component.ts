import { Component, Input, Output, EventEmitter} from '@angular/core';
import { TeamService } from '../../services/team.service';
@Component({
  selector: 'app-edit-modal-teams',
  templateUrl: './edit-modal-teams.component.html',
  styleUrl: './edit-modal-teams.component.css'
})
export class EditModalTeamsComponent {
  @Input() teamToEdit: any; // el equipo que se esta editando
  @Output() teamEdited = new EventEmitter<any>(); // emitir el equipo editado
  @Output() closeModal = new EventEmitter<void>(); //  cerrar el modal desde el padre

  constructor(private teamService: TeamService) {}

 //enviaf
  onEditTeam() {
    this.teamService.updateTeam(this.teamToEdit).subscribe(response => {
      console.log('Team updated:', response);
      this.teamEdited.emit(response); // emitir lo editado al componente padre
    });
  }

  
  onClose() {
    this.closeModal.emit(); 
  }
}