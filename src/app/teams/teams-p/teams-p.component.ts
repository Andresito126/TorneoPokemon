import { Component } from '@angular/core';

@Component({
  selector: 'app-teams-p',
  templateUrl: './teams-p.component.html',
  styleUrl: './teams-p.component.css'
})
export class TeamsPComponent {
  showModal: boolean = false; 

            //ADD

  openModal() {
    this.showModal = true; 
    console.log("modal abiertpo")
    
  }
}
