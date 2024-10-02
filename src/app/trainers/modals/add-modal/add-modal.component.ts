import { Component,EventEmitter, Output } from '@angular/core';
import { Trainer } from '../../models/trainer';
import { TrainerService } from '../../services/trainer.service';
@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.css'
})
export class AddModalComponent {

  constructor(private trainerService: TrainerService) {} 

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

     // llamar al servicio 
     this.trainerService.createTrainer(newTrainer).subscribe(
      (response: Trainer) => {
        console.log('Entrenador creado:', response);
        // emitir el evento del neuvo entrenador
        this.trainerAdded.emit(response); 
        this.resetForm(); 
      },
      (error) => {
        console.error('Error al crear el entrenador:', error);
      }
    );
    
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