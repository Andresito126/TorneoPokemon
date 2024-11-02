import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlackListPageComponent } from './black-list-page/black-list-page.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    BlackListPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class BlackListModule { }
