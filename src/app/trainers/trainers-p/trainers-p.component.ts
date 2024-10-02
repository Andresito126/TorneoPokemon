import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../services/trainer.service';
import { Trainer } from '../models/trainer';
@Component({
  selector: 'app-trainers-p',
  templateUrl: './trainers-p.component.html',
  styleUrl: './trainers-p.component.css'
})
export class TrainersPComponent implements OnInit {
  trainers: Trainer[] = []; 
  //MODALS
  showModal: boolean = false; 
  showDeleteModal: boolean = false;
  selectedTrainer: Trainer | null = null;
  showEditModal: boolean = false;
        
          //ADD

  openModal() {
    this.showModal = true; 
    
  }

  closeModal() {
    this.showModal = false; 
    this.selectedTrainer = null; 
  }

  onTrainerAdded(trainer: Trainer) {
    this.trainers.push(trainer); 
    this.closeModal();
  }

      //DELETE
 openDeleteModal(trainer: Trainer) {
    this.selectedTrainer = trainer; 
    this.showDeleteModal = true; 
}

  closeDeleteModal() {
    this.selectedTrainer = null; 
    this.showDeleteModal = false; 
  }

  confirmDelete() {
    if (this.selectedTrainer) {
        this.trainerService.deleteTrainer(this.selectedTrainer.id_trainer).subscribe(
            response => {
                // Elimina el entrenador de la lista local
                this.trainers = this.trainers.filter(t => t.id_trainer !== this.selectedTrainer!.id_trainer); 
                this.closeDeleteModal(); // Cierra el modal
            },
            error => {
                console.error('Error al eliminar el entrenador:', error);
               
            }
        );
    }
}

          //EDIT
  openEditModal(trainer: Trainer) {
    this.selectedTrainer = { ...trainer }; // crea una copia del entrenador 
    this.showEditModal = true;
  }

  onTrainerEdited(editedTrainer: Trainer) {
    if (editedTrainer.id_trainer) {
      // actualiza la lista de entrenadores 
      const index = this.trainers.findIndex(t => t.id_trainer === editedTrainer.id_trainer);
      if (index !== -1) {
        this.trainers[index] = editedTrainer; // reemplaza el entrenador editado
      }
  
      // llama al servicio para actualizar el entrenador en la bd 
      this.trainerService.updateTrainer(editedTrainer).subscribe(
        response => {
          console.log('Entrenador actualizado con éxito:', response);
          this.showEditModal = false; 
          this.selectedTrainer = null; 
        },
        error => {
          console.error('Error al actualizar el entrenador:', error);
        }
      );
    }
  }

      

  //////////////////////

  constructor(private trainerService: TrainerService) { }

  ngOnInit(): void {
    this.getTrainers();
  }

  getTrainers(): void {
    this.trainerService.getAllTrainers().subscribe(
      (data: Trainer[]) => {
        this.trainers = data; 
      },
      error => {
        console.error('Error al obtener entrenadores:', error);
      }
    );

}
}