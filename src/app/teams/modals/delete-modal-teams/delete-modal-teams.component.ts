import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'app-delete-modal-teams',
  templateUrl: './delete-modal-teams.component.html',
  styleUrl: './delete-modal-teams.component.css'
})
export class DeleteModalTeamsComponent {
  @Input() team: Team | null = null; 
  @Output() confirmDelete = new EventEmitter<void>(); 
  @Output() close = new EventEmitter<void>();

  onDelete() {
    this.confirmDelete.emit(); 
  }

  onClose() {
    this.close.emit();
  }
}
