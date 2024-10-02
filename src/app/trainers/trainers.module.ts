import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainersPComponent } from './trainers-p/trainers-p.component';
import { AddNewButtonComponent } from './add-new-button/add-new-button.component';
import { AddModalComponent } from './modals/add-modal/add-modal.component';
import { EditModalComponent } from './modals/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TrainersPComponent,
    AddNewButtonComponent,
    AddModalComponent,
    EditModalComponent,
    DeleteModalComponent,
    AddModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TrainersModule { }
