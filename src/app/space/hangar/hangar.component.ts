import { Component, OnInit, ViewChild } from '@angular/core';
import { SpaceShipComponent } from '../space-ship/space-ship.component';
import { FighterShip, BomberShip, SpaceShip } from '../space-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from "../pilot-room/pilot-room.component";
import { EngineersRoomComponent } from '../engineers-room/engineers-room.component';

@Component({
  selector: 'app-hangar',
  imports: [SpaceShipComponent, PilotRoomComponent, EngineersRoomComponent],
  templateUrl: './hangar.component.html',
  styleUrl: './hangar.component.css'
})
export class HangarComponent implements OnInit{
  @ViewChild(PilotRoomComponent) pilotRoom!: PilotRoomComponent;
  spaceShips: SpaceShip[] = [];
  selectedPilot: Pilot | null = null;

  ngOnInit() {
    this.spaceShips.push(new FighterShip(new Pilot('Lee Adama', '/assets/adama.png')));
    this.spaceShips.push(new BomberShip());
  }

  dismissPilot(spaceShip: SpaceShip) {
    if (!spaceShip.pilot) { return; }
    this.pilotRoom.addPilot(spaceShip.pilot);
    delete spaceShip.pilot;
  }

  assignPilot(spaceShip: SpaceShip): void {
    if (!this.selectedPilot) { return; }
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.removePilot(this.selectedPilot);
  }

  setSelectedPilot(pilot: Pilot | null){
    this.selectedPilot = pilot; 
  }
}
