import { Component, } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Team } from '../models/team';
@Component({
  selector: 'app-teams-p',
  templateUrl: './teams-p.component.html',
  styleUrl: './teams-p.component.css'
})
export class TeamsPComponent {

  constructor(private teamService: TeamService) {} 

  //MODALS
  showModal: boolean = false; 

          //OPEN
  openModal() {
    this.showModal = true; 
    console.log("modal abiertpo")
  }

  onClose() {
    this.showModal = false;
    console.log('Modal cerrado desde TeamsPComponent');
  }



            //ADD

  onTeamAdded(team: Team) {
    console.log('Nuevo equipo añadido:', team);
   
  }

  }

