import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainersPComponent } from './trainers-p/trainers-p.component';
import { AddNewButtonComponent } from './add-new-button/add-new-button.component';



@NgModule({
  declarations: [
    TrainersPComponent,
    AddNewButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TrainersModule { }
