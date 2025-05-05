import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pilot } from '../pilot';
import { PilotComponent } from '../pilot/pilot.component';

@Component({
  selector: 'app-pilot-room',
  imports: [PilotComponent],
  templateUrl: './pilot-room.component.html',
  styleUrl: './pilot-room.component.css',
})

export class PilotRoomComponent implements OnInit {
  @Output() selected = new EventEmitter<Pilot | null>();
  pilots: Pilot[] = [];

  selectedPilot: Pilot | null = null;
  
  ngOnInit() {
    this.pilots.push(new Pilot('Sharon Valeri', '/assets/valerii.png'));
    this.pilots.push(new Pilot('Karl Agathon'));
    //this.pilots.push(new Pilot('WZ', '/assets/wz.jpg'));
  }

  addPilot(pilot: Pilot) {
    this.pilots.push(pilot);
  }

  removePilot(pilot: Pilot): void {
    const index = this.pilots.indexOf(pilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }

  select(pilot: Pilot | null): void {
    this.selectedPilot = pilot; 
    this.selected.emit(pilot);
  } 

}
