import { Component } from '@angular/core';

@Component({
  selector: 'app-space-ship',
  imports: [],
  templateUrl: './space-ship.component.html',
  styleUrl: './space-ship.component.css',
})
export class SpaceShipComponent {
  spaceShip = {
    modelName: 'Viper',
    imageUrl: '/assets/viper.png  ',
    health: 75,
    activeShields: true,
    activeWeapons: false,
  };
}
