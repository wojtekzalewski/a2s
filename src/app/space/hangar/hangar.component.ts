import { Component, inject, ViewChild } from '@angular/core';
import { SpaceShipComponent } from '../space-ship/space-ship.component';
import { SpaceShip } from '../space-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';
import { EngineersRoomComponent } from '../engineers-room/engineers-room.component';
import { SpaceShipService } from '../space-ship.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-hangar',
  imports: [SpaceShipComponent, PilotRoomComponent, EngineersRoomComponent, AsyncPipe],
  templateUrl: './hangar.component.html',
  styleUrl: './hangar.component.css',
})
export class HangarComponent {
  private spaceShipService = inject(SpaceShipService);
  @ViewChild(PilotRoomComponent) pilotRoom!: PilotRoomComponent;
  spaceShips = this.spaceShipService.hangarShips;
  selectedPilot: Pilot | null = null;

  assignPilot(spaceShip: SpaceShip): void {
    if (!this.selectedPilot) { return; }
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.removePilot(this.selectedPilot);
  }

  dismissPilot(spaceShip: SpaceShip): void {
    if (!spaceShip.pilot) { return; }
    this.pilotRoom.addPilot(spaceShip.pilot);
    delete spaceShip.pilot;
  }

  setSelectedPilot(pilot: Pilot | null) {
    this.selectedPilot = pilot;
  }
}
