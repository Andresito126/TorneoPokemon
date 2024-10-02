import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { Trainer } from '../../models/trainer';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent {
  @Input() trainer: Trainer | null = null; 
  @Output() confirmDelete = new EventEmitter<void>(); 
  @Output() close = new EventEmitter<void>();

  onDelete() {
    this.confirmDelete.emit(); 
  }

  onClose() {
    this.close.emit();
  }
}