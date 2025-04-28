import { Component, Input } from '@angular/core';
import { SpaceShip } from '../space-ship';

@Component({
  selector: 'app-space-ship',
  imports: [],
  templateUrl: './space-ship.component.html',
  styleUrl: './space-ship.component.css',
})
export class SpaceShipComponent {
  //spaceShip = {
    //modelName: 'Viper',
    //imageUrl: '/assets/viper.png  ',
   // health: 75,
    //activeShields: true,
    //activeWeapons: false,
  //};  

  @Input({required: true}) spaceShip!: SpaceShip;
}
