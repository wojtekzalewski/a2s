import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';
import { PilotComponent } from '../pilot/pilot.component';

@Component({
  selector: 'app-pilot-room',
  imports: [PilotComponent],
  templateUrl: './pilot-room.component.html',
  styleUrl: './pilot-room.component.css',
})

export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];

  selectedPilot: Pilot | null = null;
  
  ngOnInit() {
    this.pilots.push(new Pilot('Sharon Valeri', '/assets/valerii.png'));
    this.pilots.push(new Pilot('Karl Agathon'));
  }

  select(pilot: Pilot | null): void {
    this.selectedPilot = pilot; 
  } 

}
