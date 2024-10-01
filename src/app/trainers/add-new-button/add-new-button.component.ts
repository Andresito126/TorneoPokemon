import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-new-button',
  templateUrl: './add-new-button.component.html',
  styleUrl: './add-new-button.component.css'
})
export class AddNewButtonComponent {

  @Input() nameButton:string = "";
}
