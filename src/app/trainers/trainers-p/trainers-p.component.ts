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
  //modal

  showModal: boolean = false; 
  openModal() {
    this.showModal = true; 
    
  }

  closeModal() {
    this.showModal = false; 
    
  }

  onTrainerAdded(trainer: Trainer) {
    this.trainers.push(trainer); 
    this.closeModal();
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