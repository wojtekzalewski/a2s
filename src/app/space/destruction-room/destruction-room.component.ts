import { Component, inject } from '@angular/core';
import { SpaceShipService } from '../space-ship.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-destruction-room',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './destruction-room.component.html',
  styleUrl: './destruction-room.component.css'
})
export class DestructionRoomComponent {
  private spaceShipService = inject(SpaceShipService);
  spaceShips = this.spaceShipService.hangarShips;

  shipIndexControl = new FormControl(null);
ship: any;

  orderDestruction() {
    if (this.shipIndexControl.value === null) {
      alert('Wybierz statek!');
      return;
    }
    this.spaceShipService.removeShip(this.shipIndexControl.value);
    this.shipIndexControl.reset();
  }
}
