import { Component, OnInit } from '@angular/core';
import { SpaceShipComponent } from '../space-ship/space-ship.component';
import { FighterShip, BomberShip, SpaceShip } from '../space-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from "../pilot-room/pilot-room.component";

@Component({
  selector: 'app-hangar',
  imports: [SpaceShipComponent, PilotRoomComponent],
  templateUrl: './hangar.component.html',
  styleUrl: './hangar.component.css'
})
export class HangarComponent implements OnInit{
  spaceShips: SpaceShip[] = [];

  ngOnInit() {
    this.spaceShips.push(new FighterShip(new Pilot('Lee Adama', '/assets/adama.png')));
    this.spaceShips.push(new BomberShip());
  }
}
