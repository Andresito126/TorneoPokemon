import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Trainer } from '../../models/trainer';
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})
export class EditModalComponent {

  @Input() trainer: Trainer | null = null; 
  @Input() isOpen: boolean = false;
  @Output() trainerEdited = new EventEmitter<Trainer>(); 

  onClose() {
    this.isOpen = false;
  }

  onSubmit() {
    if (this.trainer) {
      this.trainerEdited.emit(this.trainer); 
    }
    this.onClose(); 
  }
}