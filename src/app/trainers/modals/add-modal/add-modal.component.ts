import { Component,EventEmitter, Output } from '@angular/core';
import { Trainer } from '../../models/trainer';
@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.css'
})
export class AddModalComponent {
  @Output() trainerAdded = new EventEmitter<Trainer>();
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();  
  }


  // variabkles para el formulario
  id_trainer: number = 0;  
  user_name: string = '';
  age: number = 0;
  region: string = '';
  experience: number = 0;
  favorite_type: string = '';

  //  enviar el formulario
  onSubmit() {
    const newTrainer: Trainer = {
      id_trainer: this.id_trainer,
      user_name: this.user_name,
      age: this.age,
      region: this.region,
      experience: this.experience,
      favorite_type: this.favorite_type
    };

    // evento para agregar un nuevo entrenador
    this.trainerAdded.emit(newTrainer);
    
    // limpiar el formulario
    this.resetForm();
  }

  // limpiar el formulario
  resetForm() {
    this.id_trainer = 0; 
    this.user_name = '';
    this.age = 0; 
    this.region = '';
    this.experience = 0; 
    this.favorite_type = '';
}
}