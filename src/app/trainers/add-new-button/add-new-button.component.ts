import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-button',
  templateUrl: './add-new-button.component.html',
  styleUrl: './add-new-button.component.css'
})
export class AddNewButtonComponent implements OnInit{

  @Input() nameButton: string = "";
  @Output() clickButton = new EventEmitter<void>(); 
  

  ngOnInit() {}

  onButtonClick() {
    this.clickButton.emit(); 
  }
  

}
