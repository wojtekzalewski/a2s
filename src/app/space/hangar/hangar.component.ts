import { Component, OnInit } from '@angular/core';
import { SpaceShipComponent } from '../space-ship/space-ship.component';
import { FighterShip, BomberShip, SpaceShip } from '../space-ship';

@Component({
  selector: 'app-hangar',
  imports: [SpaceShipComponent],
  templateUrl: './hangar.component.html',
  styleUrl: './hangar.component.css'
})
export class HangarComponent implements OnInit{
  spaceShips: SpaceShip[] = [];

  ngOnInit() {
    this.spaceShips.push(new FighterShip());
    this.spaceShips.push(new BomberShip());
  }
}
